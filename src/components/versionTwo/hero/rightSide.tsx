import React from "react";
import SlideShow from "./slideShow";
// Material UI Components
import { Box } from "@mui/material";

const RightSide = () => {
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          transform: "rotate(-35deg) translateY(-10%) translateX(25%)",
          transformOrigin: "center center",
        }}
      >
        <SlideShow />
      </Box>
    </Box>
  );
};

export default RightSide;
