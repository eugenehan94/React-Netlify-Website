import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const DesktopNavbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Box
        onClick={() => {
          const anchor = document.querySelector("#aboutMe");
          anchor!.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        sx={{ "&:hover": { cursor: "pointer" } }}
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
        sx={{ "&:hover": { cursor: "pointer" } }}
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
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <Typography>Contact</Typography>
      </Box>
    </Stack>
  );
};

export default DesktopNavbar;
