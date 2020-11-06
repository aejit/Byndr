import {
  Avatar,
  Button,
  ButtonBase,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Label } from "@material-ui/icons";
import React from "react";
import Shell from "../../common/shell";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Settings(props) {
  const classes = useStyles();
  const settingsContent = () => {
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Grid item direction="column">
              <Typography>Edit Profile Image</Typography>
              <Grid item justify="space-between" direction="row">
                <Button variant="contained" color="primary">
                  Upload
                </Button>
                <Button variant="contained" color="default">
                  Remove
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Select from library
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} direction="column">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div>Account Privacy</div>
              <div>Changes Saved</div>
            </div>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <div>
      <Shell content={settingsContent()} />
    </div>
  );
}
