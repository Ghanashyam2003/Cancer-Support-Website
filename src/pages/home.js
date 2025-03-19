import React from "react";
import "../assets/styles/style.css"; // Import CSS
//main page of the website
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Cancer Support Website</h1>
      <p>
        We provide resources and support for cancer patients and their families.
      </p>
      <button>Learn More</button>
    </div>
  );
}

export default Home;
