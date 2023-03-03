import React from "react";
// Material UI Components
import { Box, Chip, Typography } from "@mui/material";
// Material UI Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
// Project Data
import mernProjects from "../../data/mernProjectsV2";
import javascriptProjects from "../../data/javascriptProjectsV2";
import reactProjects from "../../data/reactProjectsV2";
import javaProjects from "../../data/javaProjectsV2";

const openInNewTab = (link: string) => {
  window.open(link, "_blank", "noopener noreferrer");
};

interface CardProps {
  picture: string;
  title: string;
  description: string;
  stacks: string[];
  projectLink: string;
  githubLink: string;
  index: number;
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
        border: "1px solid #3e50606b",
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
      TEST
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
            openInNewTab(projectLink);
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
        <Typography gutterBottom sx={{ color: "#3e5060" }}>
          {description}
        </Typography>
        <Box>
          {stacks.map((stack, index) => (
            <Chip
              key={index}
              label={stack}
              color="primary"
              sx={{ marginRight: "0.2rem", marginBottom: "0.1rem" }}
            />
          ))}
        </Box>

        <Box
          sx={{
            backgroundColor: "primary.main",
            padding: "0.5rem 0",
            "&: hover": {
              cursor: "pointer",
              color: "#fff",
            },
          }}
          onClick={() => {
            openInNewTab(githubLink);
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
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          },
          gap: { xs: "10px", md: "30px" },
          gridAutoRows: "column",
        }}
      >
        {mernProjects.map((mernProject, index) => (
          <Card {...mernProject} index={index} />
        ))}
        {/* Render MERN projects */}
        {/* {mernProjects.map((mernProject, index) => {
          const {
            description,
            githubLink,
            picture,
            projectLink,
            stacks,
            title,
          } = mernProject;
          return (
            <Box
              key={index}
              sx={{
                border: "1px solid #3e50606b",
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

              <Box
                sx={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}
              >
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
                    openInNewTab(projectLink);
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
                <Typography gutterBottom sx={{ color: "#3e5060" }}>
                  {description}
                </Typography>
                <Box>
                  {stacks.map((stack) => (
                    <Chip
                      label={stack}
                      color="primary"
                      sx={{ marginRight: "0.2rem", marginBottom: "0.1rem" }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: "0.5rem 0",
                    "&: hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {
                    openInNewTab(githubLink);
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
        })} */}
        {javascriptProjects.map((javascriptProject, index) => (
          <Card {...javascriptProject} index={index} />
        ))}
        {/* Render Javascript projects */}
        {/* {javascriptProjects.map((javascriptProject, index) => {
          const {
            description,
            githubLink,
            picture,
            projectLink,
            stacks,
            title,
          } = javascriptProject;
          return (
            <Box
              key={index}
              sx={{
                border: "1px solid #3e50606b",
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

              <Box
                sx={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}
              >
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
                    openInNewTab(projectLink);
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
                <Typography gutterBottom sx={{ color: "#3e5060" }}>
                  {description}
                </Typography>
                <Box>
                  {stacks.map((stack) => (
                    <Chip
                      label={stack}
                      color="primary"
                      sx={{ marginRight: "0.2rem", marginBottom: "0.1rem" }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: "0.5rem 0",
                    "&: hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {
                    openInNewTab(githubLink);
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
        })} */}
        {reactProjects.map((reactProject, index) => (
          <Card {...reactProject} index={index} />
        ))}
        {/* Render React projects */}
        {/* {reactProjects.map((reactProject, index) => {
          const {
            description,
            githubLink,
            picture,
            projectLink,
            stacks,
            title,
          } = reactProject;
          return (
            <Box
              key={index}
              sx={{
                border: "1px solid #3e50606b",
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

              <Box
                sx={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}
              >
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
                    openInNewTab(projectLink);
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
                <Typography gutterBottom sx={{ color: "#3e5060" }}>
                  {description}
                </Typography>
                <Box>
                  {stacks.map((stack) => (
                    <Chip
                      label={stack}
                      color="primary"
                      sx={{ marginRight: "0.2rem", marginBottom: "0.1rem" }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: "0.5rem 0",
                    "&: hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {
                    openInNewTab(githubLink);
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
        })} */}
        {javaProjects.map((javaProject, index) => (
          <Card {...javaProject} index={index} />
        ))}
        {/* Render Java projects */}
        {/* {javaProjects.map((javaProject, index) => {
          const {
            description,
            githubLink,
            picture,
            projectLink,
            stacks,
            title,
          } = javaProject;
          return (
            <Box
              key={index}
              sx={{
                border: "1px solid #3e50606b",
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

              <Box
                sx={{ display: "grid", gridTemplateRows: "auto auto 1fr auto" }}
              >
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
                    openInNewTab(projectLink);
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
                <Typography gutterBottom sx={{ color: "#3e5060" }}>
                  {description}
                </Typography>
                <Box>
                  {stacks.map((stack) => (
                    <Chip
                      label={stack}
                      color="primary"
                      sx={{ marginRight: "0.2rem", marginBottom: "0.1rem" }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    padding: "0.5rem 0",
                    "&: hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {
                    openInNewTab(githubLink);
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
        })} */}
      </Box>

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
