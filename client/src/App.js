import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";

import { Paper, ThemeProvider, createMuiTheme, Grid } from "@material-ui/core";
import LandingComponent from "./components/LandingComponent";
import OurProducts from "./components/ourProducts/OurProducts";
import CustomFooter from "./components/footer/CustomFooter";
import NavBar from "./components/nav";
import { useMediaQuery } from "react-responsive";
import ToIndividuals from "./components/toIndividuals/ToIndividuals";
import ToLandlords from "./components/toLandlords/ToLandlords";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const [dark, setDark] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingComponent} />
        <Route path="/our-products" exact component={OurProducts} />
        <Route path="/for-individuals" exact component={ToIndividuals} />
        <Route path="/for-landlords" exact component={ToLandlords} />
      </Switch>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <CustomFooter />
        </Grid>
        {isTabletOrMobile ? (
          <div
            style={{
              backgroundColor: "#404040",
              // height: "100%",
              width: "100%",
            }}
          >
            <span>
              <hr
                style={{
                  margin: isDesktopOrLaptop
                    ? "20px 185px 0px 185px"
                    : "20px 50px 0px 50px",
                }}
              />
            </span>
          </div>
        ) : (
          <></>
        )}
        <Grid item lg={3} xs={12}>
          <div style={{ backgroundColor: "#404040", height: "100%" }}>
            <div class="elementor-widget-container">
              <form
                class="hfe-search-button-wrapper"
                role="search"
                action="https://www.metrimeo.com"
                method="get"
              >
                <div
                  class="hfe-search-form__container"
                  role="tablist"
                  style={{ textAlign: "center" }}
                >
                  <input
                    style={{
                      marginTop: "100px",
                      margin: isTabletOrMobile ? "50px auto" : "100px auto",
                    }}
                    placeholder="Search..."
                    class="hfe-search-form__input"
                    type="search"
                    name="s"
                    title="Search"
                    value=""
                  ></input>
                  <button id="clear-with-button" type="reset">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                  <button class="hfe-search-submit" type="submit">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            className="bottom"
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: isTabletOrMobile ? null : "47px",
              // line-height: 90px;
              // fontSize: "15px",
              // fontFamily: "'Open Sans', sans-serif",
            }}
          >
            <span
              style={{
                // textAlign: "center",
                fontSize: "15px",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              © Copyright 2020 MetriMeo | All rights reserved MetriMeo and the
              MetriMeo marks used herein are trademarks of MetriMeo.
            </span>
          </div>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
