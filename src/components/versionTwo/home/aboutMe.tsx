import React from "react";
// Material UI Components
import { Box, Grid, Typography, useTheme } from "@mui/material";
// Material UI Icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const AboutMe = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "3rem 0",
      }}
      id="aboutMe"
    >
      <Typography component="h2" variant="h3" sx={{ paddingBottom: "2.5rem" }}>
        About Me{" "}
        <span
          style={{
            // display: inline-block required so width will have affect
            display: "inline-block",
            // backgroundColor: "black",
            backgroundColor: theme.palette.mode === "light" ? "black" : "#fff",
            width: "300px",
            height: "1px",
            position: "relative",
            top: "-10px",
          }}
        />
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom align="justify" color="text.secondary">
            Hello! My name is Eugene and I enjoy creating things that live on
            the internet. My interest in web development started back in 2009 in
            highschool. I took my first computer science course where it was
            mainly Java, but had moments of HTML and CSS. This lead me to
            further pursue Javascript and then React and Angular.
          </Typography>
          <Typography gutterBottom align="justify" color="text.secondary">
            Fast-foward to today, I had the privilage of creating countless
            projects, contribute to opening source, and contribute my expertise
            to businesses.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom color="text.secondary">
            Here are a few frontend technologies I have used:
          </Typography>
          <Grid container sx={{ marginBottom: "0.4rem" }}>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                Javascript (ES6+)
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                React
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                Angular
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                Typescript
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                GraphQL
              </Typography>
            </Grid>
          </Grid>
          <Typography gutterBottom color="text.secondary">
            Here are a few backend technologies I have used:
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                Node.js
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChevronRightOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0072e5" }}
                />
                Java
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
