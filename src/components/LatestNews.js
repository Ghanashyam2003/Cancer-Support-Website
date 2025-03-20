import React, { useState } from "react";
import "./LatestNews.css";

const newsData = [
  {
    category: "CHILDREN",
    image: "/images/news1.jpg",
    title: "Tuesday Tips: Being Realistic With Your Goals",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...",
    fullDescription: "This article discusses practical strategies for setting realistic goals, staying motivated, and achieving personal success in everyday life.",
    date: "May 15, 2021",
    author: "admin",
  },
  {
    category: "FOOD & HEALTH",
    image: "/images/news2.jpg",
    title: "20th Anniversary of Growing Up Asian in America",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...",
    fullDescription: "A look back at 20 years of cultural identity, representation, and the challenges faced by Asian Americans in modern society.",
    date: "May 15, 2021",
    author: "admin",
  },
  {
    category: "EDUCATION",
    image: "/images/news3.jpg",
    title: "Stroke care gains in Puerto Rico falter after Hurricane Maria",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...",
    fullDescription: "An investigative report on the impact of Hurricane Maria on healthcare in Puerto Rico, focusing on stroke care and emergency response challenges.",
    date: "May 15, 2021",
    author: "admin",
  },
];

const LatestNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="latest-news-container">
      <h2 className="news-title">Latest News</h2>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <div key={index} className="news-card" onClick={() => setSelectedNews(news)}>
            <div className="news-image" style={{ backgroundImage: `url(${news.image})` }}></div>
            <span className="news-category">{news.category}</span>
            <h3 className="news-heading">{news.title}</h3>
            <p className="news-description">{news.description}</p>
            <div className="news-meta">
              <span>{news.date}</span> - <span>By {news.author}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedNews(null)}>×</button>
            <h2>{selectedNews.title}</h2>
            <img src={selectedNews.image} alt={selectedNews.title} className="modal-image" />
            <p className="modal-category"><strong>Category:</strong> {selectedNews.category}</p>
            <p className="modal-description">{selectedNews.fullDescription}</p>
            <p className="modal-meta"><strong>Date:</strong> {selectedNews.date} | <strong>By:</strong> {selectedNews.author}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
