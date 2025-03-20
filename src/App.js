// src/App.js

import React from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "./assets/styles/Navbar.css";
import FeaturedStories from "./components/FeaturedStories";
import HeroSection from "./components/HeroSection";
import PopularCauses from "./components/PopularCauses";
import VolunteerSection from "./components/VolunteerSection";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <FeaturedStories />
      <Home />
      <HeroSection />

      
      <div className="image-container">
        <img src="/images/mission-section.png" alt="Our Mission - Cancer Support" className="mission-image" />
      </div>

      <PopularCauses />

      <div className="image-container">
        <img src="/images/can.png" alt="Innovation" className="Innovation-image" />
      </div>

      <VolunteerSection />
      <LatestNews />

      <div className="image-container">
        <img src="/images/footer.png" alt="Footer Section" className="footer-image" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
