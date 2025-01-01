import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
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
      <div className="body-content">
        <h1>Upgrade Your Gaming Arsenal!</h1>
        <p>Explore top-tier gaming laptops engineered for performance</p>
        <p>speed, and immersive gameplay. Elevate your gaming experience to the next level.</p>
      </div>

      {/* Footer */}
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

export default App;
