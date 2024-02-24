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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <StyledCardTopBorder></StyledCardTopBorder>
            <StyledCardContent>
              <LinkedInIcon sx={{ color: "#94a6b8" }} fontSize="large" />
              <StyledCardTitleTypography color="secondary">
                Linkedin
              </StyledCardTitleTypography>
              <StyledCardParagraphyTypography>
                I would love to talk about how we can work together. Feel free
                to connect.
              </StyledCardParagraphyTypography>
            </StyledCardContent>
            <StyledCardActions>
              <Button
                href="https://www.linkedin.com/in/eugene-h-7928bb63"
                rel="noopener nonreferrer"
                target="_blank"
                aria-label="link to my linkedin, opens in new tab"
              >
                Visit My Linkedin
              </Button>
            </StyledCardActions>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <StyledCardTopBorder></StyledCardTopBorder>
            <StyledCardContent>
              <GitHubIcon sx={{ color: "#94a6b8" }} fontSize="large" />
              <StyledCardTitleTypography color="secondary">
                Github
              </StyledCardTitleTypography>
              <StyledCardParagraphyTypography>
                Let us build something great together and make a difference.
              </StyledCardParagraphyTypography>
            </StyledCardContent>
            <StyledCardActions>
              <Button
                href="https://github.com/eugenehan94"
                rel="noopener nonreferrer"
                target="_blank"
                aria-label="link to my github, opens in new tab"
              >
                Visit My Github
              </Button>
            </StyledCardActions>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default ContactContent;
