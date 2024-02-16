import { Box, Drawer, Grid, styled } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { NavLink } from "react-router-dom";

const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    height: "100%",
    padding: "0.8rem 1.9rem",
    backgroundColor: "#090e10",
    cursor: "pointer",
  },
}));
const StyledCloseOutlinedIcon = styled(CloseOutlinedIcon)(() => ({
  color: "#ffffff",
}));

interface RightDrawerTypes {
  openDrawer: boolean;
  setOpenDrawer: Function;
}

const RightDrawer = (props: RightDrawerTypes) => {
  const { openDrawer, setOpenDrawer } = props;
  return (
    <StyledDrawer variant="temporary" open={openDrawer} anchor="right">
      <Grid container justifyContent="flex-end">
        <Grid item>
          <StyledCloseOutlinedIcon onClick={() => setOpenDrawer(!openDrawer)} />
        </Grid>
      </Grid>
      <Box sx={{ height: "100%", padding: "0 2rem" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container direction="column">
            <Grid item>
              <NavLink
                to="/"
                exact={true}
                className="routerLink"
                activeClassName="routerLinkActive"
              >
                Home
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink
                to="/my-portfolio"
                className="routerLink"
                activeClassName="routerLinkActive"
              >
                Portfolio
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink
                to="/contact-me"
                className="routerLink"
                activeClassName="routerLinkActive"
              >
                Contact Me
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyledDrawer>
  );
};

export default RightDrawer;
