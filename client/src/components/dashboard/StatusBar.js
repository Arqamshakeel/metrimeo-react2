import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { Grid, Paper, Typography } from "@material-ui/core";
const StatusBar = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" gutterBottom>
            Here is your credit snapshot
          </Typography>
        </Grid>
        <Paper style={{ width: "100%", padding: "10px" }} elevation={3}>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid
                container
                item
                xs={1}
                justify="center"
                alignItems="center"
                style={{ height: "100%", fontWeight: "bold" }}
              >
                {/* <div>300</div> */}
              </Grid>
              <Grid item xs={10} style={{ height: "100%" }}>
                <div>
                  <Progress percent={"88"} />
                  <Grid container item justify="center" align="center">
                    <div
                      style={{
                        height: "100%",
                        fontWeight: "bold",
                        fontSize: "50px",
                      }}
                    >
                      786
                    </div>
                  </Grid>
                </div>
              </Grid>
              <Grid
                item
                xs={1}
                container
                item
                justify="center"
                alignItems="center"
                style={{ height: "100%", fontWeight: "bold" }}
              >
                {/* <div>850</div> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={12}>
              <hr />
              <Grid container>
                <Grid item xs={4}>
                  <div style={{ fontSize: "25px", marginBottom: "10px" }}>
                    Credit Usage
                  </div>
                  <div style={{ color: "red" }}>0%</div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ fontSize: "25px", marginBottom: "10px" }}>
                    Total Debt
                  </div>
                  <div style={{ color: "green" }}>$124,614</div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ fontSize: "25px", marginBottom: "10px" }}>
                    Open Accounts
                  </div>
                  <div>3</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default StatusBar;
