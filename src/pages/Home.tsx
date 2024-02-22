import React from "react";
import Navbar from "../components/_shared/navbar";
import Hero from "../components/home/hero";
import AboutMe from "../components/home/aboutMe";
import WhatIAmBestAt from "../components/home/whatIAmBestAt";
import MyProfessionalJourney from "../components/home/myProfessionalJourney";
import MyEducation from "../components/home/myEducation";
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
    </Box>
  );
};

export default Home;
