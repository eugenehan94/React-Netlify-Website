import React, { useEffect, useContext } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import Footer from "../components/Footer";
import "./CounterProject.css";

import { NavbarMenuContext } from "../App";

const CounterProject = () => {
  const [count, setCount] = useState(0);
  const { openMenu } = useContext(NavbarMenuContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const increaseByOne = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const increaseByTen = () => {
    setCount((prevState) => {
      return prevState + 10;
    });
  };
  const increaseByHundred = () => {
    setCount((prevState) => {
      return prevState + 100;
    });
  };
  const reset = () => {
    setCount((prevState) => {
      return 0;
    });
  };

  const decreaseByOne = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const decreaseByTen = () => {
    setCount((prevState) => {
      return prevState - 10;
    });
  };
  const decreaseByHundred = () => {
    setCount((prevState) => {
      return prevState - 100;
    });
  };

  const randomPositive = () => {
    setCount((prevState) => {
      return Math.floor(Math.random() * (99999 - 0) + 0);
    });
  };

  const randomNegative = () => {
    setCount((prevState) => {
      return Math.floor(Math.random() * (-99999 - 0) + 0);
    });
  };

  if (openMenu) {
    return <NavDropDown />;
  }

  return (
    <div>
      <Navbar />
      <div className="Counter-container">
        <h1 className="Counter-title">Complex Counter</h1>

        <h1 className="Counter-counter">{count}</h1>

        <div className="Counter-buttons">
          <button className="Counter-button_design" onClick={increaseByOne}>
            Increase 1
          </button>
          <button className="Counter-button_design" onClick={reset}>
            Reset
          </button>
          <button className="Counter-button_design" onClick={decreaseByOne}>
            Decrease 1
          </button>
          <button className="Counter-button_design" onClick={randomPositive}>
            Random + Number
          </button>
          <button className="Counter-button_design" onClick={randomNegative}>
            Random - Number
          </button>

          <button className="Counter-button_design" onClick={increaseByTen}>
            Increase 10
          </button>
          <button className="Counter-button_design" onClick={decreaseByTen}>
            Decrease 10
          </button>

          <button className="Counter-button_design" onClick={increaseByHundred}>
            Increase 100
          </button>
          <button className="Counter-button_design" onClick={decreaseByHundred}>
            Decrease 100
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CounterProject;
