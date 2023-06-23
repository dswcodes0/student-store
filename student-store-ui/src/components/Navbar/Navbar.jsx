import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/kimetsu-logo.png" alt="Logo" />
      </Link>
      <div className="navbar-social">
        <a href="https://example.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://example.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://example.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
