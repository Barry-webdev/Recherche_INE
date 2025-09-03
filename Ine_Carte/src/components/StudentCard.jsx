function StudentCard (props) {
    const {nom, ine, institution, programme, niveau, annee, validite, estValide} = props
    return(
            <div>
                <div className="personnal-information">
                    <div>
                        <h2>Information Personnelles</h2>
                        <p>
                            <strong>Nom Complet : </strong>
                        </p>
                        <p>
                            <strong>INE :</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <h2>Information de l'Institution</h2>
                    <p>
                        <strong>Institution :</strong> {institution}
                    </p>
                    <p>
                        <strong>Programme :</strong> {programme}
                    </p>
                    <p>
                        <strong>Niveau :</strong> {niveau}
                    </p>
                    <p>
                        <strong>Année :</strong> {annee}
                    </p>
                </div>
                        {estValide === true ?(
                            <div className="result-success">
                                <span>
                                    ✅
                                </span>
                                <p>Carte Valide</p>
                                <strong>Validité :</strong> {validite}
                            </div>
                        ) : (
                            <div className="result-error">
                                <span>
                                    ❌
                                </span>
                                <p>Carte invalide</p>
                            </div>

                        )}
            </div>
    )
}

export default StudentCard;