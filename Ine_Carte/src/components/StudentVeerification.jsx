import { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentVerification.css";


function StudentVerification (event) {
    const [ineRecherche, setIneRecherche] = useState("");
    const [etudiant, setEtudiant] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleIneChange (event) {
        setIneRecherche(event.target.value)
    }

    async function handleIneSearch2 () {
        setIsLoading(true);
        try {

            const url ="https://api.parcoursupguinee.org/api/Student/GetStudentCardInfo/" + ineRecherche;

            const response = await fetch(url);

            const data = await response.json();

            setEtudiant({
                nom:data.fullName,
                ine:data.identifiantNationalEleve,
                institution:data.institution,
                programme:data.programme,
                niveau:data.niveau,
                annee:data.anneeUniversitaire,
                validite:data.startYear + data.endYear,
                estValide:data.isValid,
            })
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.error("Erreur lors de la recherche", error);
        }
    }




    return (
        <div className="app">
            <div className="search-bar">
                <input 
                    onChange={handleIneChange}
                    type="search"
                    placeholder="Rechercher un INE"
                />

                <button
                    onClick={handleIneSearch2}
                >
                    🔍
                </button>
            </div>

            <div className="header">
                <h1>ParcourSup</h1>
                <p>Application de vérification d'INE</p>
            </div>
            {isLoading ? (
                <div className="result">
                    <span>⏳</span>
                    <p>Chargment...</p>
                </div>
            ) : etudiant == null ? (
                <div className="result">
                    <span>🔍</span>
                    <p>Veuillez fournir un INE valide !</p>
                </div>
            ) : (
                <StudentCard
                    nom={etudiant.nom}
                    ine={etudiant.ine}
                    institution={etudiant.institution}
                    programme={etudiant.programme}
                    niveau={etudiant.niveau}
                    annee={etudiant.annee}
                    validite={etudiant.validite}
                    estValide={etudiant.estValide}
                />
            )}

        </div>
    )
}

export default StudentVerification;