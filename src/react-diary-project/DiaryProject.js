import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Footer from "../components/Footer";
import addingEntries from "./screenShot/AddingEntries.jpg";
import homePage from "./screenShot/HomePage.jpg";
import { NavbarMenuContext } from "../App";
import "./DiaryProject.css";

const DiaryProject = () => {
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
      <div className="Diary-title-container">
        <h1 className="Diary-title">Diary Project</h1>
      </div>
      <div className="Diary-image-container">
        <img
          src={homePage}
          alt="Home Page of Diary Project"
          className="Diary-image"
        ></img>
      </div>
      <img
        src={addingEntries}
        alt="Adding Entries Page"
        className="Diary-image"
      ></img>
      <Footer />
    </div>
  );
};

export default DiaryProject;
