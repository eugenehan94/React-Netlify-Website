import React from "react";
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
        top: "0",
        left: "-26px",
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
