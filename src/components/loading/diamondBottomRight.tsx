import React from "react";
// Material UI Components
import { Box } from "@mui/material";

interface DiamondBottomRight {
  inView: boolean;
}

const DiamondBottomRight = (props: DiamondBottomRight) => {
  const { inView } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "8px",
        left: "-30px",
        width: "100px",
        height: "30px",
        borderWidth: "0px 0 10px 0px",
        borderStyle: "solid",
        borderColor: "#0072e5",
        transform: "rotate(-45deg)",
        animation: inView ? "Diamond_Border 0.7s linear" : "",
      }}
    ></Box>
  );
};

export default DiamondBottomRight;
