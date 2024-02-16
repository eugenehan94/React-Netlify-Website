import React from "react";
/*Component imports  Version 2*/
import Navbar2 from "../components/versionTwo/navbar/index";
import ScrollToTop from "../components/versionTwo/_shared/scrollToTop";
import LeftFixedInfo from "../components/versionTwo/_shared/leftFixedInfo";
import Hero2 from "../components/versionTwo/hero/index";
import AboutMe2 from "../components/versionTwo/home/aboutMe";
import FeaturedProject from "../components/versionTwo/featuredProject";
import OtherProjects from "../components/versionTwo/home/otherProjects";
import Contact from "../components/versionTwo/home/contact";
import Footer from "../components/versionTwo/footer/footer";

// Component imports - Version 3
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import WhatIAmBestAt from "../components/whatIAmBestAt";
import MyProfessionalJourney from "../components/myProfessionalJourney";
import MyEducation from "../components/myEducation";
// Material UI Components
import { Box, Divider, styled } from "@mui/material";

const StyledDivider = styled(Divider)(() => ({
  borderColor: "rgba(54, 64, 73, 1)",
}));

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <AboutMe />
      <StyledDivider aria-hidden="true" />
      <WhatIAmBestAt />
      <StyledDivider aria-hidden="true" />
      <MyProfessionalJourney />
      <StyledDivider aria-hidden="true" />
      <MyEducation />
      {/* <Navbar2 {...props} />
      <ScrollToTop />
      <LeftFixedInfo />
      <Hero2 />
      <AboutMe2 />
      <FeaturedProject />
      <OtherProjects />
      <Contact />
      <Footer /> */}
    </Box>
  );
};

export default Home;
