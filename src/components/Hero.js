import React from "react";
import { Link } from "react-router-dom";

import "../css/Hero.css";
const Hero = () => {
  return (
    <div className="Hero_Container">
      <div style={{ padding: "0 3rem" }}>
        <div className="Hero_Title_Container">
          <h1 className="Hero_Title">Hello I'm</h1>
          <h1 className="Hero_Title">Eugene Han</h1>
        </div>

        <div>
          <p className="Hero_desc">I'm a developer with a science background</p>
          <p className="Hero_desc">Self-taught investor and options trader</p>
          <p className="Hero_desc">
            With experience in the banking and customer service area
          </p>
        </div>
        <div className="Hero_button_container">
          <Link to="/Project">
            <button className="Hero_button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
