import React, { useContext } from "react";
/*React component imports */
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
// import Footer from "../components/Footer";
/*Css and React icons*/
import "../css/Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
/*React router imports */
import { Link } from "react-router-dom";
/*useContext imports */
import { NavbarMenuContext } from "../App";

const Contact = () => {
  const { openMenu } = useContext(NavbarMenuContext);

  if (openMenu) {
    return <NavDropDown />;
  }

  return (
    <div>
      <Navbar />

      <div className="Contact_inner_container">
        <div className="Contact_left_container">
          <h1 className="Contact_title">Contact Us</h1>
          <h1 className="Contact_title">Need to contact me</h1>
          <p className="Contact_desc">Feel free to contact me on:</p>

          <a
            className="Contact-linkedin-link"
            href="http://www.linkedin.com/in/eugene-h-7928bb63"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin /> Linkedin
          </a>
          <br />
          <a
            href="https://github.com/eugenehan94"
            target="_blank"
            rel="noreferrer"
            className="Contact-linkedin-link"
          >
            <AiFillGithub /> Github
          </a>

          <div className="Contact-home-btn-wrapper">
            <Link to="/">
              <button className="Contact_btn">Return Home</button>
            </Link>
          </div>
        </div>
        <div className="Contact_right_container">
          <IconContext.Provider
            value={{ className: "Contact_phone_animation" }}
          >
            <div>
              <FaPhoneAlt />
            </div>
          </IconContext.Provider>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
