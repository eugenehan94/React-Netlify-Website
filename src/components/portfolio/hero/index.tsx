import { Box, Card, styled } from "@mui/material";

import HeroAnimation from "./heroAnimation";
import ContentOverlay from "./contentOverlay";

const StyledContainer = styled(Box)(() => ({
  backgroundColor: "#090e10",
  height: "500px",
  width: "100%",
  padding: "1rem",
}));

const Hero = () => {
  return (
    <StyledContainer>
      <Card
        sx={{
          position: "relative",
          background: " #0072e5",
          height: "500px",
          zIndex: "10",
        }}
      >
        <HeroAnimation />
        <ContentOverlay />
      </Card>
    </StyledContainer>
  );
};

export default Hero;
