import { Box, Typography, styled } from "@mui/material";

interface CardContentOverlayPropTypes {
  firstText: string;
  secondText: string;
  image?: string;
}

const StyledContainer = styled(Box)(() => ({
  position: "absolute",
  right: "0",
  left: "0",
  top: "30%",
  marginRight: "auto",
  marginLeft: "auto",
  zIndex: "11",
}));

const StyledTypography = styled(Typography)(() => ({
  color: "#ffffff",
  whiteSpace: "nowrap",
}));

const CardContentOverlay = (props: CardContentOverlayPropTypes) => {
  const { firstText, secondText, image } = props;
  return (
    <StyledContainer>
      <StyledTypography textAlign="center">
        {image ? (
          <span className="cardImageWrapper">
            <img
              src={image}
              alt="icon"
              style={{ transform: "translateY(7px)" }}
            />
          </span>
        ) : null}

        <span className="cardTextSpan middle">{firstText}</span>
        <span className="cardTextSpan">{secondText}</span>
      </StyledTypography>
    </StyledContainer>
  );
};

export default CardContentOverlay;
