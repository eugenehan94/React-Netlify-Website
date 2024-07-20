import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  styled,
} from "@mui/material";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#090e10",
  padding: "3rem 1rem",
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 3rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "3rem 4rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "6rem 4rem",
  },
}));

const StyledTitleTypography = styled(Typography)(() => ({
  color: "#0072e5",
  fontSize: "50px",
  marginBottom: "2rem",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#0e1519",
  borderRadius: "10px",
  border: "1px solid #131B20",
  boxShadow: "none",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 3rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem 0.5rem",
  },
}));

const StyledCardTitleTypography = styled(Typography)(() => ({
  fontSize: "40px",
  wordWrap: "break-word",
}));

const StyledCardParagraphyTypography = styled(Typography)(() => ({
  color: "#94a6b8",
  fontSize: "18px",
}));

const WhatIAmBestAt = () => {
  return (
    <StyledContainer>
      <StyledTitleTypography textAlign="center">
        🌟What I Am Best At!
      </StyledTitleTypography>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={4}>
          <StyledCard>
            <CardContent>
              <TerminalRoundedIcon sx={{ color: "#ffffff" }} fontSize="large" />
              <StyledCardTitleTypography color="secondary" gutterBottom>
                Developing
              </StyledCardTitleTypography>
              <StyledCardParagraphyTypography>
                From frontend to backend development and problem-solving to
                testing. I strive to deliever working solutions that enhance
                user satisfaction and align with the client's brand identity.
              </StyledCardParagraphyTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} lg={4}>
          <StyledCard>
            <CardContent>
              <GroupsRoundedIcon sx={{ color: "#ffffff" }} fontSize="large" />
              <StyledCardTitleTypography color="secondary" gutterBottom>
                Agile Team
              </StyledCardTitleTypography>
              <StyledCardParagraphyTypography>
                From small to large projects with great objectives and
                challenges. I bring effective connection skills to unite talents
                and ensure goals are achieved.
              </StyledCardParagraphyTypography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} lg={4}>
          <StyledCard>
            <CardContent>
              <ChatBubbleOutlineRoundedIcon
                sx={{ color: "#ffffff" }}
                fontSize="large"
              />
              <StyledCardTitleTypography color="secondary" gutterBottom>
                Communication
              </StyledCardTitleTypography>
              <StyledCardParagraphyTypography>
                From science to technology and financial to business. I leverage
                my effective communication approach to optimized audience
                comprehension.
              </StyledCardParagraphyTypography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default WhatIAmBestAt;
