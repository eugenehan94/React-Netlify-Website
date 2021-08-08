import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ShootoutGame.css";

import ShootoutGameplayVideo from "./videos/Shootout Gameplay.mp4";
import ShootoutInstructionVideo from "./videos/Shootout Instructions.mp4";

// Netlify can't find this? Why?

const ShootoutGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="shootout-title">Shootout Prediction Game</h1>
      <div className="shootout-underline"></div>
      <h2 className="shootout-header">Gameplay</h2>
      <div className="shootout-video-container">
        <video autoPlay loop muted id="shootoutGameVideo">
          <source src={ShootoutGameplayVideo} type="video/mp4" />
        </video>
      </div>
      <h2 className="shootout-header">Instructions</h2>
      <div className="shootout-video-container">
        <video autoPlay loop muted id="shootoutGameVideo">
          <source src={ShootoutInstructionVideo} type="video/mp4" />
        </video>
      </div>
      <div className="shootout-spacer"></div>
      <Footer />
    </div>
  );
};

export default ShootoutGame;
