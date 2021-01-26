import { Grid } from "@material-ui/core";
import React from "react";
const BackgroundImageWithBox = () => {
  return (
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
  );
};

export default BackgroundImageWithBox;
