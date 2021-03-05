import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousal2 from "../../components/carousel2";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Box, Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "reactstrap";
// import CarouselCompanies from "../carouselCompanies";
// import GradientBtn from "../../quotes/GradientBtn";

const ThreeGridCarousal = (props) => {
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
                  color: "#186eb8",
                  textAlign: "center",
                  backgroundColor: "#ffff",
                }}
              >
                MAKING IT POSSIBLE
                <br />
                <div
                  className="elementor-divider-separator"
                  style={{ margin: "auto" }}
                ></div>
                <br />
              </div>
              <div style={{ textAlign: "center", fontSize: "20px" }}>
                <b>MetriMeo</b> teams up with world class partners to bring our
                innovations to life.
              </div>

              {isTabletOrMobile && !isPortrait ? (
                <>
                  <br></br>
                  <br></br>
                </>
              ) : null}
            </Grid>
          </Grid>
          <Carousal2 />
          {/* <CarouselCompanies /> */}
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
export default ThreeGridCarousal;
