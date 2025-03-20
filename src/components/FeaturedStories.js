import React, { useState } from "react";
import "./FeaturedStories.css"; // Ensure this CSS file exists

const FeaturedStories = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section className="featured-stories">
      <div className="story-container">
        {!showFullStory ? (
          <>
            <div className="story-content">
              <h2 className="story-title">Featured Stories</h2>
              <p className="story-quote">
                “I was upset when I was diagnosed with Lymphoedema. It’s not
                something that is temporary or can be cured but something that I
                will have to manage for the rest of my life.”
              </p>
              <p className="story-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <button className="read-more" onClick={() => setShowFullStory(true)}>
                READ FULL STORY
              </button>
            </div>
            <div className="story-image">
              <img src="/images/patient.jpg" alt="Cancer Survivor" />
            </div>
          </>
        ) : (
          <div className="full-story">
            <h2>My Journey with Lymphoedema</h2>
            <p>
              When I was first diagnosed with Lymphoedema, I felt devastated. It was 
              not something I had ever imagined dealing with. The challenges were immense, 
              from daily swelling to the emotional toll. However, through support, I learned 
              to manage it and lead a fulfilling life.
            </p>
            <p>
              Every day presents new challenges, but I have found strength in the support 
              of my loved ones and medical professionals. I hope my story inspires others 
              facing similar struggles.
            </p>
            <button className="close-story" onClick={() => setShowFullStory(false)}>
              Close Story
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStories;
