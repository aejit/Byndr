import {
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import Shell from "../../common/shell";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Security(props) {
  const classes = useStyles();
  const securityContent = () => {
    return (
      <div className={classes.root}>
        <Grid container xs={12} sm={12} direction="column">
          <Grid
            xs={12}
            sm={12}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item direction="row">
              <span style={{ marginRight: 20 }}>Account Privacy</span>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={10}
                  onChange={() => {}}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Private Account</MenuItem>
                  <MenuItem value={20}>Public Account</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography>Changes Saved</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <div>
      <Shell content={securityContent()} />
    </div>
  );
}
