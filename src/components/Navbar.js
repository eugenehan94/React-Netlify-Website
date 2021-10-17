import React, { useContext } from "react";
/*React router imports */
import { Link } from "react-router-dom";
/*React icon imports */
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
/* CSS imports */
import "../css/Navbar.css";
/* useContext imports */
import { NavbarMenuContext } from "../App";

const Navbar = () => {
  const { toggle } = useContext(NavbarMenuContext);

  return (
    <div className="Nav_Container">
      <IconContext.Provider value={{ className: "Nav_Home_Icon" }}>
        <div>
          <Link to="/">
            <FaHome />
          </Link>
        </div>
      </IconContext.Provider>
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
