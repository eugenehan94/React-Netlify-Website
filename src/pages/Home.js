import React from "react";
/*Component imports */
import Navbar from "../components/versionTwo/navbar/index";
import ScrollToTop from "../components/versionTwo/_shared/scrollToTop";
import LeftFixedInfo from "../components/versionTwo/_shared/leftFixedInfo";
import Hero from "../components/versionTwo/hero/index";
import AboutMe from "../components/versionTwo/home/aboutMe";
import FeaturedProject from "../components/versionTwo/featuredProject";
import OtherProjects from "../components/versionTwo/home/otherProjects";
import Contact from "../components/versionTwo/home/contact";
import Footer from "../components/versionTwo/footer/footer";
// Material UI Components
import { Box } from "@mui/material";

const Home = (props) => {
  return (
    <Box>
      <Navbar {...props} />
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
        <FeaturedProject />
        <OtherProjects />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
