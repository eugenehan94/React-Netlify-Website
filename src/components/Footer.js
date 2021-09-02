import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="Footer_first_subcontainer">
        <div className="Footer_about_container">
          <h1>About website</h1>
          <p>A website to show projects I've done.</p>
          <p className="Footer_para_disc">
            * Doesn't reflect all projects, some were discarded prior to opening
            Github account.
          </p>
        </div>
        <div className="Footer_social_container">
          <h1>Follow me</h1>
          <a
            href="https://github.com/eugenehan94"
            target="_blank"
            rel="noreferrer"
            className="Footer_social_link"
          >
            <AiFillGithub color="white" /> Github
          </a>
          <br />
          <a
            href="http://www.linkedin.com/in/eugene-h-7928bb63"
            target="_blank"
            rel="noreferrer"
            className="Footer_social_link"
          >
            <AiFillLinkedin color="white" /> Linkedin
          </a>
        </div>
      </div>

      <hr></hr>

      <div className="Footer_copyright">
        <p>Eugene Han Portfolio - Copyright &copy; Eugene Han.</p>
      </div>
    </div>
  );
};

export default Footer;
