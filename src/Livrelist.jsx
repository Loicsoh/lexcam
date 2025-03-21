import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

const Livrelist = () => {
  const [penalCodeData, setPenalCodeData] = useState(null);
  const [openSections, setOpenSections] = useState({
    preliminary_title: false,
    book_1: false,
    book_2: false,
    regulatory_part: false,
    final_provisions: false,
  });

  useEffect(() => {
    // Charger les données à partir du fichier JSON
    axios.get('/data/db.json')
      .then(response => {
        setPenalCodeData(response.data);
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

  if (!penalCodeData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="livrelist-container">
      <Search />

      <h1 className="livrelist-title">{penalCodeData.title}</h1>
      <p className="livrelist-last-updated">
        Dernière mise à jour : {penalCodeData.last_updated}
      </p>


      {/* Liste des sections */}
      <div className="livrelist-sections-container">
        {/* Titre préliminaire */}
        <div
          className="livrelist-section"
          onClick={() => toggleSection("preliminary_title")}
        >
          <h2>
            {openSections.preliminary_title ? "▼" : "▶"}{" "}
            {penalCodeData.preliminary_title.name}
          </h2>
        </div>

        {/* Livres */}
        {penalCodeData.books.map((book) => (
          <div key={book.id}>
            <div
            className="livrelist-section"
            onClick={() => toggleSection(book.id)}
          >
            <h2 className='livrelist-section-title'>
              {openSections[book.id] ? "▼" : "▶"} {book.name}
            </h2>
          </div>
          {openSections[book.id] && (
            <div>{renderChapters(book.chapters)}</div>
          )}
          </div>
        ))}

        {/* Partie réglementaire */}
        <div
          className="livrelist-section"
          onClick={() => toggleSection("regulatory_part")}
        >
          <h2 className='section-title'>
            {openSections.regulatory_part ? "▼" : "▶"}{" "}
            {penalCodeData.regulatory_part.name}
          </h2>
        </div>
        
        {openSections.regulatory_part && (
          <div>{renderArticles(penalCodeData.regulatory_part.articles)}</div>
        )}

        {/* Dispositions finales */}
        <div
          className="livrelist-section"
          onClick={() => toggleSection("final_provisions")}
        >
          <h2>
            {openSections.final_provisions ? "▼" : "▶"}{" "}
            {penalCodeData.final_provisions.name}
          </h2>
        </div>
        {openSections.final_provisions && (
          <div>{renderArticles(penacodeData.final_provisions.articles)}</div>
        )}
      </div>

      {/* Contenu des sections */}
      <div className="livrelist-content">
        {openSections.preliminary_title && (
          <div>{renderArticles(penalCodeData.preliminary_title.articles)}</div>
        )}
        {openSections.book_1 && (
          <div>{renderChapters(penalCodeData.books.find(book => book.id === "book_1").chapters)}</div>
        )}
        {openSections.book_2 && (
          <div>{renderChapters(penalCodeData.books.find(book => book.id === "book_2").chapters)}</div>
        )}
        {openSections.regulatory_part && (
          <div>{renderArticles(penalCodeData.regulatory_part.articles)}</div>
        )}
        {openSections.final_provisions && (
          <div>{renderArticles(penalCodeData.final_provisions.articles)}</div>
        )}
      </div>
    </div>
  );
};

export default Livrelist;