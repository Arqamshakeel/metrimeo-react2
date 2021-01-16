import React from "react";
// import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";
import LandingComponent from "./components/LandingComponent";

function App() {
  const [dark, setDark] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      {/* <Paper> */}
      {/* <ResponsiveDrawer /> */}
      {/* <CustomHeader dark={dark} setDark={setDark} /> */}
      {/* <Main2 /> */}
      {/* <Template /> */}
      {/* <Test /> */}
      {/* </Paper> */}
      {/* <Header /> */}
      {/* <Blog /> */}
      {/* </ThemeProvider> */}
      <LandingComponent />
    </BrowserRouter>
  );
}

export default App;
