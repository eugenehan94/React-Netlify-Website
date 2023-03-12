import React, { useEffect } from "react";
// Material UI Components
import { Box } from "@mui/material";
// Diamond Side
import DiamondTopLeft from "./diamondTopLeft";
import DiamondTopRight from "./diamondTopRight";
import DiamondBottomLeft from "./diamondBottomLeft";
import DiamondBottomRight from "./diamondBottomRight";
// The Letter E
import LetterETop from "./letterETop";
import LetterEBottom from "./letterEBottom";

import { useInView } from "react-intersection-observer";

interface LoadingProps {
  setLoading: Function;
}

const Loading = (props: LoadingProps) => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  const { setLoading } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        height: "97vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
          textAlign: "center",
        }}
      >
        {/* Diamond - left top */}
        <DiamondTopLeft inView={inView} />
        {/* Diamond - right top */}
        <DiamondTopRight inView={inView} />
        {/* Diamond - left bottom*/}
        <DiamondBottomLeft inView={inView} />
        {/* Diamond - right bottom*/}
        <DiamondBottomRight inView={inView} />
        {/* Letter E - top portion */}
        <LetterETop inView={inView} />
        {/* Letter E - bottom portion */}
        <LetterEBottom inView={inView} />
      </Box>
    </Box>
  );
};

export default Loading;
