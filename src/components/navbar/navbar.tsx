import React from "react";
import MobileNavbar from "./mobileNavbar";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("isMobile: ", isMobile);
  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <HomeIcon
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
        </Grid>
        <Grid item>
          {isMobile ? <MobileNavbar/> : (
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
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
