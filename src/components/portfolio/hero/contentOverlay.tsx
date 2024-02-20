import { Box, Typography } from "@mui/material";

const ContentOverlay = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "0",
        left: "0",
        top: "30%",
        marginRight: "auto",
        marginLeft: "auto",
        zIndex: "11",
      }}
    >
      <Typography
        textAlign="center"
        sx={{ color: "#ffffff", whiteSpace: "nowrap" }}
      >
        <span className="cardTextSpan middle">My</span>
        <span className="cardTextSpan">Portfolio</span>
      </Typography>
    </Box>
  );
};

export default ContentOverlay;
