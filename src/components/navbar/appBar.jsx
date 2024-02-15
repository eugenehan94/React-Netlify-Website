import { AppBar, Toolbar, Grid, styled } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import HomeIcon from "./homeIcon";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#090e10",
}));

const StyledMenuOutlinedIcon = styled(MenuOutlinedIcon)(() => ({
  cursor: "pointer",
}));

const AppBarComponent = (props) => {
  const { openDrawer, setOpenDrawer } = props;
  return (
    <StyledAppBar>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <HomeIcon />
          </Grid>
          <Grid item>
            <StyledMenuOutlinedIcon
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarComponent;
