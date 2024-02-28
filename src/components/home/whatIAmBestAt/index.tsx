import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  styled,
} from "@mui/material";

import TerminalRoundedIcon from "../../../data/svg/terminalRoundedIcon.svg";
import GroupsRoundedIcon from "../../../data/svg/groupsRoundedIcon.svg";
import ChatBubbleOutlineRoundedIcon from "../../../data/svg/chatBubbleOutlineRoundedIcon.svg";

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
  const tileContents = [
    {
      iconSrc: TerminalRoundedIcon,
      iconAlt: "computer terminal",
      title: "Developing",
      description:
        "From frontend to backend development and problem-solving to testing. I strive to deliever working solutions that enhance user satisfaction and align with the client's brand identity.",
    },
    {
      iconSrc: GroupsRoundedIcon,
      iconAlt: "group of people",
      title: "Teamwork",
      description:
        "From small to large projects with great objectives and challenges. I bring effective connection skills to unite talents and ensure goals are achieved.",
    },
    {
      iconSrc: ChatBubbleOutlineRoundedIcon,
      iconAlt: "chat bubble",
      title: "Communication",
      description:
        "From science to technology and financial to business. I leverage my effective communication approach to optimized audience comprehension.",
    },
  ];

  return (
    <StyledContainer>
      <StyledTitleTypography textAlign="center">
        🌟What I Am Best At!
      </StyledTitleTypography>
      <Grid container spacing={5}>
        {tileContents.map((tileContent) => (
          <Grid item xs={12} lg={4}>
            <StyledCard>
              <CardContent>
                <img
                  src={`${tileContent.iconSrc}`}
                  alt={tileContent.iconAlt}
                  aria-hidden="true"
                  style={{ width: "35px", height: "35px" }}
                />
                <StyledCardTitleTypography color="secondary" gutterBottom>
                  {tileContent.title}
                </StyledCardTitleTypography>
                <StyledCardParagraphyTypography>
                  {tileContent.description}
                </StyledCardParagraphyTypography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default WhatIAmBestAt;
