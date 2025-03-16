import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PenalCodeViewer = () => {
  const [selectedBook, setSelectedBook] = useState(null);

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

  return (
    <div>
      <h1>{penalCodeData.title}</h1>
      <h2>Titre préliminaire</h2>
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
                  {chapter.sections
                    ? chapter.sections.map((section) => (
                        <div key={section.id}>
                          <h5>{section.name}</h5>
                          {renderArticles(section.articles)}
                        </div>
                      ))
                    : renderArticles(chapter.articles)}
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