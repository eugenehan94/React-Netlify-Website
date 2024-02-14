import React from "react";
import OpenInNewTab from "../_shared/openInNewTab";
// Material UI Components
import {
  Box,
  Chip,
  Stack,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  useTheme,
} from "@mui/material";
// Material UI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
// Project Data
import featureProject from "../../../data/featureProject";

const FeaturedProjectMobile = () => {
  const theme = useTheme();
  const { description, githubLink, picture, projectLink, stacks, title } =
    featureProject;

  return (
    <Card
      sx={{
        "&: hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <CardHeader
        title={
          <>
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
          </>
        }
      />
      <CardMedia
        component="img"
        src={picture}
        alt="Anime Website Display Picture"
        onClick={() => OpenInNewTab(projectLink)}
        sx={{
          width: "100%",
          height: "100%",
          "&: hover": {
            cursor: "pointer",
          },
        }}
      />
      <CardContent
        sx={{
          backgroundColor:
            theme.palette.mode === "light" ? "#001e3c" : "#0a1929",
          color: "#fff",
        }}
      >
        <Typography sx={{ color: "#e6db74" }}>{description}</Typography>
        <Box>
          {stacks.map((stack, index) => (
            <Chip
              label={stack}
              // color="primary"
              key={index}
              sx={{ margin: "0.8rem 0.2rem", backgroundColor: "#1976d2" }}
            />
          ))}
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <GitHubIcon
            onClick={() => OpenInNewTab(githubLink)}
            sx={{ "&: hover": { cursor: "pointer" } }}
          />
          <LaunchIcon
            onClick={() => OpenInNewTab(projectLink)}
            sx={{ "&: hover": { cursor: "pointer" } }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FeaturedProjectMobile;
