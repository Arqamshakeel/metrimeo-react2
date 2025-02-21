import React from "react";
import Header from "./header";
import Nav from "./nav";
import Sec1 from "./section-1";
import Sec2 from "./section-2";
import Sec3 from "./section-3";
import Carousel from "./carousel";
import Sec5 from "./section-5";
import Sec6 from "./section-6";
import CustomNav from "./CustomNav";
import CustomFooter from "./footer/CustomFooter";
import ContactUsCard from "./pageComponents/ContactUsCard";
import { useMediaQuery } from "react-responsive";
import HrOrangeLine from "./hrOrangeLine/HrOrangeLine";
const LandingComponent = () => {
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app-wrapper">
      {/* <CustomNav /> */}
      <Header />
      {/* <Sec1 /> */}
      <Sec2
        imgPos={"left"}
        img={"./wp-content/uploads/2020/10/1969-1536x1024.jpg"}
        heading={"work hard so you can benefit from useful credit analytics"}
        headingStart={"We"}
        desc={
          "When you partner with us, you’re trusting us with your future. So we take that responsibility to heart. We use a variety of proprietary tools to make sense of credit data you can trust. We help you see beyond the numbers and keep your information safe."
        }
      />
      <HrOrangeLine />

      {isTabletOrMobileDevice ? (
        <Sec2
          imgPos={"left"}
          img={"./wp-content/uploads/2020/10/3256-1024x683.jpg"}
          heading={"help you make better decisions for you and your business"}
          headingStart={"We"}
          desc={
            "Whether you are trying to get more opportunities coming your way, or choose a partner you can trust for your business, we can help. We provide you with the confidence you need to growth financially."
          }
        />
      ) : (
        <Sec2
          imgPos={"right"}
          img={"./wp-content/uploads/2020/10/3256-1024x683.jpg"}
          heading={"help you make better decisions for you and your business"}
          headingStart={"We"}
          desc={
            "Whether you are trying to get more opportunities coming your way, or choose a partner you can trust for your business, we can help. We provide you with the confidence you need to growth financially."
          }
        />
      )}

      <HrOrangeLine />
      <Sec2
        imgPos={"left"}
        img={
          "./wp-content/uploads/elementor/thumbs/339793-PA78VA-567-scaled-oxauzfda34j0ft58n83wckg1bvzlbize2m4a8pe0tc.jpg"
        }
        heading={"ensure you connect with the best resources and partners"}
        headingStart={"We"}
        desc={
          "Preserving what you have acquired and while still pursuing growth  can be a challenge. Whether you are an individual or a business, your best resource is people: “Your net worth is your network”. We ensure your best interest is aligned with partners you are recruiting, working for, or teaming up with."
        }
      />

      {/* <Sec3 /> */}
      <Carousel />
      {/* <Sec5 /> */}
      {/* <Sec6 /> */}
      <ContactUsCard
        image={"./wp-content/uploads/2020/10/3234-1024x683.jpg"}
        desc={
          "Are you ready to start advancing your pathway? It’s free and we promise you won’t be disappointed."
        }
        heading={"Let's Get Started"}
        superLative={""}
        subHeading={""}
        backgroundColor={"#31587d"}
        buttonColor={"#FFFF"}
        buttonTextColor={"blue"}
        height="400px"
        buttonText={"Sign up free today!"}
        loggedin={"/dashboard"}
        notloggedin={"/register"}
      />

      <style jsx global>{`
        .app-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 14px;
          --brand-color: #186eb8;
          --gray-color-1: #777;
          --gray-color-2: #555;
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        .jumbo-bg {
          background: transparent;
          background-image: url(https://www.99images.com/download-image/394008/1920x1080);
          background-repeat: no-repeat;
          background-position: top;
          height: 100%;
        }
        @media (min-width: 1024px) {
          .jumbo-bg {
            background-attachment: fixed;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingComponent;
