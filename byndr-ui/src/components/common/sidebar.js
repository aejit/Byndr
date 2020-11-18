import React from "react";
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import { Grid, Toolbar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCertificate,
  faCog,
  faLayerGroup,
  faNewspaper,
  faPaperPlane,
  faUserCircle,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  parentGrid: {
    flex: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function SideBar(props) {
  // const theme = useTheme();
  const open = props.open != null ? props.open : false;
  const classes = useStyles();

  const handleDrawerClose = () => {
    props.setOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Grid
          className={classes.parentGrid}
          container
          direction="column"
          justify="space-between"
        >
          <Grid item>
            <Toolbar
              variant="dense"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton onClick={handleDrawerClose}>
                {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </Toolbar>
            <Divider />
            <List>
              <ListItem button key={"Home"} component={Link} to="/home">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCertificate} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListItem button key={"Discover"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faGalacticRepublic} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Discover"} />
              </ListItem>
              <ListItem button key={"Feed"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faLayerGroup} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Feed"} />
              </ListItem>
              <ListItem button key={"Library"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faBookmark} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Library"} />
              </ListItem>
              <ListItem button key={"Spaces"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faNewspaper} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Spaces"} />
              </ListItem>
              <ListItem button key={"Paths"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faPaperPlane} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Paths"} />
              </ListItem>
              <ListItem button key={"Broadcasts"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faVideo} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Broadcasts"} />
              </ListItem>
              <ListItem button key={"Learning Groups"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUsers} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary={"Learning Groups"} />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListItem
                button
                key={"Profile"}
                component={Link}
                to="/profile/settings"
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUserCircle} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary="My Account"></ListItemText>
              </ListItem>
              <ListItem
                button
                key={"Settings"}
                component={Link}
                to="/profile/settings"
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCog} size={"lg"} />
                </ListItemIcon>
                <ListItemText primary="Settings"></ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
