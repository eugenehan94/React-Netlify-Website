import { Box, Button, Typography, styled } from "@mui/material";
import Navbar from "../components/_shared/navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#090e10",
  height: "100%",
  width: "100%",
}));

const StyledContentContainer = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledTitleTypography = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "150px",
}));

const StyledParagraphyTypography = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "32px",
}));

const NotFound = () => {
  return (
    <StyledContainer>
      <Navbar />
      <Box sx={{ height: "100vh" }}>
        <StyledContentContainer>
          <StyledTitleTypography>404</StyledTitleTypography>
          <StyledParagraphyTypography>
            Page Not Found
          </StyledParagraphyTypography>
          <Button
            href="/"
            variant="contained"
            sx={{ margin: "3rem 0" }}
            endIcon={<ArrowForwardIcon />}
            size="large"
          >
            Back Home
          </Button>
        </StyledContentContainer>
      </Box>
    </StyledContainer>
  );
};

export default NotFound;
