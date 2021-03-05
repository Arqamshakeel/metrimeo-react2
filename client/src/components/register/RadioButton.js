import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  radio: {
    "&$checked": {
      color: "#3ba1da",
    },
  },
  checked: {},
}));

export default function RadioButton({ value, setValue }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Gender</FormLabel> */}
      <RadioGroup
        aria-label="gender"
        name="type"
        value={value}
        onChange={handleChange}
        // classes={classes.radioColor}
      >
        <FormControlLabel
          value="business"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Business"
        />
        <FormControlLabel
          style={{ marginTop: "-20px" }}
          value="individual"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Individual"
        />
      </RadioGroup>
    </FormControl>
  );
}
