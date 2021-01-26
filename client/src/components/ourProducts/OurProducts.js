import { Grid } from "@material-ui/core";
import React from "react";
import CarMediaCard from "../pageComponents/CarMediaCard";
import CarMediaCardRightPic from "../pageComponents/CarMediaCardRightPic";
import ContactUsCard from "../pageComponents/ContactUsCard";
const OurProducts = () => {
  return (
    <div>
      <div className="image">
        <Grid container>
          <Grid item lg={7} md={7} xs={12}></Grid>
          <Grid item lg={3} md={3} xs={12}>
            <div className="box">
              <div className="box-margin">
                <div className="heading">Our Products</div>
                <hr />
                <div className="decs">
                  This is how we shape a new economy for individuals and
                  businesses
                </div>
                <div className="intro-button">
                  <a href="">Get Started!</a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={2} md={2} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("https://www.metrimeo.com/wp-content/uploads/2020/10/17656810-scaled.jpg");
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
            height: 300px;
            margin-top: 50%;
            border: 1px solid rgba(255, 255, 255, 0.5);
            background-color: #ffff;
            opacity: 0.7;
          }
          .box .heading {
            font-style: normal;

            line-height: 1.1em;
            font-size: 26px;
            font-family: Helvetica, sans-serif;
            letter-spacing: 0.5px;
            font-weight: 800;
            opacity: 1;
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
          "https://www.metrimeo.com/wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
        }
        desc={
          "The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product ScoreoTM for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not."
        }
        heading={"Scoreo"}
        superLative={"TM"}
        subHeading={"Consumer Credit Reporting"}
        backgroundColor={"#ffff"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />

      <CarMediaCardRightPic
        image={
          "https://www.metrimeo.com/wp-content/uploads/2020/12/235-removebg-preview1.png"
        }
        desc={
          "We built an artificial intelligence solution that performs in-depth verification and allows companies to tremendously lower risk on their potential investments. This is to provide a perspective to local and international investors willing to enter a new market or partnership. Our Business Rating is ideal for organizations eager to acquire trade references on other companies that they would like to venture with. Our Business report and screening will evaluate companies’ activities and operations that are critical for their successes."
        }
        heading={"BusiMeo"}
        superLative={"TM"}
        subHeading={"Business Ratings & Reporting"}
        backgroundColor={"#186EB8"}
        buttonColor={"#ffff"}
        buttonTextColor={"blue"}
      />
      <CarMediaCard
        image={
          "https://www.metrimeo.com/wp-content/uploads/2020/12/online-form-survey-quiz-voting-document-with-stamp-pc-computer_101884-353__1_-removebg-preview.png"
        }
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
        image={
          "https://www.metrimeo.com/wp-content/uploads/2020/10/3969587-removebg-preview.png"
        }
        desc={
          "Having questions? Please send us a request  with a detailed description of your need, one of our representative will promptly assist you. "
        }
        heading={"Contact Us"}
        superLative={""}
        subHeading={""}
        backgroundColor={"#31587d"}
        buttonColor={"#FFFF"}
        buttonTextColor={"blue"}
      />
    </div>
  );
};

export default OurProducts;
