import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="Nav_Container">
      <div>
        <Link to="/" className="Nav_Icon">
          <FaHome size="2.5rem" />
        </Link>
      </div>
      <div>
        <ul className="Nav_List_Container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
