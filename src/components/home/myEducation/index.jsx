import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  styled,
} from "@mui/material";

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

const StyledTitleTypography = styled(Typography)(() => ({
  color: "#0072e5",
  fontSize: "50px",
  wordWrap: "break-word",
  marginBottom: "2rem",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#0e1519",
  borderRadius: "10px",
  border: "1px solid #131B20",
  boxShadow: "none",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 3rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem 0.5rem",
  },
}));

const StyledCardTitleTypography = styled(Typography)(() => ({
  fontSize: "40px",
  wordWrap: "break-word",
}));

const StyledCardTitleCaptions = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "500",
  margin: "1rem 0",
}));

const StyledCardParagraphyTypography = styled(Typography)(() => ({
  color: "#94a6b8",
  fontSize: "18px",
}));

const MyEducation = () => {
  return (
    <StyledContainer>
      <StyledTitleTypography>My Education</StyledTitleTypography>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <StyledCard>
            <CardContent>
              <Typography sx={{ fontSize: "2.5rem" }}>🎓</Typography>
              <StyledCardTitleTypography color="secondary">
                Chemistry
              </StyledCardTitleTypography>
              <StyledCardTitleCaptions>
                BSc | Toronto Metropolitan University
              </StyledCardTitleCaptions>
              <StyledCardParagraphyTypography align="justify">
                Through my comprehensive Bachelor of Science degree in
                Chemistry, I possess the expertise to analyze data from various
                sources, critically solve complex real life problems and
                effectively communicate with non-scientific audiences.
              </StyledCardParagraphyTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item lg={4}>
          <StyledCard>
            <CardContent>
              <Typography sx={{ fontSize: "2.5rem" }}>📜</Typography>
              <StyledCardTitleTypography color="secondary">
                Research Paper
              </StyledCardTitleTypography>
              <StyledCardTitleCaptions>
                Thesis | Toronto Metropolitan University
              </StyledCardTitleCaptions>
              <StyledCardParagraphyTypography align="justify">
                During my undergraduate studies, I published a scientific paper
                alongside a PhD student, which provided me with a strong
                foundation in analytical and critical thinking concepts. Feel
                free to take a look at the{" "}
                <Link
                  href="https://www.journalofdairyscience.org/article/S0022-0302(16)30549-5/fulltext"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to scientific paper, opens in new tab"
                  color="primary"
                >
                  scientific paper
                </Link>
              </StyledCardParagraphyTypography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default MyEducation;
