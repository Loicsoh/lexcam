import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Searchlivre1 = () => {
  const [penalCodeData, setPenalCodeData] = useState({}); // Stocke les données JSON
  const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche
  const [searchResults, setSearchResults] = useState([]); // Résultats de la recherche

  // Charger les données JSON depuis le fichier livre1.json
  useEffect(() => {
    axios
      .get("/data/livre1.json")
      .then((response) => {
        setPenalCodeData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
      });
  }, []);

  // Effectuer la recherche à chaque modification de searchTerm ou penalCodeData
  useEffect(() => {
    if (!searchTerm || !penalCodeData.books) {
      setSearchResults([]);
      return;
    }

    const results = [];

    // Recherche dans les livres
    penalCodeData.books.forEach((book) => {
      book.chapters.forEach((chapter) => {
        // Filtrer les articles du chapitre
        const filteredArticles = chapter.articles
          ? chapter.articles.filter(
              (article) =>
                article.number.toString().includes(searchTerm) ||
                article.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : [];

        // Filtrer les sections du chapitre
        const filteredSections = chapter.sections
          ? chapter.sections
              .map((section) => ({
                ...section,
                articles: section.articles.filter(
                  (article) =>
                    article.number.toString().includes(searchTerm) ||
                    article.title.toLowerCase().includes(searchTerm.toLowerCase())
                ),
              }))
              .filter((section) => section.articles.length > 0)
          : [];

        // Ajouter les résultats si des articles ou sections correspondent
        if (filteredArticles.length > 0 || filteredSections.length > 0) {
          results.push({
            name: `${book.name} - ${chapter.name}`,
            articles: filteredArticles,
            sections: filteredSections,
          });
        }
      });
    });

    setSearchResults(results);
  }, [searchTerm, penalCodeData]); // Déclencher la recherche à chaque modification de searchTerm ou penalCodeData

  return (
    <div className="search-container">
      <h2>Rechercher un article ou une section du livre I</h2>
      <form className="search">
        <input
          type="text"
          placeholder="Entrez un numéro d'article ou un titre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
          className="search-input"
        />
      </form>

      <div className="search-results">
        {searchResults.length === 0 && searchTerm && (
          <p className="no-results">Aucun résultat trouvé pour "{searchTerm}".</p>
        )}
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-item">
            <h3>{result.name}</h3>
            {result.articles && result.articles.length > 0 && (
              <ul className="article-list">
                {result.articles.map((article) => (
                  <li key={article.number} className="article-item">
                    <strong>
                      Article {article.number} : {article.title}
                    </strong>
                    <p>{article.content}</p>
                    {article.details && <p><em>Détails : {article.details}</em></p>}
                    {article.penalties && (
                      <ul>
                        {article.penalties.map((penalty, idx) => (
                          <li key={idx}>
                            {penalty.type}{" "}
                            {penalty.duration ? `- ${penalty.duration}` : ""}{" "}
                            {penalty.amount ? `- ${penalty.amount}` : ""}{" "}
                            {penalty.condition ? `(${penalty.condition})` : ""}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {result.sections &&
              result.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="section-item">
                  <h4>{section.name}</h4>
                  <ul className="article-list">
                    {section.articles.map((article) => (
                      <li key={article.number} className="article-item">
                        <strong>
                          Article {article.number} : {article.title}
                        </strong>
                        <p>{article.content}</p>
                        {article.details && <p><em>Détails : {article.details}</em></p>}
                        {article.penalties && (
                          <ul>
                            {article.penalties.map((penalty, idx) => (
                              <li key={idx}>
                                {penalty.type}{" "}
                                {penalty.duration ? `- ${penalty.duration}` : ""}{" "}
                                {penalty.amount ? `- ${penalty.amount}` : ""}{" "}
                                {penalty.condition ? `(${penalty.condition})` : ""}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Searchlivre1.propTypes = {
  penalCodeData: PropTypes.shape({
    books: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        chapters: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            articles: PropTypes.arrayOf(
              PropTypes.shape({
                number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                title: PropTypes.string,
                content: PropTypes.string,
                details: PropTypes.string,
                penalties: PropTypes.arrayOf(PropTypes.object),
              })
            ),
            sections: PropTypes.arrayOf(
              PropTypes.shape({
                name: PropTypes.string,
                articles: PropTypes.arrayOf(
                  PropTypes.shape({
                    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                    title: PropTypes.string,
                    content: PropTypes.string,
                    details: PropTypes.string,
                    penalties: PropTypes.arrayOf(PropTypes.object),
                  })
                ),
              })
            ),
          })
        ),
      })
    ),
  }),
};

export default Searchlivre1;