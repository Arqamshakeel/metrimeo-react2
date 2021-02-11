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

const ThreeGrid = (props) => {
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
          <Grid container style={{ padding: "50px" }}>
            <Grid item xs={12}>
              {" "}
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
            </Grid>

            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  backgroundImage: `url(${props.image1})`,
                  backgroundPosition: "center center",
                  height: "45vh",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
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
                  marginTop: "10px",
                }}
              >
                {props.data1sub}
              </div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  backgroundImage: `url(${props.image2})`,
                  backgroundPosition: "center center",
                  height: "45vh",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
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
                }}
              >
                {props.data2sub}
              </div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <div
                style={{
                  backgroundImage: `url(${props.image3})`,
                  backgroundPosition: "center center",
                  height: "45vh",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "800",
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
                }}
              >
                {props.data3sub}
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
export default ThreeGrid;
