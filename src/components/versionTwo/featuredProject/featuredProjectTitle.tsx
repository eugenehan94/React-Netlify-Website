import React from "react";
// Material UI Components
import { Typography, useTheme } from "@mui/material";

const FeaturedProjectTitle = () => {
  const theme = useTheme();
  return (
    <Typography component="h2" variant="h3" sx={{ paddingBottom: "2.5rem" }}>
      Projects I've Built{" "}
      <span
        style={{
          // display: inline-block required so width will have affect
          display: "inline-block",
          backgroundColor: theme.palette.mode === "light" ? "black" : "#fff",
          width: "300px",
          height: "1px",
          position: "relative",
          top: "-10px",
        }}
      />
    </Typography>
  );
};

export default FeaturedProjectTitle;
