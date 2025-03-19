// src/App.js

import React from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar"; 
import "./assets/styles/Navbar.css"; 
import FeaturedStories from "./components/FeaturedStories";

function App() {
  return (
    <div>
      <Navbar />
      <FeaturedStories />
      <Home />
    </div>
  );
}

export default App;
