import React from "react";

import Navbar from "../components/Navbar";

import "./shootoutGame.css";

import ShootoutGameplayVideo from "./videos/Shootout Gameplay.mp4";
import ShootoutInstructionVideo from "./videos/Shootout Instructions.mp4";
const shootoutGame = () => {
  return (
    <div>
      <Navbar />
      <h1>Shootout Prediction Game</h1>

      <video autoPlay loop muted id="shootoutGameVideo">
        <source src={ShootoutGameplayVideo} type="video/mp4" />
      </video>

      <br />

      <video autoPlay loop muted id="shootoutGameVideo">
        <source src={ShootoutInstructionVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default shootoutGame;
