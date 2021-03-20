import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import CardWithIcon from "./CardWithIcon";
import DataReviewIcon from "./DataReviewIcon";

import StatusBar from "./StatusBar";
const Dashboard = () => {
  return (
    <div style={{ padding: "40px" }}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <StatusBar />
          <br />
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" gutterBottom>
              What would you like to do today?
            </Typography>
          </Grid>
          <Paper style={{ width: "100%", padding: "10px" }} elevation={3}>
            <Grid container>
              <Grid xs={12} md={6}>
                <CardWithIcon />
              </Grid>
              <Grid xs={12} md={6}>
                <DataReviewIcon />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
