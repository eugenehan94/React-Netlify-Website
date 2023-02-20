import React from "react";
import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "3rem 0",
        borderTop: "1px solid #3e5060",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link
        href="https://github.com/eugenehan94/React-Netlify-Website"
        target="_blank"
        rel="noopener noreferrer"
        underline="always"
        aria-label="Visit Github repository for this website"
      >
        Built by Eugene Han
      </Link>
    </Box>
  );
};

export default Footer;
