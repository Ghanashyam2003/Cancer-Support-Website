// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const cards = [
    {
      id: 1,
      image: "/images/about-us.jpg",
      title: "About Us",
      description:
        "We fund scientists, doctors, and nurses to help cancer sooner. We also provide cancer information to the public.",
      buttonText: "READ FULL STORY",
    },
    {
      id: 2,
      image: "/images/stand-up.jpg",
      title: "Stand Up To Cancer",
      description:
        "Join the fight and raise cash to help speed up life-saving research. It’s payback time for those we love.",
      buttonText: "JOIN THE FIGHT",
    },
    {
      id: 3,
      image: "/images/get-involved.jpg",
      title: "Get Involved",
      description:
        "Find out about volunteering, fundraising, or taking part in an event.",
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
          <button>{card.buttonText}</button>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
