import React from "react";
import Card from "../_shared/card";
// Material UI Components
import { Box, Typography } from "@mui/material";
// Project Data
import mernProjects from "../../data/mernProjectsV2";
import javascriptProjects from "../../data/javascriptProjectsV2";
import reactProjects from "../../data/reactProjectsV2";
import javaProjects from "../../data/javaProjectsV2";

const OtherProjects = () => {
  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{ paddingBottom: "2.5rem" }}
      >
        Other Projects
      </Typography>
      {/* Material UI Grid will keep Grid items all same height if one extends */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(5, 1fr)",
          },
          gap: { xs: "10px", md: "30px" },
          gridAutoRows: "column",
        }}
      >
        {/* Render MERN projects */}
        {mernProjects.map((mernProject, index) => (
          <Card {...mernProject} index={index} key={index} />
        ))}
        {/* Render Javascript projects */}
        {javascriptProjects.map((javascriptProject, index) => (
          <Card {...javascriptProject} index={index} key={index} />
        ))}
        {/* Render React projects */}
        {reactProjects.map((reactProject, index) => (
          <Card {...reactProject} index={index} key={index} />
        ))}
        {/* Render Java projects */}
        {javaProjects.map((javaProject, index) => (
          <Card {...javaProject} index={index} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default OtherProjects;
