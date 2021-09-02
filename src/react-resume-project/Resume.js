import { useState, useEffect, useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import job from "./data/data";
import { NavbarMenuContext } from "../App";
import "./Resume.css";
import { IconContext } from "react-icons";
import Footer from "../components/Footer";
function Resume() {
  const [arrayIndex, setArrayIndex] = useState(0);
  // const [jobList, setJobList] = useState(job);
  const jobList = job;
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
      <h1 className="Resume-title">Experience</h1>
      <div className="Resume-underline"></div>
      <div>
        <div className="Resume-subContainer">
          <div className="Resume-button-container">
            <h1 className="Resume-button-heading">Jobs</h1>
            {jobList.map((job, id) => {
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
          <hr></hr>
          <div className="Resume-job-container">
            <h1>{jobList[arrayIndex].title}</h1>
            <h2>{jobList[arrayIndex].date}</h2>
            {jobList[arrayIndex].description.map((points, id) => {
              return (
                <div className="Resume-job-description" key={id}>
                  <IconContext.Provider
                    value={{ className: "Resume_bullet-point" }}
                  >
                    <FaAngleRight />
                  </IconContext.Provider>
                  <p>{points}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
