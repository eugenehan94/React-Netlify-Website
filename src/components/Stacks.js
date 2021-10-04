import React from "react";
import { FaReact, FaNode, FaCss3Alt, FaGithubSquare } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiJava,
  SiMysql,
  SiSpring,
  SiEclipseide,
  SiVisualstudiocode,
} from "react-icons/si";
import { IconContext } from "react-icons";
import "../css/Stacks.css";
const Stacks = () => {
  return (
    <div className="Stacks-container">
      <h1 className="Stacks-title">Technologies</h1>
      <h2>
        I've worked with a range of technologies in the development world.
      </h2>
      <div>
        {/* <h4 className="Stacks-heading">Front End</h4> */}
        <IconContext.Provider value={{ className: "Stacks-icons" }}>
          <div className="Stacks-icon-wrapper">
            <div>
              <FaReact />
              <h5>React</h5>
            </div>
            <div>
              <SiJavascript />
              <h5>Javascript</h5>
            </div>
            <div>
              <FaCss3Alt />
              <h5>CSS</h5>
            </div>
            <div>
              <SiHtml5 />
              <h5>HTML</h5>
            </div>
          </div>
          {/* <h4 className="Stacks-heading">Back End</h4> */}
          <div className="Stacks-icon-wrapper">
            <div>
              <FaNode />
              <h5>Node</h5>
            </div>
            <div>
              <SiSpring />
              <h5>Spring</h5>
            </div>
            <div>
              <SiJava />
              <h5>Java</h5>
            </div>
            <div>
              <SiMongodb />
              <h5>MongoDB</h5>
            </div>
          </div>
          {/* <h4 className="Stacks-heading">Other</h4> */}
          <div className="Stacks-icon-wrapper">
            <div>
              <SiMysql />
              <h5>MySQL</h5>
            </div>
            <div>
              <SiEclipseide />
              <h5>Eclipse</h5>
            </div>
            <div>
              <FaGithubSquare />
              <h5>GitHub</h5>
            </div>
            <div>
              <SiVisualstudiocode />
              <h5>VS Code</h5>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Stacks;
