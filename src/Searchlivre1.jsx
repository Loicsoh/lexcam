import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Searchlivre1 = () => {
  const [penalCodeData, setPenalCodeData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  React.useEffect(() => {
    axios.get('/data/livre1.json')
      .then(response => {
        setPenalCodeData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
      });
  }, []);

  

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const results = [];

    // Recherche dans Titre préliminaire
    

    // Recherche dans les Livres
    penalCodeData.books.forEach((book) => {
      book.chapters.forEach((chapter) => {
        const filteredArticles = chapter.articles
          ? chapter.articles.filter(
              (article) =>
                article.number.toString().includes(searchTerm) ||
                article.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : [];

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

        if (filteredArticles.length > 0 || filteredSections.length > 0) {
          results.push({
            name: `${book.name} - ${chapter.name}`,
            articles: filteredArticles,
            sections: filteredSections,
          });
        }
      });
    });

    // Recherche dans Partie réglementaire
    if (penalCodeData.regulatory_part) {
      const filteredArticles = penalCodeData.regulatory_part.articles.filter(
        (article) =>
          article.number.toString().includes(searchTerm) ||
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredArticles.length > 0) {
        results.push({
          name: penalCodeData.regulatory_part.name,
          articles: filteredArticles,
        });
      }
    }

    // Recherche dans Dispositions finales
    

    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <h2>Rechercher un article ou une section</h2>
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Entrez un numéro d'article ou un titre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </form>

      <div className="search-results">
        {searchResults.length === 0 && searchTerm && (
          <p className="no-results">Aucun résultat trouvé pour {searchTerm}.</p>
        )}
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-item">
            <h3>{result.name}</h3>
            {result.articles && result.articles.length > 0 && (
              <ul className="article-list">
                {result.articles.map((article) => (
                  <li key={article.number} className="article-item">
                    <strong>Article {article.number} : {article.title}</strong>
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
                        <strong>Article {article.number} : {article.title}</strong>
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
    preliminary_title: PropTypes.shape({
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
    }),
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
    
  }).isRequired,
};

export default Searchlivre1;