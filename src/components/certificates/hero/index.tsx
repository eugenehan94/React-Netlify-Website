import { Box, Card, styled } from "@mui/material";

import BlobAnimation from "../../_shared/blobAnimation";
import CardContentOverlay from "../../_shared/cardContentOverlay";

const StyledContainer = styled(Box)(() => ({
  backgroundColor: "#090e10",
  height: "500px",
  width: "100%",
  padding: "1rem",
}));

const StyledCard = styled(Card)(() => ({
  position: "relative",
  background: " #0072e5",
  height: "500px",
  zIndex: "10",
}));

const Hero = () => {
  let backgroundColor = "#090e10";
  let firstText = "Certificates";
  //   let secondText = "Portfolio";
  return (
    <StyledContainer>
      <StyledCard>
        <BlobAnimation backgroundColor={backgroundColor} />
        <CardContentOverlay firstText={firstText} secondText={""} />
      </StyledCard>
    </StyledContainer>
  );
};

export default Hero;
