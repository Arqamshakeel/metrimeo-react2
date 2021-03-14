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
// import GradientBtn from "../../quotes/GradientBtn";

const ThreeGridSecurity = (props) => {
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
            {/* <Grid item xs={12}>
              <div
                style={{
                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "1.6666666666667rem",
                  fontWeight: "800",
                  color: "#186EB8",
                  textAlign: "center",
                }}
              >
                Our Tenant Credit Report Includes:
              </div>
              {isTabletOrMobile && !isPortrait ? (
                <>
                  <br></br>
                  <br></br>
                </>
              ) : null}
            </Grid> */}

            {props.headingShow == "hello" ? (
              <Grid xs={12}>
                <div
                  style={{
                    textAlign: "center",
                    fontfont: "'Montserrat',sans-serif",
                    fontSize: isTabletOrMobile ? "35px" : "50px",
                    // fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  Security Practices
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontfont: "'Montserrat',sans-serif",
                    fontSize: isTabletOrMobile ? "18px" : "30px",
                    // fontWeight: "800",
                    marginBottom: "20px",
                  }}
                >
                  We Treat Your Data As If It Was Our Own
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontfont: "'Montserrat',sans-serif",
                    fontSize: isTabletOrMobile ? "18px" : "15px",

                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "#5D7280",
                    }}
                  >
                    Your data security is a top priority at MetriMeo. Every day
                    we thrive to ensure that our security is parallel with
                    industry standards and compliance. Below is a breakdown of
                    our security practices:
                  </div>
                </div>
              </Grid>
            ) : (
              <></>
            )}
            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  backgroundImage: `url(${props.image1})`,
                  backgroundPosition: "center center",
                  height: "100px",
                  width: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                style={{
                  textAlign: "center",
                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "26px",
                  fontWeight: "800",
                  marginTop: "10px",
                }}
              >
                {props.data1Heading}
              </div>
              <div
                style={{
                  textAlign: "center",
                  // fontFamily: "'Open Sans',sans-serif;",
                  // fontSize: "16px",
                  color: "#5D7280",
                  marginTop: "10px",

                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "18px",
                }}
              >
                {props.data1sub}
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
                  backgroundImage: `url(${props.image2})`,
                  backgroundPosition: "center center",
                  height: "100px",
                  width: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* <img
                  src={props.image2}
                  height="400px"
                  width="auto"
                  alt=""
                  // class="center"
                /> */}
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "26px",
                  fontWeight: "800",
                  marginTop: "10px",
                }}
              >
                {props.data2Heading}
              </div>

              <div
                style={{
                  textAlign: "center",
                  // fontFamily: "'Open Sans',sans-serif;",
                  // fontSize: "16px",
                  color: "#5D7280",
                  marginTop: "10px",

                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "18px",
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
                  backgroundImage: `url(${props.image3})`,
                  backgroundPosition: "center center",
                  height: "100px",
                  width: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* <img
                  src={props.image3}
                  height="400px"
                  width="auto"
                  alt=""
                  // class="center"
                /> */}
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "26px",
                  fontWeight: "800",
                  marginTop: "10px",
                }}
              >
                {props.data3Heading}
              </div>
              <div
                style={{
                  textAlign: "center",
                  // fontFamily: "'Open Sans',sans-serif;",
                  // fontSize: "16px",
                  color: "#5D7280",
                  marginTop: "10px",

                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "18px",
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
export default ThreeGridSecurity;
