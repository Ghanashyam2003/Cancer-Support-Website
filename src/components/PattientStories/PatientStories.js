// PatientStories.js
import React from "react";

function PatientStories() {
  return (
    <div className="stories-container">
      <h1>Patient Stories</h1>
      <p>Read inspiring stories from cancer survivors and their journeys.</p>
      <div className="story">
        <h2>Jane's Journey</h2>
        <p>
          Jane's story is one of resilience and hope. Diagnosed in 2020, she
          found strength through community support and medical care.
        </p>
      </div>

      <div className="story">
        <h2>Mike's Victory</h2>
        <p>
          After a challenging two-year battle, Mike is now cancer-free. His
          positive mindset and support system played a key role.
        </p>
      </div>
    </div>
  );
}

export default PatientStories;
