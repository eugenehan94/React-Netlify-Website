import { Box } from "@mui/material";
import Navbar from "../components/_shared/navbar";
import Hero from "../components/certificates/hero";
import Certificate from "../components/certificates/certificate";
import ScrollToTop from "../components/_shared/scrollToTopButton";
const Certificates = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Certificate />
      <ScrollToTop />
    </Box>
  );
};

export default Certificates;
