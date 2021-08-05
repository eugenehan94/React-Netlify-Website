import React from "react";
import { useState, useEffect } from "react";
import question from "./data";
import Navbar from "../components/Navbar";
import "./css/accordionProject.css";

const AccordionProject = () => {
  const [number, setNumber] = useState();
  const [data, setData] = useState(question);

  const toggleAccordion = (id) => {
    if (id === number) {
      return setNumber(0);
    }

    setNumber(id);
  };

  return (
    <div>
      <Navbar />
      <div className="Accordion-Container">
        <h1 className="Accordion-container-title">About</h1>
        <div className="Accordion-underline"></div>

        {data.map((question) => {
          return (
            <div key={question.id}>
              {question.id === 1 ? (
                <h1 className="Accordion-container-heading">Getting Started</h1>
              ) : (
                ""
              )}
              {question.id === 5 ? (
                <h1 className="Accordion-container-heading">
                  About Simplii Financial™ personal banking products and
                  services
                </h1>
              ) : (
                ""
              )}

              <button
                onClick={() => toggleAccordion(question.id)}
                className="accordion-title"
              >
                {number === question.id ? (
                  <div className="accordion-title active">{question.title}</div>
                ) : (
                  question.title
                )}
                <h3>{number === question.id ? "x" : "+"}</h3>
              </button>

              <p>
                {number === question.id ? (
                  <div className="accordion-content">
                    <p>{question.info} </p> <p> {question.info2} </p>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionProject;
