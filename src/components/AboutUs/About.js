// src/pages/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About BraveHearts</h1>
        <p>Empowering hope, one story at a time.</p>
      </section>

      <section className="about-section">
        <h2>🌟 Our Mission</h2>
        <p>
          At BraveHearts, we aim to support cancer patients and caregivers through
          powerful stories, community support, and reliable resources.
        </p>
      </section>

      <section className="about-section">
        <h2>📖 Our Story</h2>
        <p>
          BraveHearts was born from a desire to make every cancer journey less lonely.
          What started as a small support group is now a growing digital platform that
          shares real stories, connects volunteers, and spreads awareness.
        </p>
      </section>

      <section className="about-section">
        <h2>🤝 What We Do</h2>
        <ul>
          <li>🗣 Share inspiring patient and survivor stories</li>
          <li>🎗 Spread awareness and early detection education</li>
          <li>📢 Host events and volunteer campaigns</li>
          <li>🤖 Build smart digital tools for patient support</li>
        </ul>
      </section>

      <section className="about-cta">
        <h2>Join the Movement</h2>
        <p>
          Whether you’re a survivor, caregiver, volunteer, or supporter—your voice matters.
        </p>
        <a href="/volunteer" className="about-btn">Become a Volunteer</a>
      </section>
    </div>
  );
};

export default About;
