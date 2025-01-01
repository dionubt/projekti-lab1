import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const [sortOption, setSortOption] = useState("default");

  const laptops = [
    { id: 1, name: "Lenovo LOQ 4060", price: 900, image: "/images/laptop1.jpg" },
    { id: 2, name: "HP Pavillion", price: 699, image: "/images/laptop2.jpg" },
    { id: 3, name: "Alienware m15 R3", price: 1199, image: "/images/laptop3.jpg" },
    { id: 4, name: "Dell G3 15 Gaming Laptop", price: 900, image: "/images/laptop4.jpg" },
    { id: 5, name: "HP Omen 15", price: 859, image: "/images/laptop5.jpg" },
    { id: 6, name: "Lenovo Loq 3050", price: 550, image: "/images/laptop6.jpg" },
    { id: 7, name: "Acer Predator Helios 300 (PH315-53-71QX)", price: 1099, image: "/images/laptop7.jpg" },
    { id: 8, name: "HP EB-630-G9", price: 499, image: "/images/laptop8.jpg" },
    { id: 9, name: "Asus TUF", price: 700, image: "/images/laptop9.jpg" },
  ];

  // Sort laptops based on selected option
  const sortedLaptops = [...laptops].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return laptops.indexOf(a) - laptops.indexOf(b); // Default order
  });

  return (
    <div className="services-page">
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
      <div className="services-content">
        <h1>Our Gaming Laptops</h1>
        <div className="sorting-container">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
        <div className="laptops-container">
          {sortedLaptops.map((laptop) => (
            <div key={laptop.id} className="laptop-card">
              <img src={laptop.image} alt={laptop.name} className="laptop-image" />
              <h2>{laptop.name}</h2>
              <p>${laptop.price}</p>
              <button>Buy Now</button>
            </div>
          ))}
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

export default Services;
