import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PenalCodeViewer = () => {
  const [penalCodeData, setPenalCodeData] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

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

  const renderArticles = (articles) => (
    <ul>
      {articles.map((article) => (
        <li key={article.number}>
          <strong>Article {article.number} : {article.title}</strong>
          <p>{article.content}</p>
          {article.details && <p><em>Détails : {article.details}</em></p>}
          {article.penalties && (
            <ul>
              {article.penalties.map((penalty, index) => (
                <li key={index}>
                  {penalty.type} {penalty.duration ? `- ${penalty.duration}` : ""}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  if (!penalCodeData) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{penalCodeData.title}</h1>
      <h2>{penalCodeData.preliminary_title.name}</h2>
      {renderArticles(penalCodeData.preliminary_title.articles)}

      <h2>Livres</h2>
      {penalCodeData.books.map((book) => (
        <div key={book.id}>
          <h3 onClick={() => setSelectedBook(book.id)} style={{ cursor: "pointer" }}>
            {book.name}
          </h3>
          {selectedBook === book.id && (
            <div>
              {book.chapters.map((chapter) => (
                <div key={chapter.id}>
                  <h4>{chapter.name}</h4>
                  {chapter.articles && renderArticles(chapter.articles)}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PenalCodeViewer;