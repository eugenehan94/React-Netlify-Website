import { useState } from "react";
import { Box, Button, Divider, Grid, styled, Typography } from "@mui/material";

import AllCertificates from "../../../data/allCertificates";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

const Certificate = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [isFilterListOpen, setIsFilterListOpen] = useState(false);
  const [allCertificates, setAllCertificates] = useState(AllCertificates);
  const [selectedFilter, setSelectedFilter] = useState("All");

  let allCertificatesSet: any = new Set();
  AllCertificates.map((certificates) =>
    allCertificatesSet.add(certificates.courseName)
  );
  let courseNamesList: string[] = ["All", ...allCertificatesSet];
  const handleFilterClick = (courseName: string) => {
    let filterList: any = [];
    setSelectedFilter(courseName);
    if (courseName === "All") {
      setAllCertificates(AllCertificates);
      return;
    }
    filterList = AllCertificates.filter(
      (certificates) => certificates.courseName === courseName
    );
    setAllCertificates(filterList);
  };

  return (
    <StyledContainer>
      {matches === false ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Button
            variant="contained"
            startIcon={isFilterListOpen ? <RemoveIcon /> : <AddIcon />}
            onClick={() => setIsFilterListOpen(!isFilterListOpen)}
            size="large"
          >
            Filter
          </Button>
        </Box>
      ) : null}

      {isFilterListOpen === true || matches === true ? (
        <Grid
          container
          sx={{ marginBottom: "1.5rem" }}
          justifyContent="center"
          spacing={1}
        >
          {courseNamesList.map((courseName: string, index: number) => (
            <Grid item key={index}>
              <Button
                sx={{
                  color:
                    selectedFilter === courseName
                      ? theme.palette.secondary.main
                      : "#ffffff",
                  fontSize: "16px",
                }}
                onClick={() => handleFilterClick(courseName)}
                aria-label={`filter for ${courseName} certificates`}
              >
                {courseName}
              </Button>
            </Grid>
          ))}
        </Grid>
      ) : null}

      {allCertificates.map((certificates, index) => (
        <Box key={index}>
          <Typography
            sx={{ color: "white", fontSize: "2rem", marginTop: "1.8rem" }}
          >
            {certificates.courseName}
          </Typography>
          <Divider sx={{ backgroundColor: "white", marginBottom: "1.5rem" }} />
          <StyledGrid>
            {certificates.courses.map((certificate, i) => (
              <Box key={i}>
                <img
                  src={certificate.picture}
                  alt={certificate.pictureAlt}
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Box>
            ))}
          </StyledGrid>
        </Box>
      ))}
    </StyledContainer>
  );
};

export default Certificate;
