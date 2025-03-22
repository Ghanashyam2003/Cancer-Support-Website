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
  <img
    src="/images/mission-section.png"
    alt="Our Mission-Cancer Support"
    className="mission-image"
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "80vh",
      objectFit: "cover",
      padding: "20px",
      display: "block",
      margin: "0 auto",
    }}
  />
</div>

      <PopularCauses />

      <div className="image-container">
  <img
    src="/images/can.png"
    alt="Innovation"
    className="Innovation-image"
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "90vh",
      objectFit: "cover",
      padding: "45px",
      display: "block",
      margin: "20 20",
    }}
  />
</div>

      <VolunteerSection />
      <LatestNews />

      <div className="image-container">
  <img
    src="/images/footer.png"
    alt="Footer Section"
    className="footer-image"
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "80vh",
      objectFit: "cover",
      padding: "35px",
      display: "block",
      margin: "20 20",
    }}
  />
</div>


      <Footer />
    </div>
  );
}

export default App;
