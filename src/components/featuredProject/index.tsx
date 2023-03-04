import React from "react";
import FeaturedProjectTitle from "./featuredProjectTitle";
import FeaturedProjectDesktop from "./featuredProjectDesktop";
import FeaturedProjectMobile from "./featuredProjectMobile";
// Material UI Components
import { Box, useTheme, useMediaQuery } from "@mui/material";

const FeaturedProject = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ padding: "3rem 0" }} id="works">
      <FeaturedProjectTitle />
      {isMedium ? <FeaturedProjectDesktop /> : <FeaturedProjectMobile />}
    </Box>
  );
};

export default FeaturedProject;
