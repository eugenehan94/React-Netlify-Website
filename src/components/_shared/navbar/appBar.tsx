import { AppBar, Toolbar, Grid, styled } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "./homeIcon";

import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#090e10",
}));

const StyledMenuOutlinedIcon = styled(MenuOutlinedIcon)(() => ({
  cursor: "pointer",
  color: "#94a6b8",
}));

interface AppBarComponentTypes {
  openDrawer: boolean;
  setOpenDrawer: Function;
}

const AppBarComponent = (props: AppBarComponentTypes) => {
  const { openDrawer, setOpenDrawer } = props;

  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link reloadDocument to="/">
              <HomeIcon />
            </Link>
          </Grid>
          <Grid item>
            <StyledMenuOutlinedIcon
              aria-label="Open navigation menu"
              tabIndex={0}
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setOpenDrawer(!openDrawer);
                }
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarComponent;
