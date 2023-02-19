import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
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
      <Box sx={{padding: "0 10rem"}}>
        <Typography align="center">
          I am always looking for the next challenge where I can contribute,
          learn and grow. Please feel free to contact me on Linkedin. I'll try my best
          to get back to you!
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
