import React from "react";
import Navbar from "../components/Navbar";

import addingEntries from "./screenShot/AddingEntries.jpg";
import homePage from "./screenShot/HomePage.jpg";

import "./DiaryProject.css";

const DiaryProject = () => {
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
    </div>
  );
};

export default DiaryProject;
