import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import bgrsLogoColor from "../../data/images/BgrsLogoColor.png";
import sirvaLogo from "../../data/images/SirvaLogo.png";
const StyledContainer = styled(Box)(({}) => ({
  backgroundColor: "#1d1b26",
}));

const MyProfessionalJourney = () => {
  return (
    <StyledContainer>
      <Typography sx={{ color: "#0072e5", fontSize: "50px" }}>
        My Professional Journey
      </Typography>

      <Grid container direction="column" alignItems="stretch">
        <Grid container direction="column" alignItems="stretch" spacing={2}>
          <Grid item>
            <Card sx={{ backgroundColor: "#1d1b26" }}>
              <img src={bgrsLogoColor} alt="BGRS logo" />
              <img src={sirvaLogo} alt="Sirva logo" />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ backgroundColor: "#1d1b26" }}>
              <CardContent>
                <Typography
                  sx={{
                    color: "#00eeac",
                    fontSize: "40px",
                  }}
                >
                  Senior Frontend Developer
                </Typography>
                <Typography
                  sx={{ color: "#ffffff", fontSize: "15px", fontWeight: "500" }}
                >
                  SIRVA/BGRS | 2021 - 2023
                </Typography>
                <Typography sx={{ color: "#ffffff" }}>
                  I effectively managed an array of responsibilities, leading to
                  significant results, such as 94% optimal website performance,
                  a 20% reduction in users calling in for assistance, and
                  helping other critical projects reach completion in a timely
                  manner.
                </Typography>
                <Typography sx={{ color: "#ffffff" }}>Learn More</Typography>
                <Typography sx={{ color: "#ffffff" }}>
                  As a Senior Frontend Developer at SIRVA/BGRS, I developed
                  frontend applications using React, Redux, Javascript and
                  Material UI following SDLF (software development life cycle).
                  Other technological stacks were eventually introduced when
                  SIRVA bought BGRS. These stacks included Angular, Angular
                  Material, RxJs and NgRx.
                </Typography>
                <Typography sx={{ color: "#ffffff" }}>
                  My responsibilities also extended outside my given role. I
                  assumed responsibilities from business system analyst(BSA),
                  business analyst(BA), product managers(PM). Where I would
                  explain our processes to clients, gather information and
                  requirements, have meetings with stakeholders to provide
                  updates and concerns.
                </Typography>
                <Typography sx={{ color: "#ffffff" }}>
                  My hands-on approach has led to considerable growth in our
                  metrics - we have seen a 94% improvement in our website
                  performance. The application my team and I built assisted
                  users with the entire application which resulted in a
                  reduction of call volumes to our centers by 20%. Additionally,
                  I assisted other critical projects to help them complete
                  projects which probably positively impacted metrics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Button variant="contained">View My Portfolio</Button>
    </StyledContainer>
  );
};

export default MyProfessionalJourney;
