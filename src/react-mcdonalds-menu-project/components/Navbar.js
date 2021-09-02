import React from "react";

import { Link, useLocation } from "react-router-dom";
import McDLogo from "../images/McD-squareLogo.png";
import "../css/Navbar.css";
const Navbar = () => {
  let location = useLocation();

  return (
    <nav className="Navbar-container">
      <div className="Navbar-container-inner">
        <div className="Navbar-logo">
          <img src={McDLogo} alt="Logo"></img>
        </div>
        <div className="Navbar-choices-container">
          <ul className="Mcdonalds-unordered-list">
            <li className="Mcdonalds-list-item">
              <Link
                to="/menu"
                className={`${location.pathname === "/menu" ? "active" : null}`}
              >
                Menu
              </Link>
            </li>

            <li className="Mcdonalds-list-item">
              <Link
                to="/promotion"
                className={`${
                  location.pathname === "/promotion" ? "active" : null
                }`}
              >
                Promotions
              </Link>
            </li>
            <li className="Mcdonalds-list-item">
              <Link
                to="/family"
                className={`${
                  location.pathname === "/family" ? "active" : null
                }`}
              >
                Family
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
