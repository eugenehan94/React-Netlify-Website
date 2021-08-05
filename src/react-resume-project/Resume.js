import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import job from "./data/data";

import "./Resume.css";
function Resume() {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [jobList, setJobList] = useState(job);

  return (
    <div>
      <Navbar />
      <h1 className="Resume-title">Experience</h1>
      <div className="Resume-underline"></div>
      <div>
        <div className="Resume-subContainer">
          <div className="Resume-button-container">
            <h1 className="Resume-button-heading">Jobs</h1>
            {jobList.map((job, id) => {
              console.log(id);
              return (
                <div key={id}>
                  <button
                    key={id}
                    className={`Resume-job-button ${
                      arrayIndex === id && "Resume-active"
                    }`}
                    onClick={() => setArrayIndex(id)}
                  >
                    {job.company}
                  </button>
                  {id === 3 ? (
                    <h1 className="Resume-button-heading">Volunteer</h1>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="Resume-job-container">
            <h1>{jobList[arrayIndex].title}</h1>
            <h2>{jobList[arrayIndex].date}</h2>
            {jobList[arrayIndex].description.map((points, id) => {
              return (
                <div className="Resume-job-description" key={id}>
                  <FaAngleRight color={"white"} />
                  <p>{points}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
