import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Box, Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Carousal from "../../components/carousel";
// import GradientBtn from "../../quotes/GradientBtn";

const ThreeGridCircleImages = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      backgroundColor: props.backgroundColor,
    },
    media: {
      height: 10,
    },
    largeIcon: {
      width: 100,
      height: 100,
    },
  });

  const classes = useStyles();
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
      <Card className={classes.root}>
        <CardActionArea>
          <Grid container style={{ padding: "50px" }}>
            <Grid item xs={12}>
              <div
                style={{
                  fontFamily: "OpenSans-Regular, 'Open Sans', sans-serif",
                  fontSize: "35px",
                  // fontWeight: "800",
                  color: "white",
                  textAlign: "center",
                }}
              >
                OUR EXECUTIVE TEAM
                <br />
                <div
                  className="elementor-divider-separator"
                  style={{ margin: "auto" }}
                ></div>
                <br />
              </div>

              {isTabletOrMobile && !isPortrait ? (
                <>
                  <br></br>
                  <br></br>
                </>
              ) : null}
            </Grid>

            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  // backgroundImage: `url(${props.image1})`,
                  // backgroundPosition: "center center",
                  // height: "300px",
                  // backgroundSize: "cover",
                  // height: "300px",
                  // width: "100px",
                  // objectFit: "cover",
                  // backgroundPosition: "center center",
                  textAlign: "center",
                }}
              >
                <img
                  src={props.image1}
                  // height="400px"
                  width="300px"
                  alt=""

                  // class="center"
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                {props.data1Heading}
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Open Sans',sans-serif;",
                  fontSize: "16px",
                  color: "#5D7280",
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                {props.data1sub}

                <br />
                {isTabletOrMobile && !isPortrait ? (
                  <>
                    <br></br>
                    <br></br>
                  </>
                ) : null}
              </div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  // backgroundImage: `url(${props.image2})`,
                  // backgroundPosition: "center center",
                  // height: "300px",
                  // width: "300px",
                  // backgroundSize: "cover",
                  // backgroundPosition: "center center",
                  // height: "300px",
                  // backgroundSize: "cover",
                  textAlign: "center",
                }}
              >
                <img
                  src={props.image2}
                  height="300px"
                  width="auto"
                  alt=""
                  // class="center"
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                {props.data2Heading}
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Open Sans',sans-serif;",
                  fontSize: "16px",
                  color: "#5D7280",
                  marginTop: "10px",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                {props.data2sub}
                {isTabletOrMobile && !isPortrait ? (
                  <>
                    <br></br>
                    <br></br>
                  </>
                ) : null}
              </div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  // backgroundImage: `url(${props.image3})`,
                  // backgroundPosition: "center center",
                  // height: "300px",
                  // width: "300px",
                  // backgroundSize: "cover",
                  // height: "300px",
                  // overflow: "hidden",
                  // backgroundPosition: "center center",
                  // height: "300px",
                  // backgroundSize: "cover",
                  textAlign: "center",
                }}
              >
                <img
                  src={props.image3}
                  height="300px"
                  width="auto"
                  alt=""
                  // class="center"
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                {props.data3Heading}
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Open Sans',sans-serif;",
                  fontSize: "16px",
                  color: "#5D7280",
                  marginTop: "10px",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                {props.data3sub}
                {isTabletOrMobile && !isPortrait ? (
                  <>
                    <br></br>
                    <br></br>
                  </>
                ) : null}
              </div>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
      <style jsx global>{`
        .center {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: auto;
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

          background: ${props.buttonColor};
          transition: all 0.5s;
          opacity: 1;
        }
        .intro-button a:hover {
          background-color: ${props.buttonColor};
          color: white;
          opacity: 1;
        }
        .elementor-divider-separator {
          width: 50px;
          margin: 0 auto;
          margin-left: 0;
          borde;
        }
      `}</style>
    </div>
  );
};
export default ThreeGridCircleImages;
