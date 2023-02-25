import React, { useState } from "react";
import { Box, Button, Drawer, List, ListItem, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
const MobileNavbar = () => {
  const [openMenu, setMenu] = useState(false);

  const handleClose = () => {
    setMenu(false);
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
        <DragHandleIcon />
      </Button>

      <Drawer anchor="top" open={openMenu}>
        <Box sx={{ padding: "1.25rem" }}>
          <List>
            <ListItem>
              <CloseIcon />
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#aboutMe");
                anchor!.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <Typography>About</Typography>
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#works");
                anchor!.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <Typography>Works</Typography>
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#contact");
                anchor!.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <Typography>Contact</Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
