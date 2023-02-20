import React from "react";
// Material UI Components
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
// Material UI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
// Project Data
import featureProject from "../../data/featureProject";

const Projects = () => {
  const {
    description,
    githubLink,
    picture,
    projectLink,
    stacks,
    title,
  } = featureProject;

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

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
              "&: hover": {
                cursor: "pointer"
              },
            }}
            src={picture}
            alt="Anime Website Display Picture"
            onClick={() => openInNewTab(projectLink)}
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
            {title}
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
              <Typography sx={{ color: "#e6db74" }}>{description}</Typography>
              <Box>
                {stacks.map((stack, index) => (
                  <Chip
                    label={stack}
                    color="primary"
                    key={index}
                    sx={{ marginRight: "0.3rem", marginBottom: "0.1rem" }}
                  />
                ))}
              </Box>
              <Stack direction="row" spacing={2}>
                <GitHubIcon
                  onClick={() => openInNewTab(githubLink)}
                  sx={{ "&: hover": { cursor: "pointer" } }}
                />
                <LaunchIcon
                  onClick={() => openInNewTab(projectLink)}
                  sx={{ "&: hover": { cursor: "pointer" } }}
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
