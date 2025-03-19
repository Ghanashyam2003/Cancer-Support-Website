import React from "react";
import "./LatestNews.css";

const newsData = [
  {
    category: "CHILDREN",
    image: "/images/news1.jpg",
    title: "Tuesday Tips: Being Realistic With Your Goals",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...",
    date: "May 15, 2021",
    author: "admin",
  },
  {
    category: "FOOD & HEALTH",
    image: "/images/news2.jpg",
    title: "20th Anniversary of Growing Up Asian in America",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...",
    date: "May 15, 2021",
    author: "admin",
  },
  {
    category: "EDUCATION",
    image: "/images/news3.jpg",
    title: "Stroke care gains in Puerto Rico falter after Hurricane Maria",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...",
    date: "May 15, 2021",
    author: "admin",
  },
];

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <h2 className="news-title">Latest News</h2>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
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
    </div>
  );
};

export default LatestNews;
