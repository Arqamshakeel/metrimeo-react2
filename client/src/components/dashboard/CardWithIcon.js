import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import SpeedIcon from "@material-ui/icons/Speed";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardWithIcon() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ width: "100%", textAlign: "center" }}>
          <SpeedIcon style={{ fontSize: "100px", color: "purple" }} />
        </div>

        <div>
          <hr />
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Improve your credit
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}
