import React from "react";
import { Box, Link, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LeftFixedInfo = () => {
  return (
    <Box sx={{display: {xs: "none", md: "block"}}}>
      <Box
        sx={{
          position: "fixed",
          left: "40px",
          bottom: "0px",
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
    </Box>
  );
};

export default LeftFixedInfo;
