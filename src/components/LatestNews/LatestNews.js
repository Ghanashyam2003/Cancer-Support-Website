import React, { useState } from "react";
import "./LatestNews.css";

const newsData = [
  {
    category: "CHILDREN & CANCER",
    image: "/images/news1.jpg",
    title: "Tuesday Tips: Supporting Children with Cancer",
    description:
      "Caring for a child with cancer is emotionally and physically challenging. Learn how to set realistic goals for treatment, self-care, and emotional resilience...",
    fullDescription:
      "This article provides practical strategies for parents and caregivers of children battling cancer. From setting realistic treatment expectations to finding emotional support and maintaining hope, learn how to navigate this difficult journey with strength and positivity. We also explore how to help siblings cope, ways to create a comforting home environment, and resources for financial assistance.",
    date: "May 15, 2021",
    author: "admin",
  },
  {
    category: "FOOD & HEALTH",
    image: "/images/news2.jpg",
    title: "Nutrition Tips for Cancer Patients: Eating Right During Treatment",
    description:
      "A well-balanced diet plays a crucial role in the recovery and well-being of cancer patients. Learn which foods help strengthen the immune system and ease treatment side effects...",
    fullDescription:
      "Proper nutrition is essential for cancer patients undergoing treatment. This article covers dietary recommendations, meal plans, and ways to manage side effects like nausea and fatigue through nutrition. Experts share insights on the best foods for boosting energy levels, the importance of hydration, and supplements that may be beneficial during chemotherapy or radiation therapy. Additionally, we discuss common myths surrounding cancer diets and provide scientifically-backed nutritional guidance.",
    date: "April 05, 2022",
    author: "admin",
  },
  {
    category: "HEALTHCARE CHALLENGES",
    image: "/images/news3.jpg",
    title: "Access to Cancer Treatment in Disaster-Affected Areas",
    description:
      "Natural disasters can severely impact healthcare infrastructure, leaving cancer patients without access to vital treatments. Learn about the ongoing efforts to provide care in such conditions...",
    fullDescription:
      "This investigative report highlights the challenges faced by cancer patients in disaster-hit regions. It explores the disruption of treatment plans, the role of emergency response teams, and how organizations are working to restore healthcare access. Many patients face medication shortages, lack of specialized care, and financial hardship after disasters like hurricanes, earthquakes, and floods. We also share real-life stories of resilience, the importance of mobile clinics, and how global aid organizations are stepping in to help.",
    date: "June 26, 2025",
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
