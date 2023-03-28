import React from "react";
import OpenInNewTab from "../_shared/openInNewTab";
// Material UI Components
import { Box, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
// Material UI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
// Project Data
import featureProject from "../../data/featureProject";

const FeaturedProjectDesktop = () => {
  const theme = useTheme();
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
        <Box sx={{ position: "relative" }}>
          <Box
            onClick={() => {
              OpenInNewTab(projectLink);
            }}
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(61, 71, 82, 0.55)",
              opacity: 0,
              "&: hover": { opacity: 1, cursor: "pointer" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Go to site <LaunchIcon />
              </Typography>
            </Box>
          </Box>
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
        </Box>
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
            backgroundColor:
              theme.palette.mode === "light" ? "#001e3c" : "#0a1929",
            color: "white",
            width: "100%",
            height: "75%",
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
                  // color="primary"
                  key={index}
                  sx={{
                    marginRight: "0.3rem",
                    marginBottom: "0.1rem",
                    backgroundColor: "#1976d2",
                    color: "#fff"
                  }}
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
