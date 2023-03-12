import React from "react";
// Material UI Component
import { Box } from "@mui/material";

interface LetterETopProps {
  inView: boolean;
}

const LetterETop = (props: LetterETopProps) => {
  const { inView } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-35px",
        left: "-20px",
        width: "30px",
        height: "20px",
        borderWidth: "10px 0 10px 10px",
        borderStyle: "solid",
        borderColor: "#0072e5",
        animation: inView ? "Diamond_Border 1s linear" : "",
      }}
    ></Box>
  );
};

export default LetterETop;
