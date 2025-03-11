
// import Livrelist from "./Livrelist";
import { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {

  const [livres, setLivre] = useState([

        {
          livres = [
            livre_1 = { id: 1 , titre: 'Disposition en generale', titre: [{num: 1, libelle: 'Champ application des loies penal'}], 
            chapitre_1: [{ libelle: 'territorialite de la loie penal', articles: [{article_1: 'blablea article 1'},
                                {article_2: 'blablea article 2'},
                                {article_3: 'blablea article 3'},
                                {article_4: 'blablea article 4'},
                                {article_5: 'blablea article 5'}
            ]}],
            chapitre_2: [{
                libelle: 'territorialite de la loie penal', articles: [{article_1: 'blablea article 1'},
                                {article_2: 'blablea article 2'},
                                {article_3: 'blablea article 3'},
                                {article_4: 'blablea article 4'},
                                {article_5: 'blablea article 5'}
            ]}]    
        },  
        


            livre_2 = { titre: 'livre2', auteur: 'auteur2', annee: 2001 },


            livre_3 = { titre: 'livre3', auteur: 'auteur3', annee: 2002 },
        ]
        }
  ]);

  
  return (
    <div className="home">
      <Navbar />
      {/* // <Livrelist /> */}
      <div className='container'>
        <h1>page d&apos;acceuil</h1>
        <div className="listlivre">
          {
            livres.map( (livre) => (
              <div className="livre" key={livre.id}>
                <a className="theme-livre" href="#">{livre.theme}</a>
                <p className="parties">titre du livre</p>
                <h1 className="chapitre-livre">{livre.chapitres}</h1>
                <span className="sections-livre">{livre.sections}</span>
                <small className="articles">{livre.articles}</small>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;