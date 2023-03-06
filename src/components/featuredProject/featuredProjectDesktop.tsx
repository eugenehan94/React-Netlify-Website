import React from "react";
import OpenInNewTab from "../_shared/openInNewTab";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
// Material UI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
// Project Data
import featureProject from "../../data/featureProject";

const FeaturedProjectDesktop = () => {
  const {
    description,
    githubLink,
    picture,
    projectLink,
    stacks,
    title,
  } = featureProject;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            "&: hover": {
              cursor: "pointer",
            },
          }}
          src={picture}
          alt="Anime Website Display Picture"
          onClick={() => OpenInNewTab(projectLink)}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          component="h3"
          variant="body2"
          sx={{ color: "#0072e5", fontWeight: "700" }}
        >
          Featured Project
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
                onClick={() => OpenInNewTab(githubLink)}
                sx={{ "&: hover": { cursor: "pointer" } }}
              />
              <LaunchIcon
                onClick={() => OpenInNewTab(projectLink)}
                sx={{ "&: hover": { cursor: "pointer" } }}
              />
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FeaturedProjectDesktop;
