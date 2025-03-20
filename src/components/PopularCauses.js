import React, { useState } from "react";
import "./PopularCauses.css";

function PopularCauses() {
  const [selectedCause, setSelectedCause] = useState(null);

  const causes = [
    {
      id: 1,
      image: "/images/cause1.jpg",
      tag: "Cancer",
      current: "$3,370",
      target: "$6,000",
      title: "Support Learning Disabilities Association of WNY",
      description: "The fundraiser would support the current Learning Disabilities Association of Western NY programs...",
    },
    {
      id: 2,
      image: "/images/cause2.jpg",
      tag: "Cancer",
      current: "$2,030",
      target: "$7,000",
      title: "New American Riders: Bicycles for Refugees",
      description: "With our partners at the Jewish Family Service of Western Massachusetts...",
    },
    {
      id: 3,
      image: "/images/cause3.jpg",
      tag: "Cancer",
      current: "$13,950",
      target: "$6,000",
      title: "Supporting Pregnant and Parenting Youth",
      description: "I'm raising money for a cause I care about, but I need your help...",
    },
  ];

  return (
    <div className="popular-causes">
      <h2 className="title">Popular Causes</h2>
      <p className="intro-text">
        Join us in making a difference! Explore the causes we support and see how you can help bring change to those in need.
      </p>
      <div className="causes-container">
        {causes.map((cause) => (
          <div key={cause.id} className="cause-card" onClick={() => setSelectedCause(cause)}>
            <div className="image-container">
              <img src={cause.image} alt={cause.title} />
              <span className="tag">{cause.tag}</span>
            </div>
            <div className="progress">
              <p>Current: <strong>{cause.current}</strong></p>
              <p>Target: <strong>{cause.target}</strong></p>
            </div>
            <h3>{cause.title}</h3>
            <p>{cause.description}</p>
          </div>
        ))}
      </div>

      {selectedCause && (
        <div className="modal-overlay" onClick={() => setSelectedCause(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedCause(null)}>×</button>
            <h2>{selectedCause.title}</h2>
            <img src={selectedCause.image} alt={selectedCause.title} className="modal-image" />
            <p>{selectedCause.description}</p>
            <p><strong>Current:</strong> {selectedCause.current}</p>
            <p><strong>Target:</strong> {selectedCause.target}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularCauses;
