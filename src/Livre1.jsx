import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Livre1 = () => {
  const [penalCodeDat, setPenalCodeDat] = useState(null);
  const [openSections, setOpenSections] = useState({
    book_1: false,
  });

  // Charger les données à partir du fichier JSON
  useEffect(() => {
    axios.get('/data/livre1.json')
      .then(response => {
        setPenalCodeDat(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
      });
  }, []);


// fonction d'ouverture et fermeture des sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };


  // fonction de rendu des articles

  const renderArticles = (articles) => {
    return (
      <ul className="livrelist-article-list">
        {articles.map((article) => (
          <li key={article.number} className="livrelist-article-item">
            <strong>Article {article.number} : {article.title}</strong>
            <p>{article.content}</p>
            {article.details && <p><em>Détails : {article.details}</em></p>}    
          </li>
        ))}
      </ul>
    );
  };

  // fonction de rendu des sections
  const renderSections = (sections) => (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <h3 className="livrelist-article-item">{section.name}</h3>
          {renderArticles(section.articles)}
        </div>
      ))}
    </div>
  );

  // fonction de rendu des chapitres
  const renderChapters = (chapters) => (
    <div>
      {chapters.map((chapter) => (
        <div key={chapter.id}>
          <h2 className="livrelist-article-item">{chapter.name}</h2>
          {chapter.sections
            ? renderSections(chapter.sections)
            : renderArticles(chapter.articles)}
        </div>
      ))}
    </div>
  );

  if (!penalCodeDat) {
    return <div></div>;
  }

  return (
    <div className="livrelist-container">
        {/* Livres */}
        {penalCodeDat.books.map((book) => (
          <div key={book.id}>
            <div
            className="livrelist-section"
            onClick={() => toggleSection(book.id)}
          >
            <h2 className='livrelist-section-title'>
              {openSections[book.id] ? "▼" : "▶"} {book.name}
            </h2>
          </div>
          
          </div>
        ))}
      {/* Contenu des sections */}
      <div className="livrelist-content">
        {openSections.book_1 && (
          <div>{renderChapters(penalCodeDat.books.find(book => book.id === "book_1").chapters)}</div>
        )}
      </div>
    </div>
  );
};

export default Livre1;