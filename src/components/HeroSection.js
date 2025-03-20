// src/components/HeroSection.js
import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: "/images/about-us.jpg",
      title: "About Us",
      description:
        "We fund scientists, doctors, and nurses to help cancer sooner. We also provide cancer information to the public.",
      fullStory:
        "Our mission is to fund cutting-edge research and provide accessible cancer information. We collaborate with medical professionals to ensure accurate and timely treatment support.",
      buttonText: "READ FULL STORY",
    },
    {
      id: 2,
      image: "/images/stand-up.jpg",
      title: "Stand Up To Cancer",
      description:
        "Join the fight and raise cash to help speed up life-saving research. It’s payback time for those we love.",
      fullStory:
        "Stand Up To Cancer is dedicated to accelerating research breakthroughs. Your contributions support collaborative efforts that bring treatments to patients faster.",
      buttonText: "JOIN THE FIGHT",
    },
    {
      id: 3,
      image: "/images/get-involved.jpg",
      title: "Get Involved",
      description:
        "Find out about volunteering, fundraising, or taking part in an event.",
      fullStory:
        "Get involved by volunteering, fundraising, or spreading awareness. Every action, big or small, makes a difference in the fight against cancer.",
      buttonText: "GET INVOLVED",
    },
  ];

  return (
    <section className="hero-section">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <button onClick={() => setSelectedCard(card)}>{card.buttonText}</button>
        </div>
      ))}

      {/* Modal for full story */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedCard(null)}>✖</button>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.fullStory}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
