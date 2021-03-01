import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function ProfileAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://www.metrimeo.com/wp-content/uploads/ultimatemember/15/profile_photo-190x190.jpg?1614258950"
        className={classes.large}
      />
    </div>
  );
}
