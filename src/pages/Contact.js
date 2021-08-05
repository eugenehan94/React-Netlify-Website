import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="Contact_inner_container">
        <h1 className="Contact_title">Contact Us</h1>
        <h1 className="Contact_title">Need to contact me</h1>
        <p className="Contact_desc">Feel free to contact me on:</p>

        <a
          className="Contact-linkedin-link"
          href="http://www.linkedin.com/in/eugene-h-7928bb63"
          target="_blank"
        >
          <AiFillLinkedin /> Linkedin
        </a>
        <br />
        <a
          href="https://github.com/eugenehan94"
          target="_blank"
          className="Contact-linkedin-link"
        >
          <AiFillGithub color="white" /> Github
        </a>

        <div>
          <Link to="/">
            <button className="Contact_btn">Return Home</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
