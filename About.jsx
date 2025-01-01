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
          <li><Link to="/contact">Contact Us</Link></li>
          <li>|</li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </nav>

      <div className="about-content-box"> {/* Added a wrapper div */}
        <div className="about-content">
          <div className="text-section">
            <h1>About Power Play</h1>
            <p>
            Power Play is your ultimate destination for exceptional gaming laptops.
            With high performance and advanced technology, 
            we provide everything you need to take your gaming experience to the next level.
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
            <Link to="/contact">Contact Us</Link> {/* Updated Contact Us */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
