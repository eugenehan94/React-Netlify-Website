import { useState } from "react";
import { Box, Link } from "@mui/material";
import { styled } from "@mui/material";

// Components
import AppBarComponent from "./appBar";
import RightDrawer from "./rightDrawer";

const StyledSkipNavLink = styled(Link)(() => ({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0px",
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  whiteSpace: "nowrap",
  border: "0px",
  fontSize: "1rem",
  "&: focus": {
    outline: "1px solid #94a6b8",
    color: "#94a6b8",
    zIndex: "9999",
    width: "auto",
    height: "auto",
    clip: "auto",
    whiteSpace: "normal",
  },
}));

// https://mui.com/material-ui/react-app-bar/#fixed-placement
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const StyledNavSkippedBox = styled(Box)(() => ({
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box id="back-to-top-anchor">
      <StyledSkipNavLink href="#nav-skip" target="_self" tabIndex={0}>
        Skip navigation
      </StyledSkipNavLink>
      <AppBarComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Offset />
      <RightDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <StyledNavSkippedBox id="nav-skip" tabIndex={-1}>
        Navigation skipped
      </StyledNavSkippedBox>
    </Box>
  );
};

export default Navbar;
