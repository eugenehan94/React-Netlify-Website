import { Box } from "@mui/material";

const HeroAnimation = () => {
  return (
    <>
      {/* Blobs */}
      <Box
        sx={{
          borderRadius: "50% 50% 0 0",
          position: "absolute",
          backgroundColor: "#090e10",
          zIndex: "5",
          width: "100%",
          height: "200px",
          left: "0",
          bottom: "0",
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
              height: "50px",
            },
            "50%": {
              height: "100px",
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
              height: "50px",
            },
            "50%": {
              height: "100px",
            },
          },
        }}
      ></Box>
    </>
  );
};

export default HeroAnimation;
