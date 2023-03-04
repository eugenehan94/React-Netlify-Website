import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        padding: "3rem 0",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{ paddingBottom: "2.5rem" }}
      >
        Contact Me
      </Typography>
      <Box sx={{ padding: { xs: "0", md: "0 10rem" } }}>
        <Typography align="center" sx={{ color: "#3e5060" }}>
          I am always looking for the next challenge where I can contribute,
          learn and grow. Please feel free to contact me on{" "}
          <Link
            href="http://www.linkedin.com/in/eugene-h-7928bb63"
            target="_blank"
            rel="noopener, noreferrer"
            underline="always"
          >
            Linkedin
          </Link>
          . I'll try my best to get back to you!
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
