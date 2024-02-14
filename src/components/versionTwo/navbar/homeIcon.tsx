import React from "react";
// Material UI Icons
import MatHomeIcon from "@mui/icons-material/Home";

interface HomeIconProps {
  setLoading: Function;
}
const HomeIcon = (props: HomeIconProps) => {
  // const { setLoading } = props;
  return (
    <MatHomeIcon
      fontSize="large"
      // onClick={() => setLoading(true)}
      sx={{
        color: "#0072e5",
        "&:hover": {
          cursor: "pointer",
          animation: "Home_Icon 0.5s linear infinite",
          "@keyframes Home_Icon": {
            "0%": {
              transform: "rotate(0)",
            },
            "20%": {
              transform: "rotate(-15deg)",
            },
            "50%": {
              transform: "rotate(0)",
            },
            "75%": {
              transform: "rotate(15deg)",
            },
            "100%": {
              transform: "rotate(0)",
            },
          },
        },
      }}
    />
  );
};

export default HomeIcon;
