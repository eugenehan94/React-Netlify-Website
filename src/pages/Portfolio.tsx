import Navbar from "../components/_shared/navbar";
import { Box, Divider, styled } from "@mui/material";

import Hero from "../components/portfolio/hero";
import Projects from "../components/portfolio/projects";
import ScrollToTop from "../components/_shared/scrollToTopButton";
const Portfolio = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Projects />
      <ScrollToTop />
    </Box>
  );
};

export default Portfolio;
