import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CardMatchGame.css";
import CardVideo from "./video/MatchCardGame.mp4";

const CardMatchGame = () => {
  return (
    <div>
      <Navbar />
      <h1 className="cardGame-title">Card Match Game</h1>
      <div className="cardGame-underline"></div>
      <div className="cardGame-video-container">
        <video autoPlay loop muted id="cardGame-video">
          <source src={CardVideo} type="video/mp4" />
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default CardMatchGame;
