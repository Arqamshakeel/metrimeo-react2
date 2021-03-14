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
              { title: "About", url: "/about" },
              { title: "Our Products", url: "/our-products" },
              { title: "Careers", url: "/careers" },
              { title: "Terms and conditions", url: "/terms-and-conditions" },
              { title: "Privacy and policy", url: "/privacy-policy" },
              { title: "Security Practices", url: "/security-practices" },
            ],
            url: "https://yuque.com",
            description: "hellosdnfljdashjfldjlf",
            openExternal: true,
          },
          {
            title: "Resources",
            items: [
              { title: "Home", url: "/" },
              { title: "About", url: "/about" },
              { title: "Our Products", url: "/our-products" },
              { title: "Login", url: "/login" },
              { title: "Sign up", url: "/register" },
            ],
            url: "https://yuque.com",
            description: "hellosdnfljdashjfldjlf",
            openExternal: true,
          },
          {
            title: "Our Solutions",
            items: [
              { title: "To Cooperatives", url: "/for-cooperatives" },
              { title: "To Landlords", url: "/for-landlords" },
              { title: "To Businesses", url: "/for-businesses" },
              { title: "To Individuals", url: "/for-individuals" },
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
