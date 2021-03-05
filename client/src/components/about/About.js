import { Grid } from "@material-ui/core";
import React from "react";
import CarMediaCard from "../pageComponents/CarMediaCard";
import CarMediaCardLong from "../pageComponents/CarMediaCardLong";
import CarMediaCardRightPic from "../pageComponents/CarMediaCardRightPic";
import ContactUsCardCenter from "../pageComponents/ContactUsCardCenter";
import { useMediaQuery } from "react-responsive";
import ImageFullBackground from "../pageComponents/ImageFullBackground";
import TextFullBackground from "../pageComponents/TextFullBackground";
import CarMediaCardLeftPic from "../pageComponents/CarMediaCardLeftPic";
import ThreeGrid from "../pageComponents/ThreeGrid";
import TextFullBackgroundWithHeading from "../pageComponents/TextFullBackgroundWithHeading";
import BulltesWithHeading from "../pageComponents/BulltesWithHeading";
import ThreeGridCircleImages from "../pageComponents/ThreeGridCircleImages";
import ThreeGridCarousal from "../pageComponents/ThreeGridCarousal";
const About = () => {
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
          <Grid item lg={1} md={1} sm={7} xs={12}></Grid>
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
                <div className="heading">About Us</div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>
                <div className="decs">Get to know who we are</div>
                {/* <div className="intro-button">
                  <a href="">Join us!</a>
                </div> */}
              </div>
              <div></div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("./wp-content/uploads/2020/11/Team-work-business-people-happy-scaled.jpg");

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
              : "min-height:200px;"}
            // min-height: 300px;
            margin-top: ${!isPortrait && isTabletOrMobile
              ? "80%"
              : isTabletOrMobile
              ? "85%"
              : "70%"};
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
          .elementor-divider-separator {
            width: 50px;
            margin: 0 auto;
            margin-left: 0;
            border-top: 4.5px solid #e05414;
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

      <TextFullBackgroundWithHeading
        image={
          "./wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
        }
        heading={"OUR STORY"}
        superLative={"TM"}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}
        desc={[
          "MetriMeo was founded early in 2014 with a mission to improve the economic outlook of people in the Sub-Saharan area. The vision emerged from the paradox that Africa is a continent with an extremely high development potential, near-infinite natural resources, a very young population (which is as creative and resourceful as it gets), yet most of the continent barely takes off economically.",
          <br />,
          <br />,
          "The situation above can be explained by multiple challenges of which the lack of specialized credit information repositories and the absence of scaled historical financial data records. In addition to that, about 66% of sub-Saharan Africans are listed as “unbanked” according to the world bank, meaning they do not have any financial footprint. As a result, lenders and creditors are unable to accurately assess consumers’ creditworthiness, which forces them to charge high interest rates. This leads to setting a barrier right between the potential borrower and the lender, which in turn is slowing down the wealth creation in the economies.",
          <br />,
          <br />,
          "Our company is rising to the challenge of using technology, focusing on the sub-saharan African market, to deliver ‘trust’ among institutions and individuals to do more business together, thus boosting the sub-regional economies.",
        ]}
        subHeading={"Consumer Credit Score"}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Apply now!"}
      />
      <TextFullBackgroundWithHeading
        image={
          "./wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
        }
        heading={"OUR VISION"}
        superLative={"TM"}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}
        desc={[
          "Our vision is to restore trust among all the stakeholders of a solid economy. We aim to increase money velocity through using our robust credit reporting and verification systems. We create a secure business environment by improving, advancing and conveying trust among financial & non-financial institutions, cooperatives, landlords and individuals.",
          <br />,
          <br />,
          "We are a global analytics company and we take to heart financial education of the mass, and deeply believe in personal development. We aim to empower people with all the tools for them to step into their future with confidence. ",
          <br />,
          <br />,
          "Our solution is providing accurate credit rating and reporting services to businesses and individuals through powerful algorithms. We help institutions or Governments to make objective financial decisions based on data driven research we perform for them. We improve money quality, efficiency and capital inflow circulation among Africans, which in turn improves the business landscape in Africa",
        ]}
        subHeading={"Consumer Credit Score"}
        backgroundColor={"#ebecee"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Apply now!"}
      />
      <BulltesWithHeading
        image={
          "./wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
        }
        heading={"OUR VALUES"}
        superLative={"TM"}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}
        desc={[
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#e45454",
              fontFamily:
                '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
              textAlign: "start",
              letterSpacing: "normal",
              fontSize: "30px",
            }}
          >
            ✓&nbsp;
          </span>,
          "Trust is at the center of what we do",
          <br />,
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#e45454",
              fontFamily:
                '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
              textAlign: "start",
              letterSpacing: "normal",
              fontSize: "30px",
            }}
          >
            ✓&nbsp;
          </span>,
          "We always do the right thing",
          <br />,
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#e45454",
              fontFamily:
                '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
              textAlign: "start",
              letterSpacing: "normal",
              fontSize: "30px",
            }}
          >
            ✓&nbsp;
          </span>,
          "We put our customers first",
          <br />,
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#e45454",
              fontFamily:
                '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
              textAlign: "start",
              letterSpacing: "normal",
              fontSize: "30px",
            }}
          >
            ✓&nbsp;
          </span>,
          "We grow and innovate",
        ]}
        subHeading={"Consumer Credit Score"}
        backgroundColor={"#ffff"}
        buttonColor={"#ffff"}
        buttonTextColor={"white"}
        buttonText={"Apply now!"}
      />

      <ThreeGridCircleImages
        image1={"./wp-content/uploads/2020/10/circle-cropped-1.png"}
        data1Heading={"Eric Massamba"}
        data1sub={["Chief Executive Officer", <br />]}
        image2={"./wp-content/uploads/2020/10/circle-cropped.png"}
        data2Heading={"Larissa Djato"}
        data2sub={["Chief Financial Officer", <br />]}
        image3={"./wp-content/uploads/2020/10/circle-cropped-3.png"}
        data3Heading={"Michael Mbaye"}
        data3sub={["Chief Technology Officer", <br />]}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#186eb8"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />
      <ThreeGridCarousal
        image1={"./wp-content/uploads/2020/10/circle-cropped-1.png"}
        data1Heading={"Eric Massamba"}
        data1sub={["Chief Executive Officer", <br />]}
        image2={"./wp-content/uploads/2020/10/circle-cropped.png"}
        data2Heading={"Larissa Djato"}
        data2sub={["Chief Financial Officer", <br />]}
        image3={"./wp-content/uploads/2020/10/circle-cropped-3.png"}
        data3Heading={"Michael Mbaye"}
        data3sub={["Chief Technology Officer", <br />]}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"MAKING IT POSSIBLE"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />

      <ContactUsCardCenter
        image={
          "./wp-content/uploads/2020/11/call-center-assistant-helping-customers_23-2148196022-removebg-preview.png"
        }
        desc={
          "Join a team of energized people with a passion for technology and making tomorrow better. Discover and follow your interest while shaping the future of the continent, making numbers matter."
        }
        heading={"Interested In Working With Us?"}
        superLative={""}
        subHeading={""}
        backgroundColor={"#31587d"}
        buttonColor={"#FFFF"}
        buttonTextColor={"blue"}
        height="300px"
        buttonText={"Join our talent community"}
      />
    </div>
  );
};

export default About;
