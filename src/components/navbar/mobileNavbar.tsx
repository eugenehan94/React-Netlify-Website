import React, { useState } from "react";
import { ColorModeContext } from "../../App";
// Material UI Components
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Switch,
  Stack,
  Typography,
} from "@mui/material";
// Material UI Icons
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const MobileNavbar = () => {
  const [openMenu, setMenu] = useState(false);
  const colorMode = React.useContext(ColorModeContext);
  const handleClose = () => {
    setMenu(false);
  };

  const handleChange = () => {
    if (colorMode.mode === "light") {
      colorMode.toggleColorMode("dark");
    } else {
      colorMode.toggleColorMode("light");
    }
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => {
          setMenu(!openMenu);
        }}
        sx={{ borderColor: "#e0e3e7" }}
      >
        {openMenu ? <CloseIcon /> : <DragHandleIcon />}
      </Button>

      {openMenu ? (
        <Box
          sx={{
            position: "absolute",
            top: "5rem",
            left: "0.5rem",
            zIndex: "99",
            backgroundColor: "#fff",
            width: "97%",
            borderTop: "1px solid #6f7e8c55",
          }}
        >
          <List sx={{ padding: "1rem" }}>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#aboutMe");
                anchor!.scrollIntoView({
                  behavior: "smooth",
                });
                handleClose();
              }}
              sx={{
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#e7ebf0",
                  cursor: "pointer",
                },
              }}
            >
              <Typography sx={{ color: "#3e5060", fontWeight: "700" }}>
                About
              </Typography>
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#works");
                anchor!.scrollIntoView({
                  behavior: "smooth",
                });
                handleClose();
              }}
              sx={{
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#e7ebf0",
                  cursor: "pointer",
                },
              }}
            >
              <Typography sx={{ color: "#3e5060", fontWeight: "700" }}>
                Works
              </Typography>
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#contact");
                anchor!.scrollIntoView({
                  behavior: "smooth",
                });
                handleClose();
              }}
              sx={{
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#e7ebf0",
                  cursor: "pointer",
                },
              }}
            >
              <Typography sx={{ color: "#3e5060", fontWeight: "700" }}>
                Contact
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ color: "#3e5060", fontWeight: "700" }}>
                  Dark Mode
                </Typography>
                <Switch
                  checked={colorMode.mode === "dark" ? true : false}
                  onChange={handleChange}
                  // Since label is not used - must include inputProps with aria-label, as per docs
                  inputProps={{ 'aria-label': 'Dark Mode Switch' }}
                />
              </Stack>
            </ListItem>
          </List>
        </Box>
      ) : null}
    </Box>
  );
};

export default MobileNavbar;
