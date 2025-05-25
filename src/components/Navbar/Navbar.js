import React, { useState } from "react";
import "./Navbar.css";
import Donate from "../Donate/Donate";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({});
  const [showDonate, setShowDonate] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      setUser(decoded);

      // 📩 Send welcome email request to backend
      await axios.post("https://your-backend-url.com/api/send-welcome-email", {
        name: decoded.name,
        email: decoded.email,
      });

      console.log("Welcome email triggered if user is new.");
    } catch (error) {
      console.error("Google login or email sending failed:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">BraveHearts</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li
              onMouseEnter={() => toggleDropdown("pages")}
              onMouseLeave={() => toggleDropdown("pages")}
            >
              <a href="#!">Pages ▾</a>
              {dropdown.pages && (
                <ul className="dropdown">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/feedback">Feedback</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="search-wrapper">
            <button className="icon-btn" onClick={() => setSearchOpen(true)}>🔍</button>
            {searchOpen && (
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  autoFocus
                />
                <button className="close-search" onClick={() => setSearchOpen(false)}>×</button>
              </div>
            )}
          </div>

          <button className="donate-animated-btn" onClick={() => setShowDonate(true)}>
            Donate Now ❤️
          </button>

          {!user ? (
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("Login Failed")}
              useOneTap
              width="180"
            />
          ) : (
            <div className="user-info">
              {user.picture && (
                <img src={user.picture} alt={user.name} className="user-avatar" title={user.name} />
              )}
              <button className="sign-out-btn" onClick={handleLogout}>Sign Out</button>
            </div>
          )}
        </div>
      </nav>

      {showDonate && <Donate onClose={() => setShowDonate(false)} />}
    </>
  );
};

export default Navbar;
