import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React from "react";
// import { Button } from "reactstrap";
import { Button } from "@material-ui/core";
import CheckLogIn from "../../auth/CheckLogIn";
import userService from "../../services/UserService";
import SnackBar from "../snackBar/SnackBar";
import SuccessSnackBar from "../snackBar/SuccessSnackBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CustomAccountList from "./CustomAccountList";
import CustomBackdrop from "../backdrop/CustomBackdrop";
import fileUpload from "fuctbase64";
import ProfileAvatar from "./ProfileAvatar";
import NumberText from "../numberText/NumberText";
const Account = (props) => {
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [sOpen, setSOpen] = React.useState(false);
  const [Smsg, setSMsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);
  const [pageState, setPageState] = React.useState(0);

  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [userName, setUserName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [imgBase64, setImgBase64] = React.useState(null);
  const [check2, setCheck2] = React.useState(false);
  const [img, setImg] = React.useState({
    file: "",
  });

  React.useEffect(() => {
    if (userService.getloggedinuser()) {
      setFname(userService.getloggedinuser().name);
      setUserName(userService.getloggedinuser().username);
      setPhone(userService.getloggedinuser().phone);
      setEmail(userService.getloggedinuser().email);

      setImg({ file: userService.getloggedinuser().img });

      userService
        .getImg(userService.getloggedinuser()._id)
        .then((res) => {
          setImg({ file: res });
        })
        .catch(function (error) {});
    }
  }, []);

  React.useEffect(() => {
    console.log(pageState);
  }, [pageState]);
  var buffer = null;
  let check = 0;
  const handleImage = (event) => {
    fileUpload(event).then((data) => {
      //imgBase64 = data.base64;
      setImgBase64(data.base64);
      setCheck2(true);
      //buffer = Buffer.from(imgBase64, "utf-8");
      console.log(buffer + "buffer");
      var lengthInKB = data.size / 1000;
      console.log(data.size / 1000);
      //console.log(imgBase64);
      if (lengthInKB > 600) {
        alert("File size should not be greater than 600KB.");
        setImg({ file: "" });
      }
    });

    setImg({
      file: URL.createObjectURL(event.target.files[0]),
    });
    check = 1;
  };
  // React.useEffect(() => {
  //   console.log(img);
  // }, [img]);
  const handleUpdate = () => {
    setLoginProgress(true);

    userService
      .UserUpdate(userService.getloggedinuser()._id, {
        email: email.toLowerCase(),
        phone: phone,
        username: userName,
        fname: fname,
        img: "data:image/jpeg;base64," + imgBase64,
      })
      .then(function (res) {
        // props.history.push("/");
        setLoginProgress(false);
        setSOpen(true);
        setSMsg("Information updated!");
        // console.log(res);
        // console.log("hello");
      })
      .then(() => {
        // userService.isLoggedin()
        //   ? dispatch(trueLogin())
        //   : console.log("Not logged in");
        // props.history.push("/login");
      })
      .catch(function (error) {
        setLoginProgress(false);
        console.log(error);
        setOpen(true);
        setmsg(error.response.data);
      });
  };
  const handlePasswordChange = () => {
    setLoginProgress(true);
    if (password != confirmPassword) {
      setOpen(true);
      setmsg("Passwords do not match.");
      setLoginProgress(false);
      return;
    } else if (password.length < 5) {
      setOpen(true);
      setmsg("Password length must be greater than 4.");
      return;
    }
    userService
      .updatePassword2(userService.getloggedinuser()._id, {
        currentPassword: currentPassword,
        password: password,
      })
      .then(function (res) {
        setLoginProgress(false);
        setSOpen(true);
        setSMsg("Password updated!");
        setCurrentPassword("");
        setPassword("");
        setConfirmPassword("");
      })
      .then(() => {})
      .catch(function (error) {
        setLoginProgress(false);
        console.log(error);
        setOpen(true);
        setmsg(error.response.data);
      });
  };

  return (
    <CheckLogIn>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <br />
            <Paper
              elevation={1}
              style={{ margin: "0px", border: "1px solid black" }}
            >
              <div style={{ padding: "50px" }}>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: "30px",
                            fontWeight: "bold",
                          }}
                        >
                          Account
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          direction="column"
                          // justify="center"
                        >
                          <Grid item xs="auto" style={{ margin: "0px" }}>
                            <ProfileAvatar img={img}></ProfileAvatar>

                            <Typography
                              align="center"
                              variant="h6"
                              gutterBottom
                              style={{ fontWeight: "bold", margin: "10px" }}
                            >
                              {userService.getloggedinuser()
                                ? userService.getloggedinuser().name
                                : null}
                            </Typography>
                            <Button
                              style={{ marginTop: "10px" }}
                              variant="contained"
                              component="label"
                              //   className={classes.TextFieldMarginTop}
                            >
                              Upload Picture
                              <input
                                type="file"
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={(event) => {
                                  handleImage(event);
                                }}
                              />
                            </Button>
                          </Grid>
                        </Grid>
                        <CustomBackdrop
                          open={loginProgress}
                          setOpen={setLoginProgress}
                        />
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          // direction="column"
                          // justify="center"
                        >
                          <SnackBar open={open} setOpen={setOpen} msg={msg} />
                          <SuccessSnackBar
                            open={sOpen}
                            setOpen={setSOpen}
                            msg={Smsg}
                          />
                          <Grid item xs={12} md={7}>
                            <div>
                              <CustomAccountList
                                pageState={pageState}
                                setPageState={setPageState}
                              />
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Grid container direction="row" alignItems="center">
                      <AccountCircleIcon />

                      <Typography variant="h6">{"Account Details"}</Typography>
                    </Grid>
                    {pageState == 0 ? (
                      <div>
                        {/* <TextField
                          // value={email}
                          // onChange={(e) => {
                          //   setEmail(e.target.value);
                          // }}
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Username"
                          name="Username"
                        /> */}
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
                          // autoFocus
                        />

                        {/* <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Phone Number"
                          type="number"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        /> */}
                        <NumberText phone={phone} setPhone={setPhone} />
                        {/* <CountryNames /> */}
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="First Name"
                          name="Username"
                          autoComplete="name"
                          value={fname}
                          onChange={(e) => {
                            setFname(e.target.value);
                          }}
                          // autoFocus
                        />

                        {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me signed in"
              /> */}
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          // className={classes.submit}
                          onClick={handleUpdate}
                        >
                          Update Account
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <TextField
                          value={currentPassword}
                          onChange={(e) => {
                            setCurrentPassword(e.target.value);
                          }}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Current Password"
                          name="Username"
                          type="password"
                        />
                        <TextField
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="New password"
                          name="Username"
                          type="password"
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Confirm Password"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                        />
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          // className={classes.submit}
                          onClick={handlePasswordChange}
                        >
                          Update Password
                        </Button>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </CheckLogIn>
  );
};

export default Account;
