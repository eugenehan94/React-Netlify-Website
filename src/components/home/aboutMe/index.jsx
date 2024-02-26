import { Box, Grid, Typography, styled } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StyledContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: "10",
  backgroundColor: "#090e10",
  padding: "3rem 1rem",
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 3rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "3rem 4rem",
  },
}));

const StyledTitleTypography = styled(Typography)(() => ({
  color: "#0072e5",
  fontSize: "50px",
  wordWrap: "break-word",
  marginBottom: "20px",
}));

const StyledParagraphTypography = styled(Typography)(() => ({
  color: "#94a6b8",
  fontSize: "18px",
  marginBottom: "20px",
}));

const StyledListTextTypography = styled(Typography)(() => ({
  color: "#94a6b8",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
}));

const StyledChevronRightIcon = styled(ChevronRightIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const AboutMe = () => {
  const techStacks = [
    {
      stack: "JavaScript",
    },
    {
      stack: "Angular",
    },
    {
      stack: "React",
    },
    {
      stack: "Typescript",
    },
    {
      stack: "Node Js",
    },
    {
      stack: "Java",
    },
    {
      stack: "Git",
    },
    {
      stack: "GraphQL",
    },
    {
      stack: "Azure DevOps",
    },
    {
      stack: "Archer",
    },
    {
      stack: "MongoDB",
    },
    {
      stack: "MySQL",
    },
  ];

  return (
    <StyledContainer id="about-me">
      <Grid container spacing={{ xs: 1, lg: 5 }}>
        <Grid item lg={6}>
          <Grid container>
            <Grid item>
              <StyledTitleTypography>I'm Eugene,</StyledTitleTypography>
            </Grid>
            <Grid item>
              <StyledParagraphTypography align="justify">
                👨🏻‍💻I am a developer with a passion for creating solutions that
                make a real difference. I worked at SIRVA/BGRS, where I put my
                skills to work in website development, custom web application
                and project management.
              </StyledParagraphTypography>
            </Grid>
            <Grid item>
              <StyledParagraphTypography align="justify">
                🏫I hold a Bachelor of Science degree (who would have thought
                that I will be developing application and managing a team of
                amazing developers). The pursuit of knowledge did not stop
                there, though. I have gathered an assortment of achievements,
                like shiny badges of honor and certificates, to further my
                education and skills.
              </StyledParagraphTypography>
            </Grid>
            <Grid item>
              <StyledParagraphTypography align="justify">
                👨🏼‍🔬Now, do not let my science degree fool you. While learning
                about the entire human body, explosive chemical reactions and
                the law of thermodynamics could have squashed my creativity,
                instead, they did quite the opposite. They sparked an even
                greater curiosity to explore the realm of technologies in
                unconventional ways.
              </StyledParagraphTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6}>
          <Grid container>
            <Grid item>
              <StyledParagraphTypography
                align="justify"
                sx={{ marginTop: { lg: "5.9rem" } }}
              >
                🖥️Here are the technologies I have used:
              </StyledParagraphTypography>
              <Grid container>
                {techStacks.map((stack) => (
                  <Grid item xs={12} sm={6}>
                    <StyledListTextTypography>
                      <StyledChevronRightIcon />
                      {stack.stack}
                    </StyledListTextTypography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutMe;
