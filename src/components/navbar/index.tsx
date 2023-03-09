import React from "react";
import HomeIcon from "./homeIcon";
import Desktop from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

interface NavbarProps {
  setLoading: Function
}

const Navbar = (props: NavbarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <HomeIcon {...props}/>
        </Grid>
        <Grid item>{isMobile ? <MobileNavbar /> : <Desktop />}</Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
