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

  const navbarOptions = [
    {
      linkTo: "/",
      linkName: "Home",
    },
    {
      linkTo: "/my-portfolio",
      linkName: "My Portfolio",
    },
    {
      linkTo: "/contact-me",
      linkName: "Contact Me",
    },
  ];

  return (
    <StyledDrawer variant="temporary" open={openDrawer} anchor="right">
      <Grid container justifyContent="flex-end">
        <Grid item>
          <StyledCloseOutlinedIcon
            tabIndex={0}
            onClick={() => setOpenDrawer(!openDrawer)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setOpenDrawer(!openDrawer);
              }
            }}
            aria-label="Close navigation menu"
          />
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
            {navbarOptions.map((navbarOption) => (
              <Grid item>
                <NavLink
                  to={navbarOption.linkTo}
                  className={({ isActive }) =>
                    "routerLink " + (isActive ? "routerLinkActive" : "")
                  }
                >
                  {navbarOption.linkName}
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </StyledDrawer>
  );
};

export default RightDrawer;
