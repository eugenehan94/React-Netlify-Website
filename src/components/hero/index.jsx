import { Box, Typography } from "@mui/material";
import handWaveIcon from "../../data/svg/handWaveIcon.svg";
import scrollIcon from "../../data/svg/scrollIcon.svg";
const Hero = () => {
  return (
    <Box
      sx={{ height: "500px", padding: "0", margin: "0", position: "relative" }}
    >
      <Box
        sx={{
          "@keyframes gradient": {
            "0%": {
              backgroundPosition: "0% 50%",
            },
            "50%": {
              backgroundPosition: "100% 50%",
            },
            "100%": {
              backgroundPosition: "0% 50%",
            },
          },

          height: "100%",
          width: "100%",
          animation: "gradient 15s ease infinite",
          background:
            "linear-gradient(to left top, #0072e5, #1d1b26, transparent 30%, #1d1b26), linear-gradient(to right bottom, #0072e5 20%, #1d1b26)",
          backgroundSize: "200% 200%",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "40%",
          transform: "translate(-40%, -20%)",
          width: "100%",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Box sx={{ width: "70px", height: "70px" }}>
              <img src={handWaveIcon} alt="hand waving" />
            </Box>
            <Typography sx={{ fontSize: "60px", color: "#ffffff" }}>
              Hi! There
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <a>
                <span></span>
                <Box
                  sx={{
                    "@keyframes slideDown": {
                      "0%": {
                        transform: " translateY(-10px)",
                      },
                      "45%": {
                        transform: " translateY(13px)",
                      },
                      "46%": {
                        transform: " translateY(-10px)",
                      },
                      "100%": {
                        transform: " translateY(-10px)",
                      },
                      "65%": {
                        transform: " translateY(-10px)",
                      },
                    },
                    width: "30px",
                    height: "45px",
                    animation:
                      "slideDown 2.4s cubic-bezier(0,0,.725,1) infinite",
                  }}
                >
                  <img
                    src={scrollIcon}
                    alt="scroll icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box
                  sx={{
                    "@keyframes trackBallSlide": {
                      "0%": {
                        opacity: "1",
                        transform: "scaleY(1) translateY(-10px)",
                      },
                      "45%": {
                        opacity: "0",
                        transform: "scaleY(.5) translateY(13px)",
                      },
                      "46%": {
                        opacity: "0",
                        transform: "scaleY(1) translateY(-10px)",
                      },
                      "100%": {
                        opacity: "1",
                        transform: "scaleY(1) translateY(-10px)",
                      },
                      "65%": {
                        opacity: "1",
                        transform: "scaleY(1) translateY(-10px)",
                      },
                    },

                    backgroundColor: "#ffffff",
                    position: "absolute",
                    left: "49.5%",
                    top: "112px",
                    width: "2px",
                    height: "6px",
                    borderRadius: "10px",
                    transition:
                      "background-color .55s cubic-bezier(.5,.1,.07,1)",
                    animation:
                      "trackBallSlide 2.4s cubic-bezier(0,0,.725,1) infinite",
                  }}
                ></Box>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
