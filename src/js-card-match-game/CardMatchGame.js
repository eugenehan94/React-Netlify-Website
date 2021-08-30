import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Footer from "../components/Footer";
import "./CardMatchGame.css";
import CardVideo from "./video/MatchCardGame.mp4";
import { NavbarMenuContext } from "../App";
const CardMatchGame = () => {
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
