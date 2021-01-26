import React from "react";
// import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";

import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";
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
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
