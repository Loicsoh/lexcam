import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Livrelist = () => {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    // Charger les données à partir du fichier JSON
    axios.get('/data/db.json')
      .then(response => {
        setLivres(response.data.livres);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
      });
  }, []);

  return (
    <div className="Livrelist">
      <h1>Liste des livres</h1>
      {livres.map((livre) => (
        <div className="livre" key={livre.id}>
          <a href="#" className="livre-titre">titre :{livre.id}</a>
          <div className="livre-chapitre">
            {livre.parties.map((partie, index) => (
              <div key={index}>
                <h3>partie :{partie.titre}</h3>
                {partie.chapitres.map((chapitre, index) => (
                  <div key={index}>
                    <h4>chapitre :{chapitre.titre}</h4>
                    {chapitre.sections.map((section, index) => (
                      <div key={index}>
                        <p> section :{section.titre}</p>
                        {section.articles.map((article, index) => (
                          <div key={index}>
                            <h5>article : {article.numero}</h5>
                            <a href='#' className='article'>{article.description}</a>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Livrelist;