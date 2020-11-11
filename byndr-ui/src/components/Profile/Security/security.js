import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import React from "react";
import Shell from "../../common/shell";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input_grid: {
    borderTop: "1px solid lightgray",
    marginTop: 20,
  },
  txtFields: {
    width: 350,
    marginRight: 15,
  },
}));

export default function Security(props) {
  const classes = useStyles();
  const securityContent = () => {
    return (
      <div className={classes.root}>
        <Grid
          xs={12}
          sm={12}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item direction="row" alignContent="center">
            <span variant="subtitle1" style={{ marginRight: 20 }}>
              Account Privacy
            </span>
            <FormControl variant="outlined">
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
          <Typography>Changes Saved</Typography>
        </Grid>
        <Grid container xs={12} sm={12} direction="column">
          <Grid
            container
            xs={12}
            sm={12}
            direction="column"
            className={classes.input_grid}
          >
            <div style={{ marginTop: 20 }}>
              <Typography color="default" gutterBottom variant="body1">
                Email
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <TextField
                  className={classes.txtFields}
                  id="standard--flexible"
                  variant="outlined"
                  onChange={() => {}}
                  size="small"
                  placeholder="Enter Email Address"
                />
                <Button color="primary" variant="outlined">
                  Update
                </Button>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <Typography color="default" gutterBottom variant="body1">
                Phone
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <TextField
                  className={classes.txtFields}
                  id="standard--flexible"
                  variant="outlined"
                  onChange={() => {}}
                  size="small"
                  placeholder="Enter Phone"
                />
                <Button color="primary" variant="outlined">
                  Update
                </Button>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <Typography color="default" gutterBottom variant="body1">
                Change Password
              </Typography>
              <OutlinedInput
                className={classes.txtFields}
                id="standard--flexible"
                variant="outlined"
                onChange={() => {}}
                size="small"
                placeholder="Type Current Password"
                endAdornment={
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                }
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  marginTop: 20,
                }}
              >
                <OutlinedInput
                  className={classes.txtFields}
                  id="standard--flexible"
                  variant="outlined"
                  onChange={() => {}}
                  size="small"
                  placeholder="Type New Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  }
                />
                <OutlinedInput
                  className={classes.txtFields}
                  id="standard--flexible"
                  variant="outlined"
                  onChange={() => {}}
                  size="small"
                  placeholder="Confirm New Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  }
                />
                <Button color="primary" variant="outlined">
                  Update
                </Button>
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            container
            className={classes.input_grid}
            direction="column"
          >
            <Grid
              style={{ marginTop: 20 }}
              container
              direction="row"
              alignItems="center"
            >
              <Typography style={{ marginRight: 30 }}>My Devices</Typography>
              <Typography variant="h6" color="primary">
                2 Active
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Grid
                container
                direction="column"
                style={{
                  padding: "5px 10px",
                  borderRadius: 5,
                  border: "1px solid lightgray",
                  width: 300,
                  marginRight: 20,
                }}
              >
                <Typography>Mac</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography>Telangana, India</Typography>
                  <Typography color="primary" style={{ fontSize: 12 }}>
                    This Device
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{
                  padding: "5px 10px",
                  borderRadius: 5,
                  border: "1px solid lightgray",
                  width: 300,
                  marginRight: 20,
                }}
              >
                <Typography>Redmi Note Pro</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography>Telangana, India</Typography>
                  <Typography color="primary" style={{ fontSize: 12 }}>
                    Sign Out
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            direction="column"
            className={classes.input_grid}
            style={{ paddingTop: 20 }}
          >
            <Typography>Two-Step Verification</Typography>
            <Grid direction="row" style={{ paddingTop: 15 }}>
              <Button
                style={{ marginRight: 20 }}
                variant="contained"
                color="primary"
              >
                On
              </Button>
              <Button variant="outlined" color="primary">
                Off
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.input_grid}
            xs={12}
            sm={12}
            direction="row"
            alignItems="center"
            style={{ paddingTop: 20 }}
          >
            <Typography style={{ marginRight: 20 }}>
              Device that remember your password
            </Typography>
            <Typography variant="h6" color="primary">
              Details
            </Typography>
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
