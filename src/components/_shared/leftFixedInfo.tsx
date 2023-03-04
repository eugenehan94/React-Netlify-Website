import React from "react";
import { Box, Link, Stack, useTheme, useMediaQuery } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useInView } from "react-intersection-observer";

const LeftFixedInfo = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  
  return (
    <Box>
      {isMedium ? (
        <Box
          ref={ref}
          sx={{
            position: "fixed",
            left: "40px",
            bottom: "0px",
            animation: inView ? "linkTranslateX 1s linear" : "",
            "@keyframes linkTranslateX": {
              "0%": {
                transform: "translateX(-100px)",
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            <Link
              href="https://github.com/eugenehan94"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Github for this developer"
            >
              <GitHubIcon
                fontSize="large"
                sx={{
                  color: "#007fff",
                  "&:hover": { color: "#0059b2", cursor: "pointer" },
                }}
              />
            </Link>
            <Link
              href="http://www.linkedin.com/in/eugene-h-7928bb63"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                fontSize="large"
                sx={{
                  color: "#007fff",
                  "&:hover": { color: "#0059b2", cursor: "pointer" },
                }}
              />
            </Link>
            <Box
              sx={{ backgroundColor: "#1a2027", width: "1px", height: "100px" }}
            ></Box>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default LeftFixedInfo;
