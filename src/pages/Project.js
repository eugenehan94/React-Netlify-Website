import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import { Link } from "react-router-dom";
import { FaGithub, FaEye } from "react-icons/fa";
// import Footer from "../components/Footer";
import "../css/Project.css";
import { NavbarMenuContext } from "../App";

/* Project Data*/
import reactProjects from "../data/ReactProjects";
import javascriptProjects from "../data/JavascriptProjects";
import mernProjects from "../data/MernProjects";
/*Image imports */
import JavaCustomerFile from "../data/images/JavaCustomerFile.jpg";
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
    <div>
      <Navbar />
      <h1 className="Project-title">Projects</h1>
      <div className="Project-underline"></div>

      <h2 className="Project-heading">MERN</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        {mernProjects.map((project, id) => {
          return (
            <div key={id} className="Project-item">
              <div>
                <img
                  src={project.picture}
                  alt="doesn't work"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="Project-item-content">
                <div>
                  <button className="Project-to-project-btn">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ background: "transparent", color: "white" }}
                    >
                      <FaEye style={{ background: "transparent" }} />
                    </a>
                  </button>
                </div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="Project-stack-wrapper">
                  {project.stacks.map((stack, id) => {
                    return (
                      <div key={id} className="Project-stack">
                        <p>{stack}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="Project-github-wrapper">
                  <button className="Project-github-icon">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub style={{ background: "transparent" }} /> Source
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="Project-heading">React js</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        {reactProjects.map((project, id) => {
          return (
            <div key={id} className="Project-item">
              <div>
                <img
                  src={project.picture}
                  alt="doesn't work"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="Project-item-content">
                <div>
                  <button className="Project-to-project-btn">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ background: "transparent", color: "white" }}
                    >
                      <FaEye style={{ background: "transparent" }} />
                    </a>
                  </button>
                </div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="Project-stack-wrapper">
                  {project.stacks.map((stack, id) => {
                    return (
                      <div key={id} className="Project-stack">
                        <p>{stack}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="Project-github-wrapper">
                  <button className="Project-github-icon">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub style={{ background: "transparent" }} /> Source
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="Project-heading">Javascript</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        {javascriptProjects.map((project, id) => {
          return (
            <div key={id} className="Project-item">
              <div>
                <img
                  src={project.picture}
                  alt="doesn't work"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="Project-item-content">
                <div>
                  <button className="Project-to-project-btn">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ background: "transparent", color: "white" }}
                    >
                      <FaEye style={{ background: "transparent" }} />
                    </a>
                  </button>
                </div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="Project-stack-wrapper">
                  {project.stacks.map((stack, id) => {
                    return (
                      <div key={id} className="Project-stack">
                        <p>{stack}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="Project-github-wrapper">
                  <button className="Project-github-icon">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub style={{ background: "transparent" }} /> Source
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="Project-heading">Java</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        <div className="Project-item">
          <div>
            <img
              src={JavaCustomerFile}
              alt="Diary project"
              style={{ width: "100%" }}
            />
          </div>
          <div className="Project-item-content">
            <div>
              <Link to="/JavaCustomerFileProject">
                <button className="Project-to-project-btn">
                  <FaEye style={{ background: "transparent" }} />
                </button>
              </Link>
            </div>
            <h1>Customer CRUD Project</h1>
            <p>
              A Java Spring project which emulates real-life CRUD operations in
              handling new and existing customer/client files. Using mySQL as
              the database
            </p>
            <div className="Project-stack-wrapper">
              <div className="Project-stack">
                <p>Java EE</p>
              </div>
              <div className="Project-stack">
                <p>Java Spring</p>
              </div>
              <div className="Project-stack">
                <p>MySQL</p>
              </div>
            </div>
            <div className="Project-github-wrapper">
              <button className="Project-github-icon">
                <a
                  href="https://github.com/eugenehan94/CustomerFile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub style={{ background: "transparent" }} /> Source Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-footer-wrapper">{/* <Footer /> */}</div>
    </div>
  );
};

export default Project;
