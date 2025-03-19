// src/components/FeaturedStories.js

import React from "react";
import "./FeaturedStories.css"; // Ensure you create this CSS file

const FeaturedStories = () => {
  return (
    <section className="featured-stories">
      <div className="story-container">
        <div className="story-content">
          <h2 className="story-title">Featured Stories</h2>
          <p className="story-quote">
            “I was upset when I was diagnosed with Lymphoedema. It’s not
            something that is temporary or can be cured but something that I
            will have to manage for the rest of my life.”
          </p>
          <p className="story-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <button className="read-more">READ FULL STORY</button>
        </div>
        <div className="story-image">
          <img
            src="/images/patient.jpg" 
            alt="Cancer Survivor"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
