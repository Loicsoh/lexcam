import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Livrelist = () => {
  const [penalCodeData, setPenalCodeData] = useState(null);
  const [openSections, setOpenSections] = useState({
    preliminary_title: false,
    book_1: false,
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

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderArticles = (articles) => (
    <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
      {articles.map((article) => (
        <li key={article.number}>
          <strong>Article {article.number} : {article.title}</strong>
          <p>{article.content}</p>
          {article.details && <p><em>Détails : {article.details}</em></p>}
          {article.penalties && (
            <ul>
              {article.penalties.map((penalty, index) => (
                <li key={index}>
                  {penalty.type}{" "}
                  {penalty.duration ? `- ${penalty.duration}` : ""}{" "}
                  {penalty.amount ? `- ${penalty.amount}` : ""}{" "}
                  {penalty.condition ? `(${penalty.condition})` : ""}
                </li>
              ))}
            </ul>
          )}
          {article.prescription && (
            <ul>
              {article.prescription.map((pres, index) => (
                <li key={index}>
                  Prescription {pres.type} - {pres.duration}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  const renderSections = (sections) => (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <h3>{section.name}</h3>
          {renderArticles(section.articles)}
        </div>
      ))}
    </div>
  );

  const renderChapters = (chapters) => (
    <div>
      {chapters.map((chapter) => (
        <div key={chapter.id}>
          <h2>{chapter.name}</h2>
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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{penalCodeData.title}</h1>
      <p><em>Dernière mise à jour : {penalCodeData.last_updated}</em></p>

      {/* Titre préliminaire */}
      <h2
        onClick={() => toggleSection("preliminary_title")}
        style={{ cursor: "pointer", color: "#2c3e50" }}
      >
        {openSections.preliminary_title ? "▼" : "▶"} Titre préliminaire :{" "}
        {penalCodeData.preliminary_title.name}
      </h2>
      {openSections.preliminary_title && (
        <div>{renderArticles(penalCodeData.preliminary_title.articles)}</div>
      )}

      {/* Livres */}
      {penalCodeData.books.map((book) => (
        <div key={book.id}>
          <h2
            onClick={() => toggleSection(book.id)}
            style={{ cursor: "pointer", color: "#2c3e50" }}
          >
            {openSections[book.id] ? "▼" : "▶"} {book.name}
          </h2>
          {openSections[book.id] && <div>{renderChapters(book.chapters)}</div>}
        </div>
      ))}


      {/* Partie réglementaire */}
      <h2
        onClick={() => toggleSection("regulatory_part")}
        style={{ cursor: "pointer", color: "#2c3e50" }}
      >
        {openSections.regulatory_part ? "▼" : "▶"}{" "}
        {penalCodeData.regulatory_part.name}
      </h2>
      {openSections.regulatory_part && (
        <div>{renderArticles(penalCodeData.regulatory_part.articles)}</div>
      )}

      {/* Dispositions finales */}
      <h2
        onClick={() => toggleSection("final_provisions")}
        style={{ cursor: "pointer", color: "#2c3e50" }}
      >
        {openSections.final_provisions ? "▼" : "▶"}{" "}
        {penalCodeData.final_provisions.name}
      </h2>
      {openSections.final_provisions && (
        <div>{renderArticles(penalCodeData.final_provisions.articles)}</div>
      )}
    </div>
  );
};

export default Livrelist;