import React from "react";
import { Link } from "react-router-dom";
import "styles/Navbar.scss";
import cartIcon from "assets/cart-logo-white.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggle_cart } from "redux/actions/commonActions";
import { logout_user } from "redux/actions/userActions";
import Cookies from "js-cookie";
export default function Navbar() {
  const dispatch = useDispatch();

  const isUserLoggedIn =
    useSelector((state) => state.user.isUserLoggedIn) ||
    Cookies.get("isUserLoggedIn");
  const r = useSelector((state) => state.user.r) || Cookies.get("r");

  console.log(r);

  return (
    <nav className={clsx("navbar   navbar-expand-lg px-4 py-3")} id="navbar">
      <h2 className="navbar-brand">
        <Link to="/">Shopy</Link>
      </h2>
      <div className="options ms-auto d-flex align-items-center" id="options">
        <ul className="navbar-nav hide ms-auto d-flex align-items-center">
          {r === "C" && (
            <>
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
            </>
          )}

          {isUserLoggedIn ? (
            <>
              {r === "E" || r === "A" ? (
                <li className="nav-item nav">
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item nav">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item nav">
                <div
                  role="button"
                  className="nav-link"
                  onClick={() => dispatch(logout_user())}
                >
                  Logout
                </div>
              </li>
            </>
          ) : (
            <>
              {" "}
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
            </>
          )}
        </ul>
        {r === "C" && (
          <>
            <div
              className="nav-cart ms-1"
              onClick={() => dispatch(toggle_cart())}
            >
              <img src={cartIcon} alt="cart icon" />

              <span className="cart-number">10</span>
            </div>
            <CgMenuRightAlt id="menu-btn" className="ms-4" />
          </>
        )}
      </div>
    </nav>
  );
}
