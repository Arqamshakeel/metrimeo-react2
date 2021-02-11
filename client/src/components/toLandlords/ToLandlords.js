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
const ToLandlords = () => {
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
            style={{ marginLeft: isTabletOrMobile ? "7px" : null }}
          >
            <div className="box">
              <div className="box-margin">
                <div className="heading">Landlords</div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>
                <div className="decs">
                  Landlords need tenants they can entrust with their properties.
                  Metrimeo is helping them make the right decision.
                </div>
                <div className="intro-button">
                  <a href="">Start today!</a>
                </div>
              </div>
              <div></div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("https://www.metrimeo.com/wp-content/uploads/2020/11/11862-scaled.jpg");

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
              ? "max-height:340px;"
              : "min-height:300px;"}
            // min-height: 300px;
            margin-top: ${!isPortrait && isTabletOrMobile ? "40%" : "30%"};
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
          "https://www.metrimeo.com/wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
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

      <CarMediaCardLeftPic
        image={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/credit-score-online-report-research-document-computer-flat-cartoon_101884-717.jpg"
        }
        desc={[
          "By getting this credit report, you can lease to a tenant with peace of mind. The tenant’s credit reports give you the ability to evaluate an applicant’s creditworthiness through their credit score and credit history. All tenant’s credit reports from MetriMeo include the applicant’s credit score along with their payment history among others.",
        ]}
        heading={"Tenant's Credit Report​"}
        superLative={""}
        subHeading={
          "Rent With Confidence By Pulling A Prospective Tenant's Credit Report! ​"
        }
        backgroundColor={"#186EB8"}
        buttonColor={"#ffff"}
        buttonTextColor={"#186eb8"}
        buttonText={"Subscribe now!"}
      />
      <ThreeGrid
        image1={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/credit-score-online-report-document-computer-flat-cartoon-clipart_101884-719-removebg-preview.png"
        }
        data1Heading={"Credit Score"}
        data1sub={[
          " A number describing the tenant’s",
          <br />,
          "creditworthiness",
        ]}
        image2={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/computer-data-analytics-report-research_101884-346-removebg-preview.png"
        }
        data2Heading={"Summary Of Credit"}
        data2sub={[
          "A dashboard showing the number of accounts",
          <br />,
          " that are open for the tenant along with their",
          <br />,
          "statuses, balances and other useful",
          <br />,
          " information",
        ]}
        image3={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/online-electronic-documents-smart-contracts-with-signature-laptop-computer_101884-347-removebg-preview-1.png"
        }
        data3Heading={"Payment History"}
        data3sub={[
          "Include payment patterns such as the number",
          <br />,
          "of past due payments on all obligations",
        ]}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#FFFF"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />

      <CarMediaCardRightPic
        image={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/audit-research-computer-financial-paper-document-report-data-analysis-pc_101884-640.jpg"
        }
        desc={[
          "MetriMeo tenant’s screening report, through our VeriMeo product, allows you to confirm the identity of your prospective tenants and get all the information you need to make the right decision. Among others, the tenant’s screening report includes information on:",
          ,
          <ul>
            <li>Identity verification</li>
            <li>Employment verification</li>
            <li>Eviction background check</li>
            <li>Criminal background check</li>
          </ul>,
        ]}
        heading={"Tenant's Screening Report"}
        superLative={""}
        subHeading={"Make Better Leasing Decisions"}
        backgroundColor={"#186EB8"}
        buttonColor={"#ffff"}
        buttonTextColor={"#186eb8"}
        buttonText={"Subscribe now!"}
        borderRadius={true}
      />
      <ThreeGrid
        image1={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/online-electronic-documents-smart-contracts-with-signature-laptop-computer_101884-347-removebg-preview-1.png"
        }
        data1Heading={"Criminal Background Check"}
        data1sub={[
          "Information on convictions, frauds, violent",
          <br />,
          "crimes and more.​",
        ]}
        image2={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/desktop-computer-with-unlocked-password-bubble-notification-flat-cartoon-vector-illustration_101884-350-removebg-preview.png"
        }
        data2Heading={"Eviction Background Check"}
        data2sub={[
          "Information on prior evictions proceedings",
          <br />,
          "related to the tenant​",
        ]}
        image3={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/search-field-computer-illustration-flat-cartoon_101884-692-removebg-preview.png"
        }
        data3Heading={"Identity Verification"}
        data3sub={[
          "Confirm the identity of the tenant as per",
          <br></br>,
          "public records​",
        ]}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#FFFF"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />
      <ContactUsCard
        image={
          "https://www.metrimeo.com/wp-content/uploads/2020/11/2434220-removebg-preview.png"
        }
        desc={
          "We can help you navigate through all our solutions and help you select the one that perfectly suits your need."
        }
        heading={"Need Help?"}
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

export default ToLandlords;
