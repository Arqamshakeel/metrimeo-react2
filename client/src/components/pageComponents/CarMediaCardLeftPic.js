import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Box, Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";
import userService from "../../services/UserService";
// import GradientBtn from "../../quotes/GradientBtn";

const CarMediaCardLeftPic = (props) => {
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
          <Grid container>
            {true ? (
              <Grid item lg={5} md={12} xs={12}>
                <div>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div style={{ marginTop: "50px" }}>
                      <img
                        src={props.image}
                        alt=""
                        height={isTabletOrMobile ? "300px" : "400px"}
                        style={{ borderRadius: "70px" }}
                      />
                    </div>
                  </Box>
                </div>
              </Grid>
            ) : (
              <Grid item lg={1} md={12}></Grid>
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
                    color: props.buttonColor,
                  }}
                >
                  {props.heading}
                  <sup>{props.superLative}</sup>
                </div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>

                <div
                  style={{
                    fontfont: "'Montserrat',sans-serif",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#186EB8",
                    color: props.buttonColor,
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
                  }}
                >
                  {props.desc}
                </div>
                <br />

                <div className="intro-button-card2">
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
          </Grid>
        </CardActionArea>
      </Card>
      <style jsx global>{`
        .intro-button-card2 {
          margin-top: 2.3em;
          margin-bottom: 3em;
          opacity: 1;
        }
        .intro-button-card2 a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: ${props.buttonTextColor};

          background: ${props.buttonColor};
          transition: all 0.5s;
          opacity: 1;
        }
        .intro-button-card2 a:hover {
          background-color: ${props.buttonColor};
          color: ${props.buttonTextColor};
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
export default withRouter(CarMediaCardLeftPic);
