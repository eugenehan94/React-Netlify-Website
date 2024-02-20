import { Box, Typography } from "@mui/material";
import PhoneIcon from "../../../data/svg/phoneIcon.svg";
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
        <span className="cardImageWrapper">
          <img
            src={PhoneIcon}
            alt="Mobile phone"
            style={{ transform: "translateY(7px)" }}
          />
        </span>
        <span className="cardTextSpan middle">Contact</span>
        <span className="cardTextSpan">Me</span>
      </Typography>
    </Box>
  );
};

export default ContentOverlay;
