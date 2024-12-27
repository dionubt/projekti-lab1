import React from "react";
import { Link } from "react-router-dom"; // Make sure Link is imported
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <nav className="navbar">
        <div className="logo">Power Play</div>
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Login</Link></li> {/* Ensure the Login link works */}
        </ul>
      </nav>

      <div className="about-content-box"> {/* Added a wrapper div */}
        <div className="about-content">
          <div className="text-section">
            <h1>About Power Play</h1>
            <p>
              Power Play is your ultimate destination for the best gaming gear and accessories. 
              From high-performance controllers to cutting-edge tech, we provide everything 
              you need to level up your gaming experience.
            </p>
          </div>
          <div className="image-section">
            <img src="/images/about.jpg" alt="Gaming Gear" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Power Play Gaming. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
