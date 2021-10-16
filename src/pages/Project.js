import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import { Link } from "react-router-dom";
import { FaGithub, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";
import "../css/Project.css";
import { NavbarMenuContext } from "../App";

/* Project Data*/
import reactProjects from "../data/ReactProjects";
import javascriptProjects from "../data/JavascriptProjects";

const Project = () => {
  const { openMenu } = useContext(NavbarMenuContext);
  useEffect(() => {
    //When page loads, it goes back to the top
    window.scrollTo(0, 0);
  }, []);

  if (openMenu) {
    return <NavDropDown />;
  }

  return (
    <div className="Project-wrapper">
      <Navbar />
      <h1 className="Project-title">Projects</h1>
      <div className="Project-underline"></div>

      <h2 className="Project-heading">MERN</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        <div className="Project-item">
          <h1>Diary Project</h1>
          <p>
            A project where users can enter, edit and delete entries. Entries
            include title, date and entry. The inputs are stored and read from a
            REST API.
          </p>
          <p>
            Clone the original code from Github and run the JSON server to
            interact with the API.
          </p>
          <div className="Project-btn-animation-wrapper">
            <Link to="/DiaryProject">
              <button className="Project-to-project-btn">
                {" "}
                <FaEye style={{ background: "transparent" }} /> View Project
              </button>
            </Link>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/React-Diary-Project"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <h2 className="Project-heading">React js</h2>
      <div className="Project-underline"></div>

      <div className="Project-container">
        {reactProjects.map((project) => {
          return (
            <div className="Project-item">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="Project-btn-animation-wrapper">
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <button className="Project-to-project-btn">
                    <FaEye style={{ background: "transparent" }} /> View Project
                  </button>
                </a>
              </div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <button className="Project-github-icon">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <FaGithub /> Source Code
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="Project-heading">Javascript</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        {javascriptProjects.map((project) => {
          return (
            <div className="Project-item">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="Project-btn-animation-wrapper">
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <button className="Project-to-project-btn">
                    <FaEye style={{ background: "transparent" }} /> View Project
                  </button>
                </a>
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="Project-github-icon">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <FaGithub /> Source Code
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="Project-heading">Java</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        <div className="Project-item">
          <h1>Customer CRUD Project</h1>
          <p>
            A Java Spring project which emulates real-life CRUD operations in
            handling new and existing customer/client files. Using mySQL as the
            database
          </p>
          <div className="Project-btn-animation-wrapper">
            <Link to="/JavaCustomerFileProject">
              <button className="Project-to-project-btn">
                <FaEye style={{ background: "transparent" }} /> View Project
              </button>
            </Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/CustomerFile"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="Project-footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
