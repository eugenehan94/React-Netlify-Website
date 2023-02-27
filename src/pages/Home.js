import React, { useEffect, useContext } from "react";

/*Component imports */
import NavDropDown from "../components/NavDropDown";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import Navbar from "../components/navbar/navbar";
import LeftFixedInfo from "../components/_shared/leftFixedInfo";
import Hero from "../components/home/hero";
import AboutMe from "../components/home/aboutMe";
import Projects from "../components/home/projects";
import OtherProjects from "../components/home/otherProjects";
import Contact from "../components/home/contact";
import Footer from "../components/footer/footer";

/* useContext hook */
import { NavbarMenuContext } from "../App";

import { Box } from "@mui/material";
import ScrollToTop from "../components/_shared/scrollToTop";

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
      <ScrollToTop />
      <LeftFixedInfo />
      <Box
        sx={{
          marginLeft: { xs: "1rem", md: "7rem" },
          marginRight: { xs: "1rem", md: "7rem" },
          paddingTop: "2rem",
        }}
      >
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
