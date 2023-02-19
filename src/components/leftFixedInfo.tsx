import React from "react";
import { Box, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LeftFixedInfo = () => {
  return (
    <div>
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
          <GitHubIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <Box
            sx={{ backgroundColor: "black", width: "1px", height: "100px" }}
          ></Box>
        </Stack>
      </Box>
    </div>
  );
};

export default LeftFixedInfo;
