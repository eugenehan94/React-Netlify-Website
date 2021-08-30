import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Footer from "../components/Footer";
import "./ShootoutGame.css";
import { NavbarMenuContext } from "../App";

import GameplayVideo from "./video/ShootoutGameplay.mp4";
import InstructionVideo from "./video/ShootoutInstructions.mp4";
const ShootoutGame = () => {
  const { openMenu } = useContext(NavbarMenuContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (openMenu) {
    return <NavDropDown />;
  }
  return (
    <div>
      <Navbar />
      <h1 className="shootout-title">Shootout Prediction Game</h1>
      <div className="shootout-underline"></div>
      <h2 className="shootout-heading">Gameplay</h2>
      <div className="shootout-video-container">
        <video autoPlay loop muted id="shootout-video">
          <source src={GameplayVideo} type="video/mp4" />
        </video>
      </div>

      <h2 className="shootout-heading">Instructions</h2>
      <div className="shootout-video-container">
        <video autoPlay loop muted id="shootout-video">
          <source src={InstructionVideo} type="video/mp4" />
        </video>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ShootoutGame;
