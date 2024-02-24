import { Box, Card, styled } from "@mui/material";

import BlobAnimation from "../../_shared/blobAnimation";
import CardContentOverlay from "../../_shared/cardContentOverlay";

import PhoneIcon from "../../../data/svg/phoneIcon.svg";

const StyledCard = styled(Card)(() => ({
  position: "relative",
  background: " #0072e5",
  height: "500px",
  zIndex: "10",
}));

const StyledContainer = styled(Box)(() => ({
  backgroundColor: "#090e10",
  height: "500px",
  width: "100%",
  padding: "1rem",
}));

const Hero = () => {
  let backgroundColor = "#090e10";
  let firstText = "Contact";
  let secondText = "Me";
  return (
    <StyledContainer>
      <StyledCard>
        <BlobAnimation backgroundColor={backgroundColor} />
        <CardContentOverlay
          firstText={firstText}
          secondText={secondText}
          image={PhoneIcon}
        />
      </StyledCard>
    </StyledContainer>
  );
};

export default Hero;
