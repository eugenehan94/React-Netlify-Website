import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import bgrsLogoColor from "../../../data/images/BgrsLogoColor.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Link } from "react-router-dom";
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
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 3rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem 2rem",
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

const MyProfessionalJourney = () => {
  const professionalList = [
    {
      id: 1,
      logo: bgrsLogoColor,
      logoAlt: "BGRS logo",
      title: "Senior Frontend Developer",
      companyAndDuration: "SIRVA/BGRS | 2021 - 2023",
      description:
        "I effectively managed an array of responsibilities, leading to significant results, such as 94% optimal website performance, a 20% reduction in users calling in for assistance, and helping other critical projects reach completion in a timely manner.",
      learnMore: [
        {
          block:
            "As a Senior Frontend Developer at SIRVA/BGRS, I developed frontend applications using React, Redux, Javascript and Material UI following SDLF (software development life cycle). Other technological stacks were eventually introduced when SIRVA bought BGRS. These stacks included Angular, Angular Material, RxJs and NgRx.",
        },
        {
          block:
            "My responsibilities also extended outside my given role. I assumed responsibilities from business system analyst(BSA), business analyst(BA), product managers(PM). Where I would explain our processes to clients, gather information and requirements, have meetings with stakeholders to provide updates and concerns.",
        },
        {
          block:
            "My hands-on approach has led to considerable growth in our metrics - we have seen a 94% improvement in our website performance. The application my team and I built assisted users with the entire application which resulted in a reduction of call volumes to our centers by 20%. Additionally, I assisted other critical projects to help them complete projects which probably positively impacted metrics.",
        },
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (e: any, index: number) => {
    e.preventDefault();
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <StyledContainer>
      <StyledTitleTypography align="center">
        🚀My Professional Journey
      </StyledTitleTypography>

      <Grid
        container
        direction={{ xs: "column", lg: "row" }}
        alignItems="stretch"
        spacing={2}
      >
        {professionalList.map((profession, index) => (
          <React.Fragment key={profession.id}>
            <Grid item lg={3}>
              <StyledCard>
                <CardContent sx={{ height: "100%" }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                    sx={{ height: "inherit" }}
                  >
                    <Grid item>
                      <img src={profession.logo} alt={profession.logoAlt} />
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item lg={9}>
              <StyledCard>
                <CardContent>
                  <StyledCardTitleTypography color="secondary">
                    {profession.title}
                  </StyledCardTitleTypography>
                  <StyledCardTitleCaptions>
                    {profession.companyAndDuration}
                  </StyledCardTitleCaptions>
                  <StyledCardParagraphyTypography align="justify" gutterBottom>
                    {profession.description}
                  </StyledCardParagraphyTypography>
                  {profession.learnMore ? (
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        margin: "2rem 0",
                        cursor: "pointer",
                        "&: hover": {
                          color: "red",
                        },
                        color: "#ffffff",
                      }}
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleClick(event, index);
                        }
                      }}
                      tabIndex={0}
                    >
                      <Grid item>
                        <StyledCardParagraphyTypography
                          align="justify"
                          sx={{
                            color: (theme) =>
                              index === selectedIndex
                                ? theme.palette.secondary.main
                                : "inherit",
                          }}
                        >
                          Learn More
                        </StyledCardParagraphyTypography>
                      </Grid>
                      <Grid item>
                        {index === selectedIndex ? (
                          <RemoveCircleOutlineIcon
                            sx={{
                              color: (theme) =>
                                index === selectedIndex
                                  ? theme.palette.secondary.main
                                  : "inherit",
                            }}
                          />
                        ) : (
                          <AddCircleOutlineIcon sx={{ color: "inherit" }} />
                        )}
                      </Grid>
                    </Grid>
                  ) : null}

                  {index === selectedIndex ? (
                    <>
                      {profession.learnMore?.map((learn) => (
                        <StyledCardParagraphyTypography
                          align="justify"
                          gutterBottom
                        >
                          {learn.block}
                        </StyledCardParagraphyTypography>
                      ))}
                    </>
                  ) : null}
                </CardContent>
              </StyledCard>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Box sx={{ margin: "2rem 0" }}>
        <Link to="/my-portfolio" aria-label="Link to my portfolio page">
          <Button
            variant="contained"
            fullWidth
            startIcon="📖"
            disableElevation
            tabIndex={-1}
          >
            View My Portfolio
          </Button>
        </Link>
      </Box>
    </StyledContainer>
  );
};

export default MyProfessionalJourney;
