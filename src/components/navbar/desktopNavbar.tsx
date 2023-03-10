import React from "react";
// Material UI Components
import { Box, Stack, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const DesktopNavbar = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Box
        ref={ref}
        onClick={() => {
          const anchor = document.querySelector("#aboutMe");
          anchor!.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        sx={{
          "&:hover": { cursor: "pointer" },
          animation: inView ? "textTranslateY 0.8s linear" : "",
          "@keyframes textTranslateY": {
            "0%": {
              transform: "translateY(-100px)",
              opacity: 0,
            },
            "100%": {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
        }}
      >
        <Typography>About</Typography>
      </Box>
      <Box
        onClick={() => {
          const anchor = document.querySelector("#works");
          anchor!.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        sx={{
          "&:hover": { cursor: "pointer" },
          animation: inView ? "textTranslateY 0.8s linear" : "",
        }}
      >
        <Typography>Works</Typography>
      </Box>
      <Box
        onClick={() => {
          const anchor = document.querySelector("#contact");
          anchor!.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        sx={{
          "&:hover": { cursor: "pointer" },
          animation: inView ? "textTranslateY 0.8s linear" : "",
        }}
      >
        <Typography>Contact</Typography>
      </Box>
    </Stack>
  );
};

export default DesktopNavbar;
