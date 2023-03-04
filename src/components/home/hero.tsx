import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Box>
        <Typography
          ref={ref}
          component="h1"
          variant="h6"
          gutterBottom
          sx={{
            color: "#0072e5",
            animation: inView ? "textTranslateX 1s linear" : "",
            "@keyframes textTranslateX": {
              "0%": {
                transform: "translateX(100px)",
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
        >
          Hello, my name is
        </Typography>
        <Typography
          ref={ref}
          component="h2"
          variant="h1"
          gutterBottom
          sx={{
            color: "#0a1929",
            animation: inView ? "textTranslateX 1s linear" : "",
          }}
        >
          Eugene Han
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          sx={{ color: "#0a1929", animation: inView ? "textTranslateX 1s linear" : "" }}
        >
          I build stuff for the web.
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              align="justify"
              sx={{
                color: "#3e5060",
                animation: inView ? "textTranslateX 1s linear" : "",
              }}
            >
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
