import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import data from "./data";
import "./css/SlideshowProject.css";
import { FaArrowLeft, FaArrowRight, FaRandom } from "react-icons/fa";
const SlideshowProject = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);
  //   useEffect(() => {
  //     const fetchTasks = async () => {
  //       const res = await fetch("http://localhost:5000/review");
  //       const data = await res.json();
  //       setPeople(data);
  //     };

  //     fetchTasks();
  //   }, []);

  const previousPerson = () => {
    setIndex((current) => {
      return checkWithinIndex(current - 1);
    });
  };
  const nextPerson = () => {
    setIndex((current) => {
      return checkWithinIndex(current + 1);
    });
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = random + 1;
    }
    setIndex(checkWithinIndex(random));
  };

  const checkWithinIndex = (value) => {
    if (value < 0) {
      return people.length - 1;
    }
    if (value > people.length - 1) {
      return 0;
    }
    return value;
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="slideshowtitle">Customer Reviews</h1>

        <div className="slideshowUnderline"></div>

        <div className="slideshowContainer">
          <img
            className="slideshowPictures"
            src={people[index].image}
            alt="nothing"
          ></img>
          <h1 className="slideshowName">{people[index].name}</h1>
          <p className="slideshowQuote">{people[index].text}</p>

          {/* Container for the buttons */}
          <div style={{ backgroundColor: "transparent" }}>
            <button onClick={previousPerson} className="slideshowprevious-btn">
              {/* <FaArrowLeft /> */}←
            </button>
            <button onClick={nextPerson} className="slideshownext-btn">
              {/* <FaArrowRight /> */}→
            </button>
          </div>
          <button onClick={randomPerson} className="slideshowrandom-btn">
            {/* <FaRandom /> */}⇋
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideshowProject;
