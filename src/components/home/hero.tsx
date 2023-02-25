import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Box>
        <Typography
          component="h1"
          variant="h6"
          gutterBottom
          sx={{ color: "#0072e5" }}
        >
          Hello, my name is
        </Typography>
        <Typography
          component="h2"
          variant="h1"
          gutterBottom
          sx={{ color: "#0a1929" }}
        >
          Eugene Han
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          sx={{ color: "#0a1929" }}
        >
          I build things for the web.
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography align="justify" sx={{ color: "#3e5060" }}>
              I am a frontend developer specializing in building the frontend of
              websites and web applications that leads to success. Currently, I
              am focused on continously improving my frontend knowledge.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
