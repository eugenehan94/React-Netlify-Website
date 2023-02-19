import React from "react";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

import AnimeWebsiteProject from "../../data/images/AnimeWebsiteProject.jpg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
const Projects = () => {
  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Typography component="h2" variant="h3" sx={{ paddingBottom: "2.5rem" }}>
        Projects I've Built{" "}
        <span
          style={{
            // display: inline-block required so width will have affect
            display: "inline-block",
            backgroundColor: "black",
            width: "300px",
            height: "1px",
            position: "relative",
            top: "-10px",
          }}
        />
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }}
            src={AnimeWebsiteProject}
            alt="Anime Website Display Picture"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            component="h3"
            variant="body2"
            sx={{ color: "#0072e5", fontWeight: "700" }}
          >
            Feature Project
          </Typography>
          <Typography component="h3" variant="h3">
            AniMan
          </Typography>
          <Box
            component="div"
            sx={{
              backgroundColor: "#001e3c",
              color: "white",
              width: "100%",
              height: "50%",
              transform: "translateX(-40px)",
              borderRadius: "5px",
              padding: "2rem",
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-end"
              spacing={3}
            >
              <Typography>
                Various collection of Anime and Manga, sorted by categories
              </Typography>
              <Box><Chip label="Stacks" color="primary" /></Box>
              <Stack direction="row" spacing={2}>
                <GitHubIcon />
                <LaunchIcon />
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;

/*
import AnimeWebsiteProject from "../data/images/AnimeWebsiteProject.jpg";
    picture: AnimeWebsiteProject,
    title: "Anime/Manga Website Project",
    description: "Various collection of Anime and Manga, sorted by categories.",
    stacks: [
      "React Hooks",
      "React Router",
      "React Redux",
      "Material UI v5",
      "Immer",
    ],
    projectLink: "https://eugenehan94.github.io/React-Anime-Website-Project/",
    githubLink: "https://github.com/eugenehan94/React-Anime-Website-Project",
  },
*/
