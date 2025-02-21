import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import userService from "../../services/UserService";
import CustomBackdrop from "../backdrop/CustomBackdrop";
import { useSelector, useDispatch } from "react-redux";
import CheckLogIn from "../../auth/CheckLogIn";
import { trueLogin } from "../../Redux/actions/LoginAction";
import SnackBar from "../snackBar/SnackBar";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

import { useMediaQuery } from "react-responsive";
import CheckLoginForRegister from "../../auth/CheckLoginForRegister";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      By continuing you accept our{" "}
      <a href="/terms-and-conditions">Terms & Conditions</a> and{" "}
      <a href="/privacy-policy">Privacy Policy</a>{" "}
      {/* <Link color="inherit" href="https://www.instagram.com/arqamshakeel/">
        Family Mart made by Arqam Shakeel.
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = (props) => {
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
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
    },
    image: {
      backgroundImage: "url(./wp-content/uploads/2020/12/newlogin.jpeg)",
      backgroundSize: "cover",
      // backgkcroundRepeat: "cover",
      // backgroundColor:
      //   theme.palette.type === "light"
      //     ? theme.palette.grey[50]
      //     : theme.palette.grey[900],
      // // backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: isTabletOrMobile ? "0px" : "0px 100px 0px 100px",
    },
    icon: {
      margin: 15,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      //   padding: isTabletOrMobile ? "0px" : "0px 100px 0px 100px",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#3ba1da",
    },
    buttonSignIn: {
      backgroundColor: "#3ba1da",
    },
  }));

  const isLoggedInRedux = useSelector((state) => state.login.isloggedin);
  // console.log("redux is loggedin: " + isLoggedInRedux);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);

  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // userService.isLoggedin()
  //   ? console.log("Yes logged in")
  //   : console.log("Not logged in");

  const handleLogin = () => {
    setLoginProgress(true);
    userService
      .UserLogin({ email: email.toLowerCase(), password: password })
      .then(function (res) {
        props.history.push("/dashboard");
        setLoginProgress(false);
        // console.log(res);
        // console.log("hello");
      })
      .then(() => {
        userService.isLoggedin()
          ? dispatch(trueLogin())
          : console.log("Not logged in");
      })
      .catch(function (error) {
        setLoginProgress(false);
        console.log(error);
        setOpen(true);
        setmsg(error);
      });
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CheckLoginForRegister>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid item xs={false} sm={4} md={5} className={classes.image} />

        <Grid item xs={12} sm={8} md={7} square component={Paper}>
          <div className={classes.icon}>
            <CloseIcon
              onClick={() => {
                // console.log("====================================");
                // console.log(props.history.goBack());
                // console.log("====================================");
                // props.history.push("/");
                props.history.goBack();
              }}
              style={{
                float: "right",
                fontSize: "40px",
                margin: "0px",
                color: "rgba(24, 110, 184, 0.5)",
              }}
            />
          </div>
          <div className={classes.paper}>
            <a
              onClick={() => {
                this.props.history.push("/");
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src="./wp-content/uploads/2020/11/cropped-MetriMeo-Blue-300x78.png"
                alt=""
                height="50px"
              />
            </a>
            <br />
            <div style={{ width: "100%" }}>
              <hr />
            </div>
            <div
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "28px",
                textAlign: "center",
                fontWeight: "800",
              }}
            >
              Welcome Back!
            </div>
            <br />
            <p style={{ color: "#5D7280", fontSize: "15px" }}>
              New to MetriMeo?{" "}
              <a
                style={{ cursor: "pointer", color: "#E05414" }}
                onClick={() => {
                  props.history.push("register");
                }}
              >
                Sign Up
              </a>
            </p>
            <form className={classes.form}>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <SnackBar open={open} setOpen={setOpen} msg={msg} />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me signed in"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Login
              </Button>
              {/* <CircularProgress color="secondary" />; */}
              <CustomBackdrop open={loginProgress} setOpen={setLoginProgress} />
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item xs={12}>
                  <Link
                    variant="body2"
                    onClick={() => {
                      props.history.push("/forgetpassword");
                    }}
                  >
                    <a style={{ cursor: "pointer" }}>
                      {"Forgot your password?"}
                    </a>
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </CheckLoginForRegister>
  );
};
export default Login;
