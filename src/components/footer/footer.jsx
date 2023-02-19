import React from "react";
import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "3rem 0",
        borderTop: "1px solid #3e5060",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Link
        component="button"
        variant="body1"
        onClick={() => console.log("clicked")}
        aria-label="Visit Github repository for this website"
      >
        Built by Eugene Han
      </Link>
    </Box>
  );
};

export default Footer;
