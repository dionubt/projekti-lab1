import React from "react";
import "./App.css"; // Ensure to create and style this CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here. Explore our services and join us today!</p>
      </div>
    </div>
  );
};

export default App;
