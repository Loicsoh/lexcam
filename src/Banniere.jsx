const Banniere = () => {
    return ( 
        <div className="contain-cards">
            <div className="card">
                <div className="img-card">
                    <img src="/src/assets/images/code penal.jpg" alt="code pénal" />
                </div>
                <div className="texte-card">
                    <p>Notre intention est de vous offrir un accès rapide, structuré et intuitif aux textes de loi du <b>code pénal du cameroun</b>. L&apos;'objectif est de faciliter la consultation des dispositions légales par les citoyens, les professionnels du droit et tout personne souhaitant mieux comprendre la reglementation en vigueur.</p>
                </div>
            </div>

            <div className="card">
                <div className="img-card">
                    <img src="/src/assets/images/code civil.jpg" alt="code civil" />
                </div>
                <div className="texte-card">
                    <p>
                        Nous visons a rendre le <b>code civil du cameroun</b> accessible a tous, en offrant une plaforme intuitive pour la consultation des textes de loi relatifs aux relations entre citoyens, aux contrats, aux biens et à la famille.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="img-card">
                    <img src="/src/assets/images/code du travail.jpg" alt="code du travail" />
                </div>
                <div className="texte-card">
                    <p>
                       L&apos;integration du <b>code de travail du cameroun</b> dans cette application a pour intention de fournit un accès rapide et structuré aux règles encadrant les relations de travail entre employeurs et employés. cette section permet de aux travaileurs, aux entrepises et aux juristes de consulter facilement les droits, obligations et réglementationdu monde du travail. 
                    </p>
                </div>
            </div>
            
            <div className="card">
                <div className="img-card">
                    <img src="/src/assets/images/code de la route.jpg" alt="code de la route" />
                </div>
                <div className="texte-card">
                    <p>
                    L&apos;application LexCam intègre le <b>Code de la Route du Cameroun</b> afin de permettre aux conducteurs, apprentis chauffeurs et agents de la circulation d’accéder facilement aux règles de la circulation, aux sanctions et aux bonnes pratique de route.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="img-card">
                    <img src="/src/assets/images/code des impots.jpg" alt="code des impots" />
                </div>
                <div className="texte-card">
                    <p>
                        LexCam vise à fournir une plateforme accéssible pour les profesionnels du droit et les citoyens camerounais. Dans ce contexte, nous souhaitons integrer le <b>code des impots du cameroun</b> dans votre application a fin de permettre aux utilisateurs d&apos;accéder facilement aux informations relatives aux impots et taxes en vigueur au cameroun.  
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Banniere;