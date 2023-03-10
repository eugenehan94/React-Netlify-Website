import React, { useState, useEffect } from "react";
// Material UI Component
import { Box, Button, Tooltip } from "@mui/material";
// Material UI Icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisiblity = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  return (
    <Box sx={{ position: "fixed", bottom: 10, right: 10, zIndex: "999" }}>
      {isVisible && (
        <Tooltip title="Scroll to top">
          <Button
            onClick={scrollToTop}
            variant="contained"
            sx={{
              backgroundColor: "#c2e0ff",
              color: "#004c99",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              "&:hover": { backgroundColor: "#99ccf3" },
            }}
            size="small"
          >
            <KeyboardArrowUpIcon />
          </Button>
        </Tooltip>
      )}
    </Box>
  );
};

export default ScrollToTop;
