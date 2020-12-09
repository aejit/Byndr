import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MyProfileTitleBar from "../common/TitleBar/myprofileTitleBar";
import SideBar from "../common/sidebar";

import EditProfile from "./EditProfile/EditProfile"
import Path from "./Paths/path"
import People from "./People/people"



const useStyles = makeStyles((theme) => ({
  marginSmall: {
    marginRight: 12,
  },
  marginLarge: {
    marginRight: 36,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  content_mTop: {
    marginTop: 40,
  },
}));

export default function Myprofile(props) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawer = (value) => {
    setOpenDrawer(value);
  };
  const classes = useStyles();
  return (
    <div>
      <SideBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <MyProfileTitleBar />
      <main
        className={classes.content}
        style={{ marginLeft: openDrawer === true ? 232 : 56 }}
      >
        <div className={classes.content_mTop} />
        {props.content}
        <Router>
          <Route exact path="/myProfile/editProfile" component={EditProfile} />
          <Route exact path="/myProfile/myPath" component={Path} />
          <Route exact path="/myProfile/people" component={People} />

        </Router>
      </main>
    </div>
  );
}
