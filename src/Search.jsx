import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [penalCodeData, setPenalCodeData] = useState(null); // Stocke les données combinées des deux fichiers JSON
  const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche
  const [searchResults, setSearchResults] = useState([]); // Résultats de la recherche

  // Charger les données des deux fichiers JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dbResponse, livre1Response] = await Promise.all([
          axios.get("/data/db.json"), // Charger db.json
          axios.get("/data/livre1.json"), // Charger livre1.json
        ]);

        // Fusionner les données des deux fichiers
        const combinedData = {
          preliminary_title: dbResponse.data.preliminary_title || livre1Response.data.preliminary_title,
          books: [...(dbResponse.data.books || []), ...(livre1Response.data.books || [])],
          regulatory_part: dbResponse.data.regulatory_part || livre1Response.data.regulatory_part,
          final_provisions: dbResponse.data.final_provisions || livre1Response.data.final_provisions,
        };

        setPenalCodeData(combinedData); // Stocker les données combinées
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchData();
  }, []);

  // Fonction pour gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm || !penalCodeData) {
      setSearchResults([]);
      return;
    }

    const results = [];

    // Fonction utilitaire pour filtrer les articles
    const filterArticles = (articles) =>
      articles.filter(
        (article) =>
          article.number.toString().includes(searchTerm) ||
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Recherche dans Titre préliminaire
    if (penalCodeData.preliminary_title && penalCodeData.preliminary_title.articles) {
      const filteredArticles = filterArticles(penalCodeData.preliminary_title.articles);
      if (filteredArticles.length > 0) {
        results.push({
          name: penalCodeData.preliminary_title.name,
          articles: filteredArticles,
        });
      }
    }

    // Recherche dans les Livres
    if (penalCodeData.books) {
      penalCodeData.books.forEach((book) => {
        if (book.chapters) {
          book.chapters.forEach((chapter) => {
            let chapterResults = [];

            // Recherche dans les articles du chapitre
            if (chapter.articles) {
              const filteredArticles = filterArticles(chapter.articles);
              if (filteredArticles.length > 0) {
                chapterResults.push({
                  name: chapter.name,
                  articles: filteredArticles,
                });
              }
            }

            // Recherche dans les sections du chapitre
            if (chapter.sections) {
              chapter.sections.forEach((section) => {
                const filteredSectionArticles = filterArticles(section.articles);
                if (filteredSectionArticles.length > 0) {
                  chapterResults.push({
                    name: section.name,
                    articles: filteredSectionArticles,
                  });
                }
              });
            }

            if (chapterResults.length > 0) {
              results.push({
                name: `${book.name} - ${chapter.name}`,
                sections: chapterResults,
              });
            }
          });
        }
      });
    }

    // Recherche dans Partie réglementaire
    if (penalCodeData.regulatory_part && penalCodeData.regulatory_part.articles) {
      const filteredArticles = filterArticles(penalCodeData.regulatory_part.articles);
      if (filteredArticles.length > 0) {
        results.push({
          name: penalCodeData.regulatory_part.name,
          articles: filteredArticles,
        });
      }
    }

    // Recherche dans Dispositions finales
    if (penalCodeData.final_provisions && penalCodeData.final_provisions.articles) {
      const filteredArticles = filterArticles(penalCodeData.final_provisions.articles);
      if (filteredArticles.length > 0) {
        results.push({
          name: penalCodeData.final_provisions.name,
          articles: filteredArticles,
        });
      }
    }

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

export default Search;