// src/App.js

import React from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "./assets/styles/Navbar.css";
import FeaturedStories from "./components/FeaturedStories";
import HeroSection from "./components/HeroSection";
import PopularCauses from "./components/PopularCauses";
import VolunteerSection from "./components/VolunteerSection";


function App() {
  return (
    <div>
      <Navbar />
      <FeaturedStories />
      <Home />
      <HeroSection />
      <img src="/images/mission-section.png" alt="Our Mission - Cancer Support" className="mission-image" />
      <PopularCauses />
      <img src="/images/can.png" alt="Innovation" className="Innovation-image" />
      <VolunteerSection />
      
    </div>
  );
}

export default App;
