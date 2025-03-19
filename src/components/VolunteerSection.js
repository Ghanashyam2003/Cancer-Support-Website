import React from "react";
import "./VolunteerSection.css";

function VolunteerSection() {
  const handleSignUpClick = () => {
    alert("Thank you for your interest! The sign-up form is coming soon.");
  };

  return (
    <div className="volunteer-section">
      <div className="volunteer-content">
        <h2 className="volunteer-title">Become A Volunteer</h2>
        <p className="volunteer-text">
          We couldn’t give support without people like you. Do something amazing 
          and make today the day you volunteer. Donating your time and talent 
          could make all the difference.
        </p>
        <button className="volunteer-button" onClick={handleSignUpClick}>
          SIGN UP NOW
        </button>
      </div>
      <div className="volunteer-image">
        <img src="/images/volunteer.jpg" alt="Volunteer Team" />
      </div>
    </div>
  );
}

export default VolunteerSection;
