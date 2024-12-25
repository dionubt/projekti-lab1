import React, { useState, useEffect } from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="body-content">
        <h1>Level Up Your Gear!</h1>
        <p>Discover epic gaming accessories, gadgets, and gear to dominate your next adventure.</p>
      </div>

      {/* Footer */}
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

export default App;
