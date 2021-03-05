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

const TextFullBackgroundWithHeading = (props) => {
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
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <div
            style={{
              fontFamily: "'Open Sans',sans-serif",
              fontSize: "17px",
              // fontSize:"2.3333333333333rem"
              padding: isTabletOrMobile ? "20px" : "80px",
              color: "#414042",
              lineHeight: "1.85714285714286",
              backgroundColor: props.backgroundColor,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "OpenSans-Regular, 'Open Sans', sans-serif",
                  fontSize: "35px",
                  color: "#004c97",
                }}
              >
                {props.heading}
              </div>

              <div className="elementor-divider-separator data5"></div>
            </div>
            <br />
            {props.desc}
            <br />
          </div>
        </Grid>
      </Grid>

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
export default TextFullBackgroundWithHeading;
