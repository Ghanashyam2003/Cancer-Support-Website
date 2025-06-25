// src/components/HeroSection.js
import React, { useState } from "react";
import "./HeroSection.css";
import ProfileCard from "../../blocks/Components/ProfileCard/ProfileCard.jsx";

const HeroSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: "/images/about-us.jpg",
      title: "About Us",
      description:
        "We fund scientists, doctors, and nurses to accelerate cancer research and provide crucial information to the public.",
      fullStory:
        "Our mission is to fund cutting-edge research and provide accessible cancer information. We collaborate with medical professionals to ensure accurate and timely treatment support. " +
        "Through our initiatives, we strive to offer hope, raise awareness, and support individuals and families affected by cancer. " +
        "From groundbreaking clinical trials to direct patient assistance, we are dedicated to making a meaningful impact. " +
        "We believe that early detection, innovative treatments, and a strong support system can change lives.",
      buttonText: "READ FULL STORY",
    },
    {
      id: 2,
      image: "/images/stand-up.jpg",
      title: "Stand Up To Cancer",
      description:
        "Join the fight and raise funds to speed up life-saving research. It’s time to stand together and make a difference for those we love.",
      fullStory:
        "Stand Up To Cancer is dedicated to accelerating research breakthroughs. Your contributions support collaborative efforts that bring treatments to patients faster. " +
        "Every donation helps fund cutting-edge clinical trials, innovative therapies, and vital support services for cancer patients and their families. " +
        "We unite scientists, doctors, and communities worldwide to take bold steps toward finding cures. With your help, we can push boundaries and give hope to millions. " +
        "Together, we stand stronger. Whether you donate, fundraise, or spread awareness, every action brings us closer to a cancer-free future.",
      buttonText: "JOIN THE FIGHT",
    },
    {
      id: 3,
      image: "/images/get-involved.jpg",
      title: "Get Involved",
      description:
        "Join us in making a difference. Find out how you can volunteer, fundraise, or participate in events to support cancer patients and research.",
      fullStory:
        "Get involved by volunteering, fundraising, or spreading awareness. Every action, big or small, makes a difference in the fight against cancer. " +
        "Your time, effort, and contributions help provide essential resources for patients, support cutting-edge research, and bring hope to families affected by cancer. " +
        "You can organize charity events, participate in awareness campaigns, or lend a helping hand at support centers. " +
        "Together, we can build a future where no one faces cancer alone. Join us today and be a part of something life-changing.",
      buttonText: "GET INVOLVED",
    },
  ];

  const team = [
    {
      name: "Dr. Neha Sharma",
      title: "Oncologist",
      handle: "neha.sharma",
      status: "Available",
      contactText: "Email Her",
      avatarUrl: "/images/team/neha.jpg",
    },
    {
      name: "Amit Khanna",
      title: "Volunteer Lead",
      handle: "amit.khanna",
      status: "Online",
      contactText: "Contact",
      avatarUrl: "/images/team/amit.jpg",
    },
    {
      name: "Priya Joshi",
      title: "Founder & Director",
      handle: "priya.j",
      status: "Offline",
      contactText: "Reach Out",
      avatarUrl: "/images/team/priya.jpg",
    },
  ];

  return (
    <section className="hero-section">
      {/* Hero Cards */}
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <button onClick={() => setSelectedCard(card)}>{card.buttonText}</button>
        </div>
      ))}

      {/* Full Story Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedCard(null)}>✖</button>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.fullStory}</p>
          </div>
        </div>
      )}

      {/* Meet the Team */}
      <h2 className="team-heading">Meet Our Core Team 💙</h2>
      <div className="profile-grid">
        {team.map((person, index) => (
          <ProfileCard
            key={index}
            name={person.name}
            title={person.title}
            handle={person.handle}
            status={person.status}
            contactText={person.contactText}
            avatarUrl={person.avatarUrl}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => alert(`Contacting ${person.name}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
