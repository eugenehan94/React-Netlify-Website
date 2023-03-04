import React from "react";

import MatHomeIcon from "@mui/icons-material/Home";

const HomeIcon = () => {
  return (
    <MatHomeIcon
      fontSize="large"
      sx={{
        color: "#0072e5",
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
      }}
    />
  );
};

export default HomeIcon;
