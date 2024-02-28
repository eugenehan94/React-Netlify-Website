import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  styled,
} from "@mui/material";

import LinkedinIcon from "../../../data/svg/linkedInIcon.svg";
import GitHub from "../../../data/svg/githubIcon.svg";

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

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#94a6b8",
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
    fontSize: "18px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "32px",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#0e1519",
  borderRadius: "10px",
  border: "1px solid #131B20",
  boxShadow: "none",
  height: "100%",
  position: "relative",
  padding: "1rem 0",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 3rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem 0.5rem",
  },
}));

const StyledCardTopBorder = styled(Box)(() => ({
  backgroundColor: "#94a6b8",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "10px",
}));
const StyledCardContent = styled(CardContent)(() => ({
  marginBottom: "3rem",
}));

const StyledCardTitleTypography = styled(Typography)(() => ({
  fontSize: "40px",
  wordWrap: "break-word",
}));

const StyledCardParagraphyTypography = styled(Typography)(() => ({
  color: "#94a6b8",
  fontSize: "18px",
}));

const StyledCardActions = styled(CardActions)(() => ({
  position: "absolute",
  bottom: "0",
}));
const ContactContent = () => {
  const tileContents = [
    {
      icon: LinkedinIcon,
      iconAlt: "Linkedin",
      title: "Linkedin",
      description:
        "I would love to talk about how we can work together. Feel free to connect.",
      link: "https://www.linkedin.com/in/eugene-h-7928bb63",
      buttonText: "Visit My Linkedin",
      linkAriaLabel: "link to my linkedin, opens in new tab",
    },
    {
      icon: GitHub,
      iconAlt: "Git hub",
      title: "GitHub",
      description:
        "Let us build something great together and make a difference.",
      link: "https://github.com/eugenehan94",
      buttonText: "Visit My GitHub",
      linkAriaLabel: "link to my github, opens in new tab",
    },
  ];
  return (
    <StyledContainer>
      <StyledTypography>
        "I am always looking for the next challenge where I can contribute,
        learn and grow.
      </StyledTypography>
      <StyledTypography>
        Please feel free to contact me. I will try my best to get back to you."
      </StyledTypography>
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        {tileContents.map((tileContent) => (
          <Grid item xs={12} md={6} lg={4}>
            <StyledCard>
              <StyledCardTopBorder></StyledCardTopBorder>
              <StyledCardContent>
                <img
                  src={tileContent.icon}
                  alt={tileContent.iconAlt}
                  aria-hidden="true"
                  style={{ width: "35px", height: "35px" }}
                />
                <StyledCardTitleTypography color="secondary">
                  {tileContent.title}
                </StyledCardTitleTypography>
                <StyledCardParagraphyTypography>
                  {tileContent.description}
                </StyledCardParagraphyTypography>
              </StyledCardContent>
              <StyledCardActions>
                <Button
                  href={tileContent.link}
                  rel="noopener nonreferrer"
                  target="_blank"
                  aria-label={tileContent.linkAriaLabel}
                >
                  {tileContent.buttonText}
                </Button>
              </StyledCardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default ContactContent;
