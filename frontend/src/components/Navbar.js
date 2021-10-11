import React from "react";
import { Link } from "react-router-dom";
import "styles/Navbar.sass";
import cartIcon from "assets/cart-logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ps-4 py-0">
      <h2 className="navbar-brand">
        <Link to="/">Shopy</Link>
      </h2>
      <ul className="navbar-nav ms-auto d-flex align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item nav-cta">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item cart ms-3">
          <img src={cartIcon} alt="cart icon" />
          <span className="cart-number">100</span>
        </li>
      </ul>
    </nav>
  );
}
