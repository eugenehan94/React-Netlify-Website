import React from "react";
import "../css/Timeline.css";
const Timeline = () => {
  return (
    <div className="Timeline-container">
      <h1 className="Timeline-title">Timeline</h1>

      <div className="Timeline-wrapper">
        <div className="Timeline-item">
          <h4 className="Timeline-heading">2020 - Today</h4>
          <p>Started Github.</p>
          <p>Continuously learning and building projects.</p>
          <span className="Timeline-left-block">1</span>
          <span className="Timeline-up-arrow"></span>
        </div>
        <div className="Timeline-item">
          <h4 className="Timeline-heading">2016 - 2019</h4>
          <p>Started to learn and create programs with Javascript.</p>
          <p>
            After feeling confident with Javascript, I started learning React,
            Node and MongoDB. Created some projects using the MERN stack.
          </p>
          <p>
            Laptop broke and wasn't able to transfer contents from old hard
            drive to new Laptop. Thus, all projects are gone.{" "}
          </p>
          <span className="Timeline-right-block">2</span>
        </div>
        <div className="Timeline-item">
          <h4 className="Timeline-heading">2013 - 2015</h4>
          <p>
            Continued learning and using Java. Adding Java Spring, Hibernate and
            Java Persistence API.{" "}
          </p>
          <p>Continued to practice with HTML and CSS.</p>
          <p>Started using mySQL database and learning about SQL.</p>
          <span className="Timeline-left-block">3</span>
        </div>
        <div className="Timeline-item">
          <h4 className="Timeline-heading">2009 - 2012 </h4>
          <p>Started with Java, HTML and CSS. </p>
          <span className="Timeline-right-block">4</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
