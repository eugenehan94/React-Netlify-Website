import React from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
// Material UI components
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <LeftSide />
        </Grid>
        {isLarge ? (
          <Grid item lg={6}>
            <RightSide />
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};

export default Hero;
