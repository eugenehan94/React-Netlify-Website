import { Box, Grid, Typography, styled } from "@mui/material";

const StyledContainer = styled(Box)(({}) => ({
  position: "relative",
  zIndex: "10",
  backgroundColor: "#090e10",
}));

const AboutMe = () => {
  return (
    <StyledContainer>
      <Grid container>
        <Grid item>
          <Typography sx={{ color: "#0072e5", fontSize: "50px" }} gutterBottom>
            I'm Eugene,
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
            I am a developer with a passion for creating solutions that make a
            real difference. I worked at SIRVA/BGRS, where I put my skills to
            work in website development, custom web application and project
            management.
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
            I hold a Bachelor of Science degree (who would have thought that I
            will be developing application and managing a team of amazing
            developers). The pursuit of knowledge did not stop there, though. I
            have gathered an assortment of post-secondary certificates, like
            shiny badges of honor, to further my education and skills.
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
            Now, do not let my science degree fool you. While learning about the
            human body, chemical reactions that and the law of thermodynamics
            could have squashed my creativity, they did quite the opposite. They
            sparked an even greater curiosity to explore the realm of
            technologies in unconventional ways.
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
            Here are the technologies I have used:
          </Typography>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutMe;
