import React from "react";
import { Box, Link, useTheme, useMediaQuery } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        padding: "3rem 0",
        borderTop: "1px solid #3e5060",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Link
          href="https://github.com/eugenehan94/React-Netlify-Website"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          aria-label="Visit Github repository for this website"
        >
          Built by Eugene Han
        </Link>
      </Box>
      {isMedium ? (
        <Box sx={{ marginTop: "1rem" }}>
          <Link
            href="https://github.com/eugenehan94"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Github for this developer"
          >
            <GitHubIcon
              fontSize="large"
              sx={{
                color: "#757575",
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
                color: "#757575",
                "&:hover": { color: "#0059b2", cursor: "pointer" },
              }}
            />
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

export default Footer;
