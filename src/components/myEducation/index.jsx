import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";

const StyledContainer = styled(Box)(({}) => ({
  backgroundColor: "#1d1b26",
}));

const MyEducation = () => {
  return (
    <StyledContainer>
      <Typography sx={{ color: "#0072e5", fontSize: "50px" }}>
        My Education
      </Typography>
      <Grid container>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>Chemistry</Typography>
              <Typography>BSc|Toronto Metropolitan University</Typography>
              <Typography>
                Through my comprehensive Bachelor of Science degree in
                Chemistry, I possess the expertise to analyze data from various
                sources, critically solve complex real life problems and
                effectively communicate with non-scientific audiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>Research Paper</Typography>
              <Typography>Thesis|Toronto Metropolitan University</Typography>
              <Typography>
                During my undergraduate studies, I published a scientific paper
                alongside a PhD student, which provided me with a strong
                foundation in analytical and critical thinking concepts. Feel
                free to take a look{" "}
                <a href="https://www.journalofdairyscience.org/article/S0022-0302(16)30549-5/fulltext">
                  link to scientific paper
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default MyEducation;
