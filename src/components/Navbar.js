import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

import "../css/Navbar.css";

import { NavbarMenuContext } from "../App";

const Navbar = () => {
  const { openMenu, toggle } = useContext(NavbarMenuContext);

  return (
    <div className="Nav_Container">
      <div>
        <Link to="/" className="Nav_Icon">
          <FaHome size="2.5rem" />
        </Link>
      </div>
      <div>
        <IconContext.Provider value={{ className: "Nav_Hamburger_Icon" }}>
          <div>
            <BiMenu onClick={toggle} />
          </div>
        </IconContext.Provider>

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
