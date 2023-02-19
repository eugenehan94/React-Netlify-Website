import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import LeftFixedInfo from "../leftFixedInfo";

const Hero = () => {
  return (
    <div>
      <LeftFixedInfo />
      <Box>
        <Typography component="h1" variant="h6" gutterBottom>
          Hello, my name is
        </Typography>
        <Typography component="h2" variant="h1" gutterBottom>
          Eugene Han
        </Typography>
        <Typography component="h2" variant="h2" gutterBottom>
          I build things for the web.
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography>
              I am a frontend developer specializing in building the frontend of
              websites and web applications that leads to success. Currently, I am
              focused on continously improving my frontend knowledge.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
