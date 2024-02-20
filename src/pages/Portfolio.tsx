import Navbar from "../components/home/navbar";
import { Box, Divider, styled } from "@mui/material";

import Hero from "../components/portfolio/hero";
import Projects from "../components/portfolio/projects";
const Portfolio = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Projects />
    </Box>
  );
};

export default Portfolio;
