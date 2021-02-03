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

function App() {
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
      </Switch>
      <Grid container>
        <Grid item xs={9}>
          <CustomFooter />
        </Grid>
        <Grid item xs={3}>
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
                    style={{ marginTop: "100px", margin: "100px auto" }}
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
