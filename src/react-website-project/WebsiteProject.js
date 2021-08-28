import React, { useState, useEffect, useContext } from "react";

import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Feedback from "./components/Feedback";
import NavBar from "./components/NavBar";
import Head from "./components/Head";

import About from "./components/About";
import AboutJoint from "./components/AboutJoint";

import AboutAtm from "./components/AboutAtm";

import Review from "./components/Review";

import Offers from "./components/Offers";
import offerData from "./data/OfferData";

import Footer from "./components/Footer";

import "./WebsiteProject.css";

import { NavbarMenuContext } from "../App";
function WebsiteProject() {
  const [modal, setModal] = useState(false);
  const [offerList, setOfferList] = useState(offerData);
  const { openMenu } = useContext(NavbarMenuContext);
  // const [offerItem, setOfferItem] = useState(offerData);

  const closeModal = () => {
    setModal(false);
  };

  const removeOffer = (id) => {
    const newOfferList = offerList.filter((offers) => offers.id !== id);
    setOfferList(newOfferList);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (openMenu) {
    return <NavDropDown />;
  }
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <button onClick={() => setModal(true)} className="feedback-btn">
        Feedback
      </button>

      <NavBar />
      <Head />
      {modal ? <Feedback show={modal} closeModal={closeModal} /> : null}

      <div className="faq-container">
        <h1>About</h1>
        <div className="head-underline"></div>
        <About />

        <h1>Accounts</h1>
        <div className="head-underline"></div>
        <h1 className="faq-heading">Joint accounts</h1>
        <AboutJoint />

        <h1 className="faq-heading">ATM</h1>
        <AboutAtm />
      </div>

      <Offers offerList={offerList} removeOffer={removeOffer} />

      <Review />
      <Footer />
    </div>
  );
}

export default WebsiteProject;
