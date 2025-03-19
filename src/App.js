// src/App.js

import React from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar"; // Correct import for navbar.js
import "./assets/styles/Navbar.css"; // Correct CSS import

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
