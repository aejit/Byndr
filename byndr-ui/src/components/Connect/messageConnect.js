import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MyProfileTitleBar from "../common/TitleBar/myprofileTitleBar";
import SideBar from "../common/sidebar";

import Messages from "../Connect/Messages/messages"
import GrpChat from "../Connect/Messages/grpChat"



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

export default function MessageConnect(props) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawer = (value) => {
    setOpenDrawer(value);
  };
  const classes = useStyles();
  return (
    <div>
      <SideBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <MyProfileTitleBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <main
        className={classes.content}
        style={{ marginLeft: openDrawer === true ? 232 : 56 }}
      >
        <div className={classes.content_mTop} />
        {props.content}
        <Router>
          <Route exact path="/connect/messages" component={Messages} />
          <Route exact path="/connect/messages/grpChat" component={GrpChat} />

        </Router>
      </main>
    </div>
  );
}
