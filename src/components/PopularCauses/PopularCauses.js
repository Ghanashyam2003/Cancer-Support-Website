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
      description:
        "This fundraiser supports the Learning Disabilities Association of Western NY in providing specialized resources, educational support, and advocacy for individuals affected by learning disabilities. " +
        "Your donations help fund therapy programs, awareness campaigns, and research initiatives to improve educational access for children facing learning challenges due to cancer treatments. " +
        "Together, we can ensure that no child is left behind in their journey to overcome these obstacles.",
    },
    {
      id: 2,
      image: "/images/cause2.jpg",
      tag: "Cancer",
      current: "$2,030",
      target: "$7,000",
      title: "New American Riders: Bicycles for Refugees",
      description:
        "With our partners at the Jewish Family Service of Western Massachusetts, we provide bicycles to refugees and cancer survivors who face mobility challenges. " +
        "These bicycles serve as essential transportation for medical appointments, jobs, and daily necessities, helping individuals regain independence and stability. " +
        "Your support will directly fund bike repairs, safety gear, and training programs, ensuring that everyone has access to a reliable means of transportation.",
    },
    {
      id: 3,
      image: "/images/cause3.jpg",
      tag: "Cancer",
      current: "$13,950",
      target: "$6,000",
      title: "Supporting Pregnant and Parenting Youth with Cancer",
      description:
        "Young mothers and expecting parents facing cancer endure unimaginable challenges. " +
        "This fundraiser aims to provide financial assistance for medical treatments, childcare, and emotional support resources. " +
        "Your donation helps ensure these brave individuals receive proper care while continuing their journey as parents. " +
        "Together, we can offer hope, stability, and a future filled with love and strength.",
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
