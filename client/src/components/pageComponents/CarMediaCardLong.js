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
import { useMediaQuery } from "react-responsive";
import { withRouter } from "react-router-dom";
import userService from "../../services/UserService";
// import GradientBtn from "../../quotes/GradientBtn";

const CarMediaCardLong = (props) => {
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
    query: "(min-width: 1000px)",
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
          {isTabletOrMobile ? (
            <>
              {" "}
              <br></br>
              <br></br>{" "}
            </>
          ) : null}
          <Grid
            container
            // direction="column"
            alignItems="center"
            justify="center"
            // style={{ minHeight: "100vh" }}
          >
            {isTabletOrMobile ? (
              <Grid item lg={5} md={12} xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src={props.image} alt="" height="250px" />
                </Box>
              </Grid>
            ) : props.picLocation == "right" ? (
              <Grid item lg={1} md={12}></Grid>
            ) : (
              <Grid item lg={5} md={12} xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src={props.image} alt="" height="300px" />
                </Box>
              </Grid>
            )}

            <Grid item lg={6} md={12} justify="center">
              <CardMedia
                className={classes.media}
                // image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />
              <CardContent>
                <br />

                <div
                  style={{
                    fontfont: "'Montserrat',sans-serif",
                    fontSize: "35px",
                    fontWeight: "800",
                    color: props.buttonColor ? props.buttonColor : "#186EB8",
                  }}
                >
                  {props.heading}
                  <sup>{props.superLative}</sup>
                </div>
                <br />
                <div>
                  <div className="elementor-divider-separator2 data5"></div>
                  <br />
                </div>

                <div
                  style={{
                    fontfont: "'Montserrat',sans-serif",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: props.buttonColor ? props.buttonColor : "#186EB8",
                  }}
                >
                  {props.subHeading}

                  <sup>{props.superLativeSubHeading}</sup>
                </div>
                <div>{props.data1}</div>
                <br />
                <div
                  style={{
                    fontFamily: " 'DM Sans', sans-serif",
                    fontSize: "18px",

                    lineHeightStep: "1.85714285714286",

                    fontWeight: "100",
                  }}
                >
                  {props.desc}
                </div>
                <br />

                <div className="intro-button">
                  <a
                    href=""
                    onClick={() => {
                      if (userService.getloggedinuser()) {
                        props.history.push("/dashboard");
                      } else {
                        props.history.push("/login");
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {props.buttonText ? props.buttonText : "Learn More"}
                  </a>
                </div>
              </CardContent>
            </Grid>
            {isTabletOrMobile ? (
              <Grid item lg={1} md={12}></Grid>
            ) : props.picLocation == "right" ? (
              <Grid item lg={5} md={12} xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src={props.image} alt="" height="300px" />
                </Box>
              </Grid>
            ) : (
              <Grid item lg={1} md={12}></Grid>
            )}
          </Grid>
        </CardActionArea>
      </Card>
      <style jsx global>{`
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
          opacity: 1;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: ${props.buttonTextColor ? props.buttonTextColor : "white"}

          background: ${props.buttonColor};
          transition: all 0.5s;
          opacity: 1;
        }
        .intro-button a:hover {
          background-color: ${props.buttonColor};
          color: white;
          opacity: 1;
        }
        .elementor-divider-separator2 {
          width: 50px;
          margin: 0 auto;
          margin-left: 0;
          border-top: 4.5px solid ${
            props.elementSepColor ? props.elementSepColor : "#e05414"
          };
        }
      `}</style>
    </div>
  );
};
export default withRouter(CarMediaCardLong);
