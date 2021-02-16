import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Nav from "./components/nav";

import { Paper, ThemeProvider, createMuiTheme, Grid } from "@material-ui/core";
import LandingComponent from "./components/LandingComponent";
import OurProducts from "./components/ourProducts/OurProducts";
import CustomFooter from "./components/footer/CustomFooter";
import NavBar from "./components/nav";
import { useMediaQuery } from "react-responsive";
import ToIndividuals from "./components/toIndividuals/ToIndividuals";
import ToLandlords from "./components/toLandlords/ToLandlords";
import ToCooperatives from "./components/toCooperatives/ToCooperatives";
import ToBusinesses from "./components/toBusinesses/ToBusinesses";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Routes from "./Routes";

function App(props) {
  console.log(props);
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
      <Routes />
    </BrowserRouter>
  );
}

export default App;
