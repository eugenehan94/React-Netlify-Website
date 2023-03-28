import React from "react";
import OpenInNewTab from "./openInNewTab";
// Material UI Components
import { Box, Chip, Typography } from "@mui/material";
// Material UI Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

interface CardProps {
  picture: string;
  title: string;
  description: string;
  stacks: string[];
  projectLink: string;
  githubLink: string;
  index: number;
  key: number;
}

const Card = (props: CardProps) => {
  const {
    picture,
    title,
    description,
    stacks,
    projectLink,
    githubLink,
    index,
  } = props;
  return (
    <Box
      key={index}
      sx={{
        border: "1px solid #3e5060be",
        borderRadius: "3px",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        textAlign: "center",
        "&: hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <Box>
        <img src={picture} alt={title} style={{ width: "100%" }} />
      </Box>
      <Box sx={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}>
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
            "&: hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            OpenInNewTab(projectLink);
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
        <Typography component="h4" variant="h4">
          {title}
        </Typography>
        <Typography gutterBottom color="text.secondary">
          {description}
        </Typography>
        <Box>
          {stacks.map((stack, i) => (
            <Chip
              key={i}
              label={stack}
              sx={{
                marginRight: "0.2rem",
                marginBottom: "0.1rem",
                backgroundColor: "#1976d2",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            backgroundColor: "#1976d2",
            padding: "0.5rem 0",
            "&: hover": {
              cursor: "pointer",
              color: "#fff",
            },
          }}
          onClick={() => {
            OpenInNewTab(githubLink);
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GitHubIcon sx={{ marginRight: "0.3rem" }} /> Source Code
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
