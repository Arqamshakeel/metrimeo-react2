import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React from "react";
import { Button } from "reactstrap";
import CheckLogIn from "../../auth/CheckLogIn";
import userService from "../../services/UserService";
import SnackBar from "../snackBar/SnackBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CustomAccountList from "./CustomAccountList";
import ProfileAvatar from "./ProfileAvatar";
const Account = () => {
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);

  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
                            <ProfileAvatar></ProfileAvatar>

                            <Typography
                              align="center"
                              variant="h6"
                              gutterBottom
                              style={{ fontWeight: "bold", margin: "10px" }}
                            >
                              {userService.getloggedinuser().name}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          // direction="column"
                          // justify="center"
                        >
                          <Grid item xs={12}>
                            <div style={{ margin: "0px 100px 0px 100px" }}>
                              <CustomAccountList />
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container direction="row" alignItems="center">
                      <AccountCircleIcon />

                      <Typography variant="h6">{"Account Details"}</Typography>
                    </Grid>
                    <TextField
                      // value={email}
                      // onChange={(e) => {
                      //   setEmail(e.target.value);
                      // }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      label="Username"
                      name="Username"
                      autoComplete="name"
                    />
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
                    <SnackBar open={open} setOpen={setOpen} msg={msg} />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      label="Phone Number"
                      type="number"
                      // value={password}
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                      // autoComplete="current-password"
                    />
                    {/* <CountryNames /> */}
                    <TextField
                      // value={email}
                      // onChange={(e) => {
                      //   setEmail(e.target.value);
                      // }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      label="First Name"
                      name="Username"
                      autoComplete="name"
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
                      // onClick={handleLogin}
                    >
                      Update Account
                    </Button>
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
