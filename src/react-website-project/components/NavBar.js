import React, { useState } from "react";
import { FaMoneyBillWave, FaList, FaRegWindowClose } from "react-icons/fa";
function NavBar() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <nav className="Website-navbar">
      <div className="Website-navbar-container">
        <div className="Website-navbar-logo">
          <h1>Home</h1>
          <FaMoneyBillWave className="Website-navbar-icon" />
        </div>

        <div className="Website-navbar-menu" onClick={clickHandler}>
          <h1>{click ? <FaRegWindowClose /> : <FaList />}</h1>
        </div>

        <ul className={"Website-navbar-item-container"}>
          <li className="Website-navbar-items">
            <a href="/#" className="Website-navbar-links">
              Services
            </a>
          </li>
          <li className="Website-navbar-items">
            <a href="/#" className="Website-navbar-links">
              Contact Us
            </a>
          </li>
          <li className="Website-navbar-items">
            <a href="/#" className="Website-navbar-links">
              Sign-up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
