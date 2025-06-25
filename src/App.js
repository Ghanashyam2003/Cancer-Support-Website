// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./components/AuthContext";

import Home from "./pages/home";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import FeaturedStories from "./components/FeaturesStorie/FeaturedStories";
import HeroSection from "./components/HeroSection/HeroSection";
import PopularCauses from "./components/PopularCauses/PopularCauses";
import VolunteerSection from "./components/VolunteerSection/VolunteerSection";
import LatestNews from "./components/LatestNews/LatestNews";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn"; //
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThankYou from "./components/ThankYou/ThankYou";
import "./components/FeedbackForm/FeedbackForm";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import About from "./components/AboutUs/About";
import Blog from "./components/Blog/Blog";


function MainContent() {
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

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<MainContent />} />

            {/* Feedback Page */}
            <Route path="/feedback" element={<FeedbackForm />} />

            {/* Sign In Page */}
            <Route path="/sign-in" element={<SignIn />} />

            {/* Thank You Page */}
            <Route path="/thank-you" element={<ThankYou />} />
            {/* About Us Page */}
            <Route path="/about" element={<About />} />

            {/* Blog Page */}
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}


export default App;
