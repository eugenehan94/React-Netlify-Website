import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ShootoutGame.css";

import GameplayVideo from "./video/ShootoutGameplay.mp4";
import InstructionVideo from "./video/ShootoutInstructions.mp4";
const ShootoutGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
