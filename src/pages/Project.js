import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import "../css/Project.css";
import { NavbarMenuContext } from "../App";

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
      <h2 className="Project-heading">React js</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        <div className="Project-item">
          <h1>Resume Project</h1>
          <p>
            A virtual resume showing my previous work and volunteer experiences.
          </p>

          <div className="Project-btn-wrapper">
            <Link to="/ResumeProject">
              <button className="Project-to-project-btn">Resume Project</button>
            </Link>

            <div style={{ textAlign: "center" }}>
              <button className="Project-github-icon">
                <a
                  href="https://github.com/eugenehan94/React-Resume-Project"
                  target="_blank"
                >
                  <FaGithub /> to Github
                </a>
              </button>
            </div>
          </div>
        </div>

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
          <div className="Project-btn-wrapper">
            <Link to="/DiaryProject">
              <button className="Project-to-project-btn"> Diary Project</button>
            </Link>
            <div style={{ textAlign: "center" }}>
              <button className="Project-github-icon">
                <a
                  href="https://github.com/eugenehan94/React-Diary-Project"
                  target="_blank"
                >
                  <FaGithub /> to Github
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="Project-item">
          <h1>Mcdonalds Menu Replica</h1>
          <p> A replica of Mcdonalds' menu, promotion and family page</p>
          <Link to="/McdonaldsProject">
            <button className="Project-to-project-btn">
              Mcdonald Menu Project
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/React-McDonalds-Menu-Project"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
        <div className="Project-item">
          <h1>Accordion Project</h1>
          <p>
            An accordion inspired by the one found on Simplii Financial's
            website
          </p>
          <p>The original program reads the data from the REST API</p>
          <Link to="/AccordionProject">
            <button className="Project-to-project-btn">
              Accordion Project
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/React-Banking-Accordion-Project"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
        <div className="Project-item">
          <h1>Webpage Project</h1>
          <p>A webpage I created using React js</p>
          <Link to="/WebsiteProject">
            <button className="Project-to-project-btn">Website Project</button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/react-webpage-project"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
        <div className="Project-item">
          <h1>Slideshow Project</h1>
          <p>A slide show of people's name, picture and comment</p>
          <p>The data is read from a REST API in the original.</p>
          <Link to="/SlideshowProject">
            <button className="Project-to-project-btn">
              Slideshow Project
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/React-Reviews-Slideshow-Project"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
        <div className="Project-item">
          <h1>Github User Project</h1>
          <p>
            A project showing multiple Github Users. The information is fetched
            for an API provided by Github
          </p>
          <Link to="/GithubUserProject">
            <button className="Project-to-project-btn">
              Github User Project
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/React-Github-User-List-Project"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
        <div className="Project-item">
          <h1>A Counter</h1>
          <p>
            A counter with different options, like add and subtract 100, random
            number, etc.
          </p>
          <Link to="/CounterProject">
            <button className="Project-to-project-btn">Counter Project</button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/React-Counter-Project"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
      </div>
      <h2 className="Project-heading">Javascript</h2>
      <div className="Project-underline"></div>
      <div className="Project-container">
        <div className="Project-item">
          <h1>Shootout Prediction Game</h1>
          <p>
            A 2D soccer/football shootout game created with Vanilla Javascript,
            CSS and HTML.
          </p>

          <Link to="/ShootoutGame">
            <button className="Project-to-project-btn">
              Shootout Prediction Game
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/Shootout-Prediction-Game"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
        <div className="Project-item">
          <h1>Card Matching Game</h1>
          <p>
            A 2D 2 player card matching game created with Vanilla Javascript,
            CSS and HTML.
          </p>

          <Link to="/CardMatchGame">
            <button className="Project-to-project-btn">
              Card Matching Game
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/Card-Matching-Game"
                target="_blank"
              >
                <FaGithub /> to Github
              </a>
            </button>
          </div>
        </div>
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

          <Link to="/JavaCustomerFileProject">
            <button className="Project-to-project-btn">
              Customer CRUD Project
            </button>
          </Link>
          <div style={{ textAlign: "center" }}>
            <button className="Project-github-icon">
              <a
                href="https://github.com/eugenehan94/CustomerFile"
                target="_blank"
              >
                <FaGithub /> to Github
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
