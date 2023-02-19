import React, { useEffect, useContext } from "react";

/*Component imports */
import Navbar from "../components/Navbar";
import NavDropDown from "../components/NavDropDown";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import Hero from "../components/home/hero";
import AboutMe from "../components/home/aboutMe";
import Projects from "../components/home/projects";
import OtherProjects from "../components/home/otherProjects";
import Contact from "../components/home/contact";
import Footer from "../components/footer/footer";
/* Css import */
import "../css/Home.css";

/* useContext hook */
import { NavbarMenuContext } from "../App";

import { Box } from "@mui/material";

const Home = () => {
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
      <Box sx={{ marginLeft: "7rem", marginRight: "7rem", paddingTop: "2rem" }}>
        <Hero />
        <AboutMe />
        <Projects />
        <OtherProjects />
        <Contact />
        <Footer />
      </Box>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
