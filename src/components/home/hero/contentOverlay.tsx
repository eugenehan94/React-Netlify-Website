import { Box, Link, Typography } from "@mui/material";
import handWaveIcon from "../../../data/svg/handWaveIcon.svg";
import scrollIcon from "../../../data/svg/scrollIcon.svg";

const ContentOverlay = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          right: "0",
          left: "0",
          top: "80px",
          marginRight: "auto",
          marginLeft: "auto",
          zIndex: "11",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: "#ffffff", whiteSpace: "nowrap" }}
        >
          <span className="imageWrapper">
            <img src={handWaveIcon} alt="hand waving" />
          </span>
          <span className="textSpan middle">Hi!</span>
          <span className="textSpan">There</span>
        </Typography>
      </Box>
      <>
        <Box>
          <Link href="#about-me">
            <span></span>
            <Box
              sx={{
                "@keyframes slideDown": {
                  "0%": {
                    transform: " translateY(-10px)",
                  },
                  "45%": {
                    transform: " translateY(13px)",
                  },
                  "46%": {
                    transform: " translateY(-10px)",
                  },
                  "100%": {
                    transform: " translateY(-10px)",
                  },
                  "65%": {
                    transform: " translateY(-10px)",
                  },
                },
                position: "absolute",
                left: "0",
                right: "0",
                top: "253px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "30px",
                height: "45px",
                zIndex: "11",
                animation: "slideDown 2.4s cubic-bezier(0,0,.725,1) infinite",
              }}
            >
              <img
                src={scrollIcon}
                alt="scroll icon"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                "@keyframes trackBallSlide": {
                  "0%": {
                    opacity: "1",
                    transform: "scaleY(1) translateY(-10px)",
                  },
                  "45%": {
                    opacity: "0",
                    transform: "scaleY(.5) translateY(13px)",
                  },
                  "46%": {
                    opacity: "0",
                    transform: "scaleY(1) translateY(-10px)",
                  },
                  "100%": {
                    opacity: "1",
                    transform: "scaleY(1) translateY(-10px)",
                  },
                  "65%": {
                    opacity: "1",
                    transform: "scaleY(1) translateY(-10px)",
                  },
                },

                backgroundColor: "#ffffff",
                position: "absolute",
                left: "-5px",
                right: "0",
                marginLeft: "auto",
                marginRight: "auto",
                top: "268px",
                width: "2px",
                height: "6px",
                borderRadius: "10px",
                zIndex: "11",
                transition: "background-color .55s cubic-bezier(.5,.1,.07,1)",
                animation:
                  "trackBallSlide 2.4s cubic-bezier(0,0,.725,1) infinite",
              }}
            ></Box>
          </Link>
        </Box>
      </>
    </Box>
  );
};

export default ContentOverlay;
