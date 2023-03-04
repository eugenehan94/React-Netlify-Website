import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const AboutMe = () => {
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
            backgroundColor: "black",
            width: "300px",
            height: "1px",
            position: "relative",
            top: "-10px",
          }}
        />
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom align="justify" sx={{ color: "#3e5060" }}>
            Hello! My name is Eugene and I enjoy creating things that live on
            the internet. My interest in web development started back in 2009 in
            highschool. I took my first computer science course where it was
            mainly Java, but had moments of HTML and CSS. This lead me to
            further pursue Javascript and then React and Angular.
          </Typography>
          <Typography gutterBottom align="justify" sx={{ color: "#3e5060" }}>
            Fast-foward to today, I had the privilage of creating countless
            projects, contribute to opening source, and contribute my expertise
            to businesses.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom sx={{ color: "#3e5060" }}>
            Here are a few technologies I have used:
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                sx={{ display: "flex", alignItems: "center", color: "#3e5060" }}
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
                sx={{ display: "flex", alignItems: "center", color: "#3e5060" }}
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
                sx={{ display: "flex", alignItems: "center", color: "#3e5060" }}
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
                sx={{ display: "flex", alignItems: "center", color: "#3e5060" }}
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
                sx={{ display: "flex", alignItems: "center", color: "#3e5060" }}
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
                sx={{ display: "flex", alignItems: "center", color: "#3e5060" }}
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
