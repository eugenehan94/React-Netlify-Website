import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Footer from "../components/Footer";
//Imports the useContext provided in the App.js
import { NavbarMenuContext } from "../App";
import "../css/About.css";

const About = () => {
  const { openMenu } = useContext(NavbarMenuContext);

  if (openMenu) {
    return <NavDropDown />;
  }

  return (
    <div>
      <Navbar />
      <div className="About_inner_container">
        <h1 className="About_title">About</h1>

        <p className="About_desc">
          Welcome to my website! My name is Eugene Han and I am a developer.
        </p>
        <p className="About_desc">
          I started this journey in high school and have coded ever since.
        </p>
        <p className="About_desc">
          In my highschool years, I started learning Java and competed in
          multiple Dwite programming competitions,
        </p>
        <p className="About_desc">
          during that time, I also picked up HTML, CSS and Spring
        </p>
        <p className="About_desc">
          During my university year, I started using JavaScript and eventually
          picking up React js. Likewise, picking up and practicing mySQL.
        </p>
        <p className="About_desc">
          Unfortunately, I regret not starting a Github account earlier to
          upload my previous projects. They are now gone, but the experiences I
          gathered are still with me.
        </p>
        <p></p>

        <p className="About_desc">
          When I am not coding, you will find me continuously learning new
          things or in the gym.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
