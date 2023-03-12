import React from "react";
import slideShowSlides from "./slideShowSlides";
import OpenInNewTab from "../_shared/openInNewTab";
// Material UI Components
import { Box, Typography } from "@mui/material";
// Material UI Icons
import LaunchIcon from "@mui/icons-material/Launch";

const SlideShow = () => {
  return (
    <Box
      sx={{
        animation: "slideUp 1s linear",
        "@keyframes slideUp": {
          "0%": {
            transform: "translateY(-300px)",
          },
          "100%": {
            transform: "translateY(-60px)",
          },
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {slideShowSlides.map((slide, index) => (
        <Box sx={{ position: "relative" }} key={index}>
          <Box
            onClick={() => {
              OpenInNewTab(slide.link);
            }}
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(61, 71, 82, 0.55)",
              opacity: 0,
              "&: hover": { opacity: 1, cursor: "pointer" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Go to site <LaunchIcon />
              </Typography>
            </Box>
          </Box>
          <Box
            component="img"
            src={slide.image}
            alt="Anime Website Display Picture"
            sx={{
              border: "1px solid rgba(61, 71, 82, 0.55)",
              width: "100%",
              height: "100%",
            }}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export default SlideShow;
