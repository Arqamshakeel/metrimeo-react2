import React from "react";
// import "./App.css";
// import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
// import ResponsiveDrawer from "./components/header/ResponsiveDrawer";
// import Header from "./components/landingPage/Header";
// import Blog from "./components/landingPage/Blog";
// import CustomHeader from "./components/header/CustomHeader";
import Template from "./components/Template";

import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Main from "./components/Main";
import Test from "./components/Test";
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
      <Test />
      {/* </Paper> */}
      {/* <Header /> */}
      {/* <Blog /> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
