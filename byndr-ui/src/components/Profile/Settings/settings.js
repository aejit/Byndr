import {
  Avatar,
  Badge,
  Button,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import React from "react";
import Shell from "../../common/shell";
import EditIcon from "@material-ui/icons/Edit";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import AllOutTwoToneIcon from "@material-ui/icons/AllOutTwoTone";
import AspectRatioTwoToneIcon from "@material-ui/icons/AspectRatioTwoTone";
import BrightnessAutoTwoToneIcon from "@material-ui/icons/BrightnessAutoTwoTone";
import ChildCareTwoToneIcon from "@material-ui/icons/ChildCareTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  b_rt: {
    borderRight: "1px solid lightgray",
  },
  b_tp: {
    borderTop: "1px solid lightgray",
    marginTop: 20,
  },
  b_bm: {
    borderBottom: "1px solid lightgray",
  },
}));

export default function Settings() {
  const classes = useStyles();
  const settingsContent = () => {
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid container xs={12} sm={4} className={classes.b_rt}>
            <Grid
              container
              direction="column"
              justify="start"
              alignItems="center"
              spacing={2}
              style={{ paddingTop: 50 }}
            >
              <Grid item>
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={<EditIcon fontSize="small" />}
                >
                  <Avatar
                    className={`${classes.large} ${classes.v_mar}`}
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </Badge>
              </Grid>
              <Grid item>
                <Typography variant="h5" className={classes.v_mar}>
                  Edit Profile Image
                </Typography>
              </Grid>
              <Grid item direction="row" className={classes.v_mar}>
                <Button
                  style={{ marginRight: 15 }}
                  variant="contained"
                  color="primary"
                >
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
              <Grid item>
                <Grid container direction="row" spacing={3}>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={3}>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={3}>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={3}>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                  <Grid item>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    ></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} direction="column">
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

            <Grid
              container
              xs={12}
              sm={12}
              spacing={4}
              className={classes.b_tp}
            >
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    First Name
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Enter First Name"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    Last Name
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Enter Last Name"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} spacing={4}>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    My Status
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Type here"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    Location
                  </Typography>
                  <OutlinedInput
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="City, Country"
                    endAdornment={
                      <InputAdornment position="end">
                        <LocationOnIcon color="primary" />
                      </InputAdornment>
                    }
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} spacing={4}>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    About
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Describe Yourself"
                    multiline
                    rows={5}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    Date of Birth
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Enter date of birth"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} spacing={4}>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    Organisation
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Type here"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    Designation
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Type here"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sm={12}
              spacing={4}
              className={`${classes.b_tp} ${classes.b_bm}`}
            >
              <Grid item xs={12} sm={8}>
                <div>
                  <Typography color="default" gutterBottom variant="body1">
                    Social Links
                  </Typography>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="+ Add Your Website"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <IconButton>
                  <AccountBalanceTwoToneIcon color="primary" />
                </IconButton>
                <IconButton>
                  <AllOutTwoToneIcon />
                </IconButton>
                <IconButton>
                  <AspectRatioTwoToneIcon />
                </IconButton>
                <IconButton>
                  <AccountBalanceTwoToneIcon />
                </IconButton>
                <IconButton>
                  <BrightnessAutoTwoToneIcon />
                </IconButton>
                <IconButton>
                  <ChildCareTwoToneIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div>
                  <TextField
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => {}}
                    size="small"
                    fullWidth
                    placeholder="Enter Url"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Button
                  style={{ marginRight: 15 }}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button variant="contained" color="default">
                  Cancel
                </Button>
              </Grid>
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
