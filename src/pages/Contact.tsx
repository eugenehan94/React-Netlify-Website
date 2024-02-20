import { Box, Divider, styled } from "@mui/material";
import Navbar from "../components/home/navbar";
import Hero from "../components/contact/hero";
import ContactContent from "../components/contact/contactContent";
const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ContactContent />
    </Box>
  );
};

export default Contact;
