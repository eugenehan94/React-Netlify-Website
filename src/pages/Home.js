import React from "react";
/*Component imports */
import Navbar from "../components/navbar/index";
import ScrollToTop from "../components/_shared/scrollToTop";
import LeftFixedInfo from "../components/_shared/leftFixedInfo";
import Hero from "../components/home/hero";
import AboutMe from "../components/home/aboutMe";
import FeaturedProject from "../components/featuredProject";
import OtherProjects from "../components/home/otherProjects";
import Contact from "../components/home/contact";
import Footer from "../components/footer/footer";
// Material UI Components
import { Box } from "@mui/material";

const Home = () => {
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
        <FeaturedProject />
        <OtherProjects />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
