import { Box, styled } from "@mui/material";

import HeroAnimation from "./heroAnimation";
import ContentOverlay from "./contentOverlay";

const StyledContainer = styled(Box)(() => ({
  height: "550px",
  width: "100%",
  padding: "0",
  margin: "0",
  position: "relative",
  overflow: "hidden",
  background: " #0072e5",
}));

const Hero = () => {
  return (
    <StyledContainer>
      <HeroAnimation />
      <ContentOverlay />
    </StyledContainer>
  );
};
export default Hero;
