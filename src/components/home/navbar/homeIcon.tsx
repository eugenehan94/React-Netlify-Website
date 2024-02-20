import React from "react";
import { styled } from "@mui/material";
// Material UI Icons
import MatHomeIcon from "@mui/icons-material/Home";

const StyledMatHomeIcon = styled(MatHomeIcon)(() => ({
  color: "#94a6b8",
  "&:hover": {
    cursor: "pointer",
    animation: "Home_Icon 0.5s linear infinite",
    "@keyframes Home_Icon": {
      "0%": {
        transform: "rotate(0)",
      },
      "20%": {
        transform: "rotate(-15deg)",
      },
      "50%": {
        transform: "rotate(0)",
      },
      "75%": {
        transform: "rotate(15deg)",
      },
      "100%": {
        transform: "rotate(0)",
      },
    },
  },
}));

const HomeIcon = () => {
  return <StyledMatHomeIcon fontSize="large" />;
};

export default HomeIcon;
