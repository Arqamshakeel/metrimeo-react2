import React from "react";
import { useMediaQuery } from "react-responsive";
const HrOrangeLine = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <>
      <hr
        style={{
          // border: "solid #e05414",
          borderColor: "#e05414",
          margin: isDesktopOrLaptop
            ? "20px 185px 0px 185px"
            : "20px 20px 0px 20px",
          // height: "1px",
        }}
      />
    </>
  );
};

export default HrOrangeLine;
