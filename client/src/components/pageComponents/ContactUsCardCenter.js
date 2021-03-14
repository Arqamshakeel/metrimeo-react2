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
import { useMediaQuery } from "react-responsive";
import { red } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";
import userService from "../../services/UserService";
// import GradientBtn from "../../quotes/GradientBtn";

const ContactUsCardCenter = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      backgroundColor: props.backgroundColor,
      // height: "300px",
    },
    media: {
      height: 80,
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
          <Grid
            container

            // justify="center"
          >
            <Grid item lg={12} md={12}></Grid>
            <Grid
              item
              lg={12}
              md={12}
              justify="center"
              alignItems="center"
              direction="row"
              // style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "35px",
                  fontWeight: "800",
                  color: props.buttonColor,
                  textAlign: "center",
                }}
              >
                <br />
                {props.heading}
                <sup>{props.superLative}</sup>
              </div>
              <br />
              <div
                style={{
                  fontfont: "'Montserrat',sans-serif",
                  fontSize: "25px",
                  fontWeight: "700",
                  color: "#186EB8",
                  color: props.buttonColor,
                  textAlign: "center",
                }}
              >
                {props.subHeading}
              </div>
              <br />
              <div
                style={{
                  fontFamily: " 'DM Sans', sans-serif",
                  fontSize: "18px",

                  lineHeightStep: "1.85714285714286",

                  fontWeight: "100",
                  color: props.buttonColor,

                  //         font-weight: 100;
                  // font-size: 18px;
                  // line-height: 20px;
                  // line-height: 1.8;

                  // font-family: 'DM Sans', sans-serif;
                  textAlign: "center",
                  margin: !isTabletOrMobile ? "0px 100px 0px 100px" : null,
                }}
              >
                {props.desc}
              </div>
              <br />

              <div
                className="intro-button-card"
                style={{ textAlign: "center" }}
              >
                <a
                  href=""
                  onClick={() => {
                    if (userService.getloggedinuser()) {
                      props.history.push("/dashboard");
                    } else {
                      props.history.push("/login");
                    }
                  }}
                >
                  {" "}
                  {props.buttonText}
                </a>
              </div>
            </Grid>
          </Grid>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
      <style jsx global>{`
        .intro-button-card {
          margin-top: 2.3em;
          margin-bottom: 3em;
          opacity: 1;
        }
        .intro-button-card a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: white;
          font-size: 16px;
          background: #186eb8;
          transition: all 0.5s;
          opacity: 1;
        }
        .intro-button-card a:hover {
          background-color: #186eb8;
          color: white;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
export default withRouter(ContactUsCardCenter);
