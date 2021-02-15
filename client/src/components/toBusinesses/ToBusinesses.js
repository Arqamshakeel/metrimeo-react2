import { Grid } from "@material-ui/core";
import React from "react";
import CarMediaCard from "../pageComponents/CarMediaCard";
import CarMediaCardLong from "../pageComponents/CarMediaCardLong";
import CarMediaCardRightPic from "../pageComponents/CarMediaCardRightPic";
import ContactUsCard from "../pageComponents/ContactUsCard";
import { useMediaQuery } from "react-responsive";
import ImageFullBackground from "../pageComponents/ImageFullBackground";
import TextFullBackground from "../pageComponents/TextFullBackground";
import CarMediaCardLeftPic from "../pageComponents/CarMediaCardLeftPic";
import ThreeGrid from "../pageComponents/ThreeGrid";
const ToBusinesses = () => {
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

  const data = [
    {
      heading: "Are you a Financial Institution?",
      desc:
        "You want to lend money or partner with a local business, you now can do it with confidence using BusiMeo Rating. You will be able to access or request corporate credit ratings of any local businesses that need a loan, a join venture, or a partnership. Local businesses are not rated by major credit agencies so it’s quite difficult to trust them, but now with BusiMeo rating you have an important tool to gauge local business creditworthiness.",
    },
    {
      heading: "Are you a Service Company?",
      desc:
        "From your request for proposals, you need a new deciding factor in order to choose the best contractor for your project.  Local contractors’ creditworthiness might be an indicator of how healthy the business is and inspire trust on the way they do business.",
    },
  ];
  const data2 = [
    {
      heading: "Financial Institutions need to be in the know",
      desc:
        "It has clearly become a best practice for businesses with sensitive data and high reputation such as banks and other financial institutions to use business screening report when considering to partner or venture with new local businesses.",
    },
    {
      heading: "Businesses need the right local partners",
      desc:
        "Our Business report and screening will evaluate companies’ activities and operations that are critical for their successes. It provides an in-depth view of a company’s financial position, including actual trade payment experiences, public record information, company comparison to industry norms, predictive future payment habits and financial stability.",
    },
    {
      heading: "Service companies need key metrics",
      desc:
        "One of the best ways to minimize your risk is to know all of the key metrics of a business you want to partner with, and be able to analyze that company’s recent financial indicators. ",
    },
  ];
  const data3 = [
    {
      heading: "null",
      desc:
        "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. ",
    },
    {
      heading: "Financial Institutions",
      desc:
        "As the regulation of employment practices in general and financial services in particular continues to grow and become increasingly complex, firms operating in this industry are faced with the challenge of determining how best to comply with varying legal requirements that at times seem to be in direct conflict with each other. Employers in the financial services industry, such as insurance companies, banks, microfinances and others, are subject to various background investigation and screening requirements.",
    },
    {
      heading: "Service companies",
      desc:
        "Businesses large and small need to make wise hiring decisions. Whether they are looking to employ an administrative assistant, hire an engineer, or vet a potential tenant, running a background check can give you some added peace of mind and potentially protect you legally.",
    },
  ];
  const data4 = [
    {
      heading: "Financial Institutions",
      desc:
        "Commercial Banks, Microfinance Institutions, and Insurance Companies will be able to subscribe to our Scoreo BasicTM product in order to pull their customers’ unique credit score. Our system will give them basic access to our consumers data analytics where they will only be able to inquire about customers credit score.",
    },
    {
      heading: "Service Companies",
      desc:
        "By determining the creditworthiness and credit limit of your customers, a high ROI can be measured by targeting the right prospects who are more likely to become fast-paying customers and therefore bring more reliable cash flows to your business.",
    },
  ];

  const heading1 = (
    <div>
      {data.map((item, index) => {
        return (
          <>
            {" "}
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
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
              </span>
              {item.heading}
            </div>
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "16px",
                // fontWeight: "700",
                lineHeight: "1.85714285714286",
                textAlign: "justify",
              }}
            >
              {item.desc}
            </div>
          </>
        );
      })}
    </div>
  );
  const heading2 = (
    <div>
      {data2.map((item, index) => {
        return (
          <>
            {" "}
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
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
              </span>
              {item.heading}
            </div>
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "16px",
                // fontWeight: "700",
                lineHeight: "1.85714285714286",
                textAlign: "justify",
              }}
            >
              {item.desc}
            </div>
          </>
        );
      })}
    </div>
  );
  const heading3 = (
    <div>
      {data3.map((item, index) => {
        return (
          <>
            {" "}
            {item.heading == "null" ? (
              <></>
            ) : (
              <>
                <br />

                <div
                  style={{
                    fontFamily: "'Open Sans',sans-serif",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
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
                  </span>

                  {item.heading}
                </div>
              </>
            )}
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "16px",
                // fontWeight: "700",
                lineHeight: "1.85714285714286",
                textAlign: "justify",
              }}
            >
              {item.desc}
            </div>
          </>
        );
      })}
    </div>
  );
  const heading4 = (
    <div>
      {data4.map((item, index) => {
        return (
          <>
            {" "}
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
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
              </span>
              {item.heading}
            </div>
            <br />
            <div
              style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "16px",
                // fontWeight: "700",
                lineHeight: "1.85714285714286",
                textAlign: "justify",
              }}
            >
              {item.desc}
            </div>
          </>
        );
      })}
    </div>
  );
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
                <div className="heading">Businesses</div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>
                <div className="decs">
                  Numbers do matter for Businesses. Metrimeo is helping
                  businesses grow their potential.
                </div>
                <div className="intro-button">
                  <a href="">Join us!</a>
                </div>
              </div>
              <div></div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("./wp-content/uploads/2020/10/13580-scaled.jpg");

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

      <CarMediaCardLong
        image={
          "./wp-content/uploads/2020/12/2924_copy-removebg-Great-300x246.png"
        }
        heading={"Corporate Credit Rating"}
        superLative={""}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}

        subHeading={"BusiMeo Rating"}
        superLativeSubHeading={"TM"}
        data1={heading1}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Subscribe now!"}
        // elementSepColor={"#186eb8"}
      />

      <CarMediaCardLong
        image={
          "./wp-content/uploads/2020/12/1070_copy-removebg-preview-300x229.png"
        }
        heading={"Corporate Screening"}
        superLative={""}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}

        subHeading={"BusiMeo Screening"}
        superLativeSubHeading={"TM"}
        data1={heading2}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Subscribe now!"}
        // elementSepColor={"#186eb8"}
        picLocation={"right"}
      />

      <CarMediaCardLong
        image={"./wp-content/uploads/2020/12/1644-removebg-preview.png"}
        heading={"Application Screening"}
        superLative={""}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}

        subHeading={"VeriMeo Screening"}
        superLativeSubHeading={"TM"}
        data1={heading3}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Subscribe now!"}
        // elementSepColor={"#186eb8"}
      />
      <CarMediaCardLong
        image={
          "./wp-content/uploads/2020/12/For_credit_score_background_updated-removebg-preview.png"
        }
        heading={"Credit Score"}
        superLative={""}
        // desc={`The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product Scoreo  for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.`}

        subHeading={"Scoreo Basic"}
        superLativeSubHeading={"TM"}
        data1={heading4}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
        buttonText={"Subscribe now!"}
        // elementSepColor={"#186eb8"}
        picLocation={"right"}
      />

      <ContactUsCard
        image={
          "./wp-content/uploads/2020/11/call-center-assistant-helping-customers_23-2148196022-removebg-preview.png"
        }
        desc={
          "We are happy to help companies understand and own their financial futures. We will answer any question you may  have."
        }
        heading={"Let's Get Started!"}
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

export default ToBusinesses;
