import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CarMediaCard from "../pageComponents/CarMediaCard";
import CarMediaCardRightPic from "../pageComponents/CarMediaCardRightPic";
import ContactUsCard from "../pageComponents/ContactUsCard";
import { useMediaQuery } from "react-responsive";
import ImageFullBackground from "../pageComponents/ImageFullBackground";
import userService from "../../services/UserService";
// import useWindowsSize from "../../services/useWindowsSize";
const ToIndividuals = (props) => {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }
  const size = useWindowSize();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const CustomTag = `sup${props.priority}`;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  console.log(size);

  return (
    <div>
      <div className="image">
        <Grid container justify={isTabletOrMobile ? "flex-start" : null}>
          {/* <Grid item lg={1} md={1} sm={7} xs={12}></Grid> */}
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xs={10}
            style={{
              marginLeft: isTabletOrMobile ? "7px" : "0px",
            }}
          >
            <div
              className="box"
              style={{
                width:
                  size.width > 1271
                    ? "350px"
                    : size.width < 1271 && size.width > 700
                    ? "350px"
                    : isTabletOrMobile
                    ? null
                    : null,
                marginLeft: isTabletOrMobile ? "0px" : "15%",
              }}
            >
              <div className="box-margin">
                <div className="heading">Individuals</div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>
                <div className="decs">
                  Numbers do matter for people. Metrimeo is helping individuals
                  explore their future.
                </div>
                <div className="intro-button">
                  <a
                    href=""
                    onClick={() => {
                      if (userService.getloggedinuser()) {
                        props.history.push("/dashboard");
                      } else {
                        props.history.push("/register");
                      }
                    }}
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    Explore yours!
                  </a>
                </div>
              </div>
              <div></div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("./wp-content/uploads/2020/11/5846-1-scaled.jpg");

            width: 100%;
            height: 600px;
            max-height: 1000px;
            //   background-size: 100% auto;
            // background-size: contain;
            background-size: ${size.width < 1346 && size.width > 1200
              ? "cover"
              : isTabletOrMobile
              ? "300% 100%"
              : "cover"};

            background-repeat: no-repeat;

            // background-position: center center;
            background-position: ${isTabletOrMobile
              ? "right 35% bottom 78%"
              : "center center"};
            max-height: 1000px;
          }
          .top-div {
          }
          .box {
            // margin-right: 20px;
            min-height: 300px;
            // width: 400px;
            margin-top: 30%;
            border: 1px solid rgba(255, 255, 255, 0.5);
            background-color: #ffff;
            // opacity: 0.7;
            background: rgba(255, 255, 255, 0.9);
          }
          .box .heading {
            font-style: normal;

            line-height: 1.1em;
            font-size: 26px;
            font-family: Helvetica, sans-serif;
            letter-spacing: 0.5px;
            font-weight: 800;
            opacity: 1;
            color: #636060;
          }
          .box-margin {
            margin: 30px;

            opacity: 1;
          }
          .box .decs {
            font-size: 20px;
            color: black;
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
          }
          .intro-button {
            margin-top: 2.3em;
            margin-bottom: 3em;
            opacity: 1;
          }
          .intro-button a {
            padding: 0.65em 2.6em;
            border-radius: 20px;
            color: white;

            background: #186eb8;
            transition: all 0.5s;
            opacity: 1;
          }
          .intro-button a:hover {
            background-color: #186eb8;
            color: white;
            opacity: 1;
          }
        `}</style>
      </div>
      <CarMediaCard
        image={
          "./wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
        }
        heading={"Scoreo Basic"}
        superLative={"TM"}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}
        desc={[
          "We build and maintain trust among individuals and businesses to promote progress for everyone in the society. Scoreo Basic",
          <sup>TM</sup>,
          " is a value indicator that measures how financially trustworthy you are at any point of time. It allows you to access unique financing opportunities by tracking your creditworthiness.",
        ]}
        subHeading={"Consumer Credit Score"}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Apply now!"}
        loggedin={"/dashboard"}
        notloggedin={"/register"}
      />

      <CarMediaCardRightPic
        image={"./wp-content/uploads/2020/12/235-removebg-preview1.png"}
        desc={[
          "Scoreo Basic",
          <sup>TM</sup>,
          " is just the beginning! In addition, Metrimeo offers Scoreo Premium",
          <sup>TM</sup>,
          ", which is taking it one step further. Our credit reporting product includes everything else Scoreo Basic",
          <sup>TM</sup>,
          " has to offer, plus a detailed report showing your loans repayment history. This gives lenders the complete confidence they need to issue loans to you and your business potentially.",
        ]}
        heading={"Scoreo Premium"}
        superLative={"TM"}
        subHeading={"Consumer Credit Report"}
        backgroundColor={"#186EB8"}
        buttonColor={"#ffff"}
        buttonTextColor={"#186eb8"}
        buttonText={"Apply now!"}
        loggedin={"/dashboard"}
        notloggedin={"/register"}
      />
      <ImageFullBackground
        image={"./wp-content/uploads/2020/11/3799789-scaled.jpg"}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#E3EEF6"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />
      <ContactUsCard
        image={"./wp-content/uploads/2020/11/2650088-removebg-preview.png"}
        desc={
          "We would be happy to help you further understand and own your financial future. Please feel free to reach out."
        }
        heading={"Connect With Us"}
        superLative={""}
        subHeading={""}
        backgroundColor={"#31587d"}
        buttonColor={"#FFFF"}
        buttonTextColor={"blue"}
        height="300px"
        buttonText={"Let's connect!"}
        picHeight={true}
        loggedin={"/contact-us"}
        notloggedin={"/contact-us"}
      />
    </div>
  );
};

export default ToIndividuals;
