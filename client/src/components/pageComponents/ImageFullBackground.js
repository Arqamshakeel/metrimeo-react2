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
// import GradientBtn from "../../quotes/GradientBtn";

const ImageFullBackground = (props) => {
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
            <Grid item lg={12} md={12} xs={12}>
              {/* <Box display="flex" justifyContent="center" alignItems="center"> */}
              {/* <img src={props.image} alt="" height="400px" /> */}
              {/* </Box> */}
              <div
                style={{
                  backgroundImage: `url(${props.image})`,
                  backgroundPosition: "center",
                  height: " 65vh",
                  backgroundSize: "cover",
                  position: "relative",
                }}
              >
                <Grid container>
                  <Grid item lg={7} md={12} xs={12}></Grid>

                  <Grid item lg={5} md={12} xs={12}>
                    <div
                      style={{
                        position: "absolute",
                        margin: "0px",
                        top: "40%",
                        left: isTabletOrMobile && !isPortrait ? "50%" : null,
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "40px",
                        // fontSize:"2.3333333333333rem"
                      }}
                    >
                      <Typography
                        align="center"
                        style={{
                          fontFamily: "'Montserrat',sans-serif",
                          fontSize:
                            isTabletOrMobile && !isPortrait ? "25px" : "35px",
                          // fontSize:"2.3333333333333rem"
                          fontWeight: "800",
                        }}
                      >
                        SAFE AND SECURED
                      </Typography>
                    </div>
                  </Grid>

                  {/* <Grid item lg={12} md={12} xs={12}></Grid> */}
                </Grid>
              </div>
            </Grid>
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
          border-top: 4.5px solid #e05414;
        }
      `}</style>
    </div>
  );
};
export default ImageFullBackground;
