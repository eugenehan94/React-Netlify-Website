import React from "react";
import { Box } from "@mui/material";

interface DiamondTopLeftProps {
  inView: boolean;
}

const DiamondTopLeft = (props: DiamondTopLeftProps) => {
  const { inView } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-43px",
        left: "-70px",
        width: "100px",
        height: "30px",
        borderWidth: "10px 0 0px 0px",
        borderStyle: "solid",
        borderColor: "#0072e5",
        transform: "rotate(-45deg)",
        animation: inView ? "Diamond_Border 0.1s linear" : "",
        "@keyframes Diamond_Border": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      }}
    ></Box>
  );
};

export default DiamondTopLeft;
