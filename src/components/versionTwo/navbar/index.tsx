import React from "react";
import HomeIcon from "./homeIcon";
import Desktop from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";
// Material UI Components
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

const Navbar = (props: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <HomeIcon {...props} />
        </Grid>
        <Grid item>{isMobile ? <MobileNavbar /> : <Desktop />}</Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
