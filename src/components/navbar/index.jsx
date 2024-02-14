import { useState } from "react";
import { Box, AppBar, Toolbar, Grid, Drawer, Link } from "@mui/material";
import { styled } from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// https://mui.com/material-ui/react-app-bar/#fixed-placement
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#1d1b26",
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    height: "100%",
    padding: "1rem",
    backgroundColor: "#1d1b26",
    cursor: "pointer",
  },
}));

const StyledLink = styled(Link)(({}) => ({
  color: "#f600fc",
  fontSize: "28px",
  textDecoration: "none",
  cursor: "pointer",
  backgroundImage: "linear-gradient(#00eeac 0 0)",
  backgroundPosition: "0 100%",
  backgroundSize: "0% 2px",
  backgroundRepeat: "no-repeat",
  transition: "background-size 0.3s, background-position 0s 0.3s",
  "&:hover": {
    color: "#00eeac",
    backgroundPosition: "100% 100%",
    backgroundSize: "100% 2px",
  },
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box>
      <StyledAppBar>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>Content</Grid>
            <Grid item>
              <MenuOutlinedIcon
                onClick={() => {
                  setOpenDrawer(!openDrawer);
                }}
                sx={{ cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
      <Offset />
      <StyledDrawer variant="temporary" open={openDrawer} anchor="right">
        <Grid container justifyContent="flex-end">
          <Grid item>
            <CloseOutlinedIcon
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{ color: "#ffffff" }}
            />
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <StyledLink>Home</StyledLink>
          </Grid>
          <Grid item>
            <StyledLink>Portfolio</StyledLink>
          </Grid>
          <Grid item>
            <StyledLink>Contact Me</StyledLink>
          </Grid>
        </Grid>
      </StyledDrawer>
    </Box>
  );
};

export default Navbar;
