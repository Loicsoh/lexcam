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
          <h2>{livre.titre}</h2>
          <a href="">{livre.theme}</a>
          <div className="livre-chapitre">
            {livre.chapitres.map((chapitre, chapitreIndex) => (
              <div key={chapitreIndex}>
                <h3>{chapitre.titre}</h3>
                {chapitre.articles.map((article, articleIndex) => (
                  <div key={articleIndex}>
                    <h4>Article {article.num}</h4>
                    <p>{article.description}</p>
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