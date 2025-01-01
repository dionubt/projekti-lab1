import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./Services";
import About from "./About"; // Import the About component
import Login from "./Login"; // Import the Login component
import Signup from "./Signup"; // Import the Signup component
import ContactUs from "./ContactUs"; // Import the ContactUs component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Contact Us route */}
      </Routes>
    </Router>
  </React.StrictMode>
);