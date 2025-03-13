const Banniere = () => {
    return ( 
        <div>
            <div className="penal">
                <div className="penal-img">
                    <img src="" alt="code pénal" />
                </div>
                <div className="penal-texte">
                    <p>Notre intention est de vous offrir un accès rapide, structuré et intuitif aux textes de loi du <b>code pénal du cameroun</b>. L&apos;'objectif est de faciliter la consultation des dispositions légales par les citoyens, les professionnels du droit et tout personne souhaitant mieux comprendre la reglementation en vigueur.</p>
                </div>
            </div>

            <div className="civil">
                <div className="civil-img">
                    <img src="" alt="" />
                </div>
                <div className="civil texte">
                    <p>
                        Nous vison a rendre le <b>code civil du cameroun</b> accessible a tous, en offrant une plaforme intuitive pour la consultation des textes de loi relatifs aux relations entre citoyens, aux contrats, aux biens et à la famille.
                    </p>
                </div>
            </div>

            <div className="travail">
                <div className="travail-img">
                    <img src="" alt="code du travail" />
                </div>
                <div className="travail-texte">
                    <p>
                       L&apos;'integration du <b>code de travail du cameroun</b> dans cette application a pour intention de fournit un accès rapide et structuré aux règles encadrant les relations de travail entre employeurs et employés. cette section permet de aux travaileurs, aux entrepises et aux juristes de consulter facilement les droits, obligations et réglementationdu monde du travail. 
                    </p>
                </div>
            </div>
            
            <div className="route">
                <div className="route-img">
                    <img src="" alt="code de la route" />
                </div>
                <div className="route-texte">
                    <p>
                    L&apos;application LexCam intègre le <b>Code de la Route du Cameroun</b> afin de permettre aux conducteurs, apprentis chauffeurs et agents de la circulation d’accéder facilement aux règles de la circulation, aux sanctions et aux bonnes pratique de route.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Banniere;