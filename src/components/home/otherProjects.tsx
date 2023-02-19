import React from "react";
import {
  Box,
  // Button,
  Chip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import AnimeWebsiteProject from "../../data/images/AnimeWebsiteProject.jpg";

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
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              alt="anime website"
              image={AnimeWebsiteProject}
            />
            <Box
              component="div"
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#1976d2",
                border: "0.2rem solid #ffffff",
                borderRadius: "50%",
                padding: "0 0.6rem",
                transform: "translateY(-50%)",
                margin: "0 auto",
                fontSize: "3rem",
                '&: hover': {
                  cursor: "pointer"
                }
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  height: "100%",
                  width: "100%",
                }}
              >
                <VisibilityIcon fontSize="large" sx={{ color: "#fff" }} />
              </Box>
            </Box>
            <CardContent>
              <Typography
                component="h3"
                variant="h4"
                align="center"
                gutterBottom
              >
                Anime/Manga Website Project
              </Typography>
              <Typography variant="body1" gutterBottom>
                Various collection of Anime and Manga, sorted by categories.
              </Typography>
              <Chip label="React" color="primary" />
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: "primary.main",
                display: "flex",
                justifyContent: "center",
                '&:hover': {
                  color: "white",
                  cursor: "pointer"
                }
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GitHubIcon sx={{ marginRight: "0.3rem" }} /> Source Code
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          Test
        </Grid>
        <Grid item xs={4}>
          Test
        </Grid>
      </Grid>
      {/* <Button>View More</Button> */}
    </Box>
  );
};

export default OtherProjects;

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
