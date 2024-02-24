import { Box, Link, Typography, styled } from "@mui/material";
import handWaveIcon from "../../../data/svg/handWaveIcon.svg";
import scrollIcon from "../../../data/svg/scrollIcon.svg";

const StyledTextContainer = styled(Box)(() => ({
  position: "absolute",
  right: "0",
  left: "0",
  top: "80px",
  marginRight: "auto",
  marginLeft: "auto",
  zIndex: "11",
}));

const StyledTextTypography = styled(Typography)(() => ({
  color: "#ffffff",
  whiteSpace: "nowrap",
}));

const StyledLink = styled(Link)(() => ({
  position: "absolute",
  left: "-5px",
  right: "0",
  top: "250px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50px",
  height: "50px",
  zIndex: "20",
  "&: focus": {
    outline: "1px solid #94a6b8",
    borderRadius: "10px",
  },
  animation: "slideDown 2.4s cubic-bezier(0,0,.625,1) infinite",
}));

const StyledScreenReaderContainer = styled(Box)(() => ({
  border: "0",
  clip: "rect(1px, 1px , 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  wordWrap: "normal",
}));

const StyledMouseOuterContainer = styled(Box)(() => ({
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
}));

const StyledMouseScrollWheel = styled(Box)(() => ({
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
  top: "270px",
  width: "2px",
  height: "6px",
  borderRadius: "10px",
  zIndex: "11",
  transition: "background-color .55s cubic-bezier(.5,.1,.07,1)",
  animation: "trackBallSlide 2.4s cubic-bezier(0,0,.725,1) infinite",
}));

const ContentOverlay = () => {
  return (
    <Box>
      <StyledTextContainer>
        <StyledTextTypography textAlign="center">
          <span className="imageWrapper">
            <img src={handWaveIcon} alt="hand waving" />
          </span>
          <span className="textSpan middle">Hi!</span>
          <span className="textSpan">There</span>
        </StyledTextTypography>
      </StyledTextContainer>
      <>
        <Box>
          <StyledLink href="#about-me"></StyledLink>
          {/* Screen reader text */}
          <StyledScreenReaderContainer>
            Navigate to the next section
          </StyledScreenReaderContainer>
          <StyledMouseOuterContainer>
            <img
              src={scrollIcon}
              alt="scroll icon"
              style={{ width: "100%", height: "100%" }}
            />
          </StyledMouseOuterContainer>
          <StyledMouseScrollWheel></StyledMouseScrollWheel>
        </Box>
      </>
    </Box>
  );
};

export default ContentOverlay;
