import React from "react";
// Material UI Component
import { Box } from "@mui/material";

interface LetterEBottomProps {
  inView: boolean
}

const LetterEBottom = (props: LetterEBottomProps) => {
  const {inView} = props;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "5px",
        left: "-20px",
        width: "30px",
        height: "20px",
        borderWidth: "0px 0 10px 10px",
        borderStyle: "solid",
        borderColor: "#0072e5",
        animation: inView ? "Diamond_Border 1s linear" : "",
      }}
    ></Box>
  );
};

export default LetterEBottom;
