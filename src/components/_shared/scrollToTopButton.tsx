import { Box, Fade, Fab, useScrollTrigger, styled } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledFabContainer = styled(Box)(() => ({
  position: "fixed",
  bottom: 16,
  right: 16,
  zIndex: 99,
}));

const ScrollToTopButton = () => {
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Fade in={trigger}>
      <StyledFabContainer onClick={(e) => handleClick(e)} role="presentation">
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </StyledFabContainer>
    </Fade>
  );
};

export default ScrollToTopButton;
