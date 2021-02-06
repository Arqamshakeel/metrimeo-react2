import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import { render } from "react-dom";
import { useMediaQuery } from "react-responsive";

const CustomFooter = () => {
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
      <Footer
        backgroundColor="#404040"
        columns={[
          {
            title: "Company Info",
            items: [
              { title: "About" },
              { title: "Our Products" },
              { title: "Careers" },
              { title: "Terms and conditions" },
              { title: "Privacy and policy" },
              { title: "Security" },
            ],
            url: "https://yuque.com",
            description: "hellosdnfljdashjfldjlf",
            openExternal: true,
          },
          {
            title: "Resources",
            items: [
              { title: "Home" },
              { title: "About" },
              { title: "Our Products" },
              { title: "Login" },
              { title: "Sign up" },
            ],
            url: "https://yuque.com",
            description: "hellosdnfljdashjfldjlf",
            openExternal: true,
          },
          {
            title: "Our Solutions",
            items: [
              { title: "To Cooperatives" },
              { title: "To Landlords" },
              { title: "To Businesses" },
              { title: "To Individuals" },
            ],
            url: "https://yuque.com",
            description: "hellosdnfljdashjfldjlf",
            openExternal: true,
          },
        ]}
        // bottom={<div style={{ backgroundColor: "white" }}>hello</div>}
      />
    </>
  );
};
export default CustomFooter;
