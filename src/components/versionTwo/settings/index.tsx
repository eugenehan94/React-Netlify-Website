import React, { useState } from "react";
// import { ColorModeContext } from "../../../App";
// Material UI Components
import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
// Material UI Icon
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Settings = () => {
  const [state, setState] = useState(false);
  // const colorMode = React.useContext(ColorModeContext);
  return (
    <Box>
      <SettingsOutlinedIcon onClick={() => setState(true)} />
      <Drawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "360px",
            borderRadius: "10px 0 0 10px",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "16px" }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Settings</Typography>
          <CloseIcon
            onClick={() => setState(false)}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        </Stack>
        <Divider />
        <Box sx={{ paddingLeft: "16px", paddingRight: "16px" }}>
          <Typography sx={{ padding: "10px 0" }}>Mode</Typography>
          <Stack direction="row" spacing={1}>
            <Button
            // variant={colorMode.mode === "light" ? "contained" : "outlined"}
            // onClick={() => colorMode.toggleColorMode("light")}
            >
              <LightModeIcon /> Light
            </Button>
            <Button
            // variant={colorMode.mode === "dark" ? "contained" : "outlined"}
            // onClick={() => colorMode.toggleColorMode("dark")}
            >
              <DarkModeOutlinedIcon /> Dark
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Settings;
