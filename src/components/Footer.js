import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">BraveHearts</h2>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <h3 className="footer-email-title">Join Our Email List</h3>
          <div className="email-subscribe">
            <input type="email" placeholder="Your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>Policy Priorities</li>
              <li>Careers</li>
              <li>Internships</li>
              <li>Financial Reports</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support Us</h3>
            <ul>
              <li>Donate Now</li>
              <li>Store</li>
              <li>Reports</li>
              <li>Press Releases</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p className="footer-contact">+(84) - 1800 - 4635</p>
            <p>shubhambadgujar2003@gmail.com</p>
            <div className="footer-social-icons">
  <a href="#"><i className="fab fa-facebook-f"></i></a>
  <a href="#"><i className="fab fa-instagram"></i></a>
  <a href="#"><i className="fab fa-twitter"></i></a>
  <a href="#"><i className="fab fa-youtube"></i></a>
</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 <span className="footer-brand">BraveHearts</span>. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Policy</a>
          <a href="#">About Us</a>
          <a href="#">Support</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
