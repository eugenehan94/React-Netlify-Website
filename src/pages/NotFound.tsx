import { Box, Button, Typography, Grid } from "@mui/material";
import Navbar from "../components/_shared/navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const NotFound = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ backgroundColor: "#090e10", height: "100vh" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#ffffff", fontSize: "150px" }}>
            404
          </Typography>
          <Typography sx={{ color: "#ffffff", fontSize: "32px" }}>
            Page Not Found
          </Typography>
          <Button
            href="/"
            variant="contained"
            sx={{ margin: "3rem 0" }}
            endIcon={<ArrowForwardIcon />}
          >
            Back Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
