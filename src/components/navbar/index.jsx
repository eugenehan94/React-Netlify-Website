import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

// Components
import AppBarComponent from "./appBar";
import RightDrawer from "./rightDrawer";

// https://mui.com/material-ui/react-app-bar/#fixed-placement
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box>
      <AppBarComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Offset />
      <RightDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Box>
  );
};

export default Navbar;
