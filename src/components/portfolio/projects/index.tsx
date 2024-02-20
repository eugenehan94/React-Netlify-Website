import { Box, Button, Card, Chip, Typography, styled } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import AllProjects from "../../../data/allProjects";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#090e10",
  padding: "3rem 1rem",
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 3rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "3rem 4rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "6rem 4rem",
  },
}));

const StyledGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridAutoRows: "column",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.up("xl")]: {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
}));

const StyledCard = styled(Card)(() => ({
  marginBottom: "10px",
  border: "1px solid #131B20",
  borderRadius: "5px",
  overflow: "hidden",
  display: "grid",
  gridTemplateRows: "auto 1fr",
  backgroundColor: "#0e1519",
}));

const StyledCardTitle = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "24px",
}));

const StyledCardParagraph = styled(Typography)(() => ({
  color: "#94a6b8",
}));
const StyledCardCaptionTitle = styled(Typography)(() => ({
  color: "#ffffff",
  marginTop: "2rem",
}));

const Projects = () => {
  return (
    <StyledContainer>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Filter
      </Button>
      <StyledGrid>
        {AllProjects.map((project, index) => (
          <StyledCard key={index}>
            <Box>
              <img
                src={project.picture}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box sx={{ padding: "16px" }}>
              <StyledCardTitle>{project.title}</StyledCardTitle>
              <StyledCardParagraph>{project.description}</StyledCardParagraph>
              <StyledCardCaptionTitle>
                Technologies Used:
              </StyledCardCaptionTitle>
              <>
                {project.stacks.map((stack, index) => (
                  <Chip
                    key={index}
                    label={stack}
                    size="small"
                    color="primary"
                    sx={{ margin: "5px" }}
                  />
                ))}
              </>
              <>
                {project.libraries.map((library, index) => (
                  <Chip
                    key={index}
                    label={library}
                    size="small"
                    color="secondary"
                    sx={{ margin: "5px" }}
                  />
                ))}
              </>
            </Box>
            <Box
              sx={{
                padding: "0 8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="view source code on Github, opens in new tab"
              >
                Source Code
              </Button>
              {project.projectLink ? (
                <Button
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="view live project, opens in new tab"
                >
                  View Project
                </Button>
              ) : null}
            </Box>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledContainer>
  );
};

export default Projects;
