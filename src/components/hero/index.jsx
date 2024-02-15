import { Box, Typography } from "@mui/material";
import handWaveIcon from "../../data/svg/handWaveIcon.svg";
import scrollIcon from "../../data/svg/scrollIcon.svg";
const Hero = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        padding: "0",
        margin: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          background: " #0072e5",
          backgroundSize: "200% 200%",
          overflow: "hidden",
        }}
      >
        {/* Blobs */}
        <Box
          sx={{
            borderRadius: "50% 50% 0 0",
            position: "absolute",
            backgroundColor: "#090e10",
            zIndex: "5",
            width: "100%",
            height: "300px",
            left: "-1px",
            bottom: "-15%",
            overflow: "hidden",
            border: "none",
            animation:
              "wobble-one 5s ease-in-out alternate infinite, blob-one ease-in-out 20s infinite            ",
            "@keyframes wobble-one": {
              "50%": {
                borderRadius: "30% 78% 0 0 ",
              },
              "100%": {
                borderRadius: "80% 30% 0 0",
              },
            },
            "@keyframes blob-one": {
              "0% 100%": {
                // transform: "translatey(0)",
                height: "100px",
              },
              "50%": {
                // transform: "translatey(-20%)",
                height: "280px",
              },
            },
          }}
        ></Box>
        {/* Blobs 2 */}
        <Box
          sx={{
            borderRadius: "0 0 50% 50%",
            position: "absolute",
            backgroundColor: "#090e10",
            zIndex: "5",
            width: "100%",
            height: "300px",
            right: "0",
            top: "0%",
            overflow: "hidden",
            border: "none",
            animation:
              "wobble-two 5s ease-in-out alternate infinite, blob-two ease-in-out 20s infinite",
            "@keyframes wobble-two": {
              "50%": {
                borderRadius: "0 0 22% 70% ",
              },
              "100%": {
                borderRadius: "0 0 75% 36% ",
              },
            },
            "@keyframes blob-two": {
              "0%, 100%": {
                // transform: "translatey(-100%)",
                height: "100px",
              },
              "50%": {
                // transform: "translatey(0)",
                height: "280px",
              },
            },
          }}
        ></Box>
      </Box>
      {/*  */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "40%",
          transform: "translate(-40%, -20%)",
          width: "100%",
          zIndex: "11",
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
              <a href="#">
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
