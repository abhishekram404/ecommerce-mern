import React from "react";
import { Link } from "react-router-dom";
import "styles/Navbar.scss";
import cartIcon from "assets/cart-logo-white.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggle_cart } from "redux/actions/commonActions";
export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className={clsx("navbar   navbar-expand-lg px-4 py-0")} id="navbar">
      <h2 className="navbar-brand">
        <Link to="/">Shopy</Link>
      </h2>
      <div className="options ms-auto d-flex align-items-center" id="options">
        <ul className="navbar-nav hide ms-auto d-flex align-items-center">
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
          <li className="nav-item nav">
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </li>
          <li className="nav-item nav-cta">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
        {/* )} */}
        <div className="nav-cart ms-1" onClick={() => dispatch(toggle_cart())}>
          <img src={cartIcon} alt="cart icon" />

          <span className="cart-number">10</span>
        </div>
        <CgMenuRightAlt id="menu-btn" className="ms-4" />
      </div>
    </nav>
  );
}
