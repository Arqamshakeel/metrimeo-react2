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
// import GradientBtn from "../../quotes/GradientBtn";

const CarMediaCard = (props) => {
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

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Grid container>
            <Grid item lg={5} md={12} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={props.image} alt="" height="400px" />
              </Box>
            </Grid>

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
                </div>
                <br />
                <div
                  style={{
                    fontFamily: " 'DM Sans', sans-serif",
                    fontSize: "18px",

                    lineHeightStep: "1.85714285714286",

                    fontWeight: "100",

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

                <div className="intro-button">
                  <a href="">
                    {props.buttonText ? props.buttonText : "Learn More"}
                  </a>
                </div>
              </CardContent>
            </Grid>
            <Grid item lg={1} md={12}></Grid>
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
export default CarMediaCard;
