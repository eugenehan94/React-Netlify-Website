import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

import { NavbarMenuContext } from "../App";

import "../css/NavDropDown.css";

const NavDropDown = () => {
  const { openMenu, toggle } = useContext(NavbarMenuContext);
  return (
    <div className="NavDrop_container">
      <div className="NavDrop_icon_container">
        <IconContext.Provider value={{ className: "NavDrop_close_icon" }}>
          <AiOutlineClose onClick={toggle} />
        </IconContext.Provider>
      </div>
      <div className="NavDrop_list_container">
        <ul className="NavDrop_list_wrapper">
          <li>
            <Link to="/" onClick={toggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={toggle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Project" onClick={toggle}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={toggle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDropDown;
