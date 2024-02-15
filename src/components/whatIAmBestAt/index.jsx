import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  styled,
} from "@mui/material";

const StyledContainer = styled(Box)(({}) => ({
  backgroundColor: "#1c1a25",
}));

const WhatIAmBestAt = () => {
  return (
    <StyledContainer>
      <Typography sx={{ color: "#0072e5", fontSize: "60px" }}>
        What I Am Best At!
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#1d1b26" }}>
            <CardContent>
              <Typography
                sx={{ color: "#9c27b0", fontSize: "40px" }}
                gutterBottom
              >
                Developing
              </Typography>
              <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
                From front and backend development to problem-solving and
                testing. I strive to deliever working solutions that enhance
                user satisfaction and align with the client's brand identity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#1d1b26" }}>
            <CardContent>
              <Typography
                sx={{ color: "#9c27b0", fontSize: "40px" }}
                gutterBottom
              >
                Teamwork
              </Typography>
              <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
                From small and large projects with great objectives and
                challenges. I bring effective connection skills to unite and
                ensure goals are achieved.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#1d1b26" }}>
            <CardContent>
              <Typography
                sx={{ color: "#9c27b0", fontSize: "40px" }}
                gutterBottom
              >
                Communication
              </Typography>
              <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
                From sciences to technologies and financials to businesses. I
                leverage my effective communication approach to optimized
                audience comprehension.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default WhatIAmBestAt;
