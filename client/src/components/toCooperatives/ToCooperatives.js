import { Grid } from "@material-ui/core";
import React from "react";
import CarMediaCard from "../pageComponents/CarMediaCard";
import CarMediaCardRightPic from "../pageComponents/CarMediaCardRightPic";
import ContactUsCard from "../pageComponents/ContactUsCard";
import { useMediaQuery } from "react-responsive";
import ImageFullBackground from "../pageComponents/ImageFullBackground";
import TextFullBackground from "../pageComponents/TextFullBackground";
import CarMediaCardLeftPic from "../pageComponents/CarMediaCardLeftPic";
import ThreeGrid from "../pageComponents/ThreeGrid";
const ToCooperatives = () => {
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
  return (
    <div>
      <div className="image">
        <Grid container justify={isTabletOrMobile ? "flex-start" : null}>
          <Grid item lg={7} md={7} sm={7} xs={12}></Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xs={10}
            style={{ marginLeft: isTabletOrMobile ? "10px" : null }}
          >
            <div className="box">
              <div className="box-margin">
                <div className="heading">Cooperatives</div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>
                <div className="decs">
                  Trust and numbers do matter between cooperatives’ members.
                  MetriMeo is helping them build it.
                </div>
                <div className="intro-button">
                  <a href="">Start here!</a>
                </div>
              </div>
              <div></div>
            </div>
          </Grid>
          <Grid item lg={1} md={1} sm={7} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("./wp-content/uploads/2020/11/3124-scaled.jpg");

            width: 100%;
            height: 600px;
            max-height: 1000px;
            //   background-size: 100% auto;
            background-size: cover;
            //   background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            max-height: 1000px;
          }
          .top-div {
          }
          .box {
            ${!isPortrait && isTabletOrMobile
              ? "max-height:360px;"
              : "min-height:300px;"}
            // min-height: 300px;
            margin-top: ${!isPortrait && isTabletOrMobile
              ? "40%"
              : isTabletOrMobile
              ? "40%"
              : "55%"};
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

      <TextFullBackground
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
      />
      <CarMediaCard
        image={
          "./wp-content/uploads/2020/11/credit-score-scale-showing-good-value-illustration_100456-1333.jpg"
        }
        heading={"Scoreo Basic"}
        superLative={"TM"}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}
        desc={[
          "Through Scoreo Basic",
          <sup>TM</sup>,
          ", we give you the ability to evaluate how creditworthy a prospective member is before his/her admission to the cooperative by getting the applicant’s credit score.",
        ]}
        subHeading={"Prospective Members Credit Score"}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Subscribe now!"}
        elementSepColor={"#186eb8"}
      />
      <CarMediaCardRightPic
        image={
          "./wp-content/uploads/2020/12/credit-score-document-paper-sheet-chart-personal-credit-score-information_100456-1257-removebg-preview.png"
        }
        desc={[
          "In addition to Scoreo Basic",
          <sup>TM</sup>,
          " which provides you with a credit score, we also offer, through Scoreo Premium",
          <sup>TM</sup>,
          " a credit report which is a statement allowing you to do a deep dive assessment of a member creditworthiness. Our credit report includes everything else you need on top of what Scoreo Basic has to offer, including credit activity and current credit situation such as loan repayment history helping you build the trust needed among members of a cooperative. ",
        ]}
        heading={"Scoreo Premium"}
        superLative={"TM"}
        subHeading={"Prospective Members Credit Report"}
        backgroundColor={"#186EB8"}
        buttonColor={"#ffff"}
        buttonTextColor={"#186eb8"}
        buttonText={"Subscribe now!"}
      />

      <CarMediaCard
        image={
          "./wp-content/uploads/2020/12/online-form-survey-quiz-voting-document-with-stamp-pc-computer_101884-353__1_-removebg-preview.png"
        }
        desc={
          "Another crucial aspect to building trust among members of a cooperative is to ensure that the prospective member is trustworthy. Through VeriMeo, we can help you get all the information you need, by doing a background and identity verification check, to make the right decision for your cooperative."
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Prospective Members Background Check"}
        backgroundColor={"#eceff3"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Subscribe now!"}
      />

      <ContactUsCard
        image={"./wp-content/uploads/2020/11/2438165-removebg-preview.png"}
        desc={
          "We would be happy to understand you specific needs and help you choose the right solution to meet them."
        }
        heading={"Ready To Start?"}
        superLative={""}
        subHeading={""}
        backgroundColor={"#31587d"}
        buttonColor={"#FFFF"}
        buttonTextColor={"blue"}
        height="300px"
        buttonText={"Contact us"}
      />
    </div>
  );
};

export default ToCooperatives;
