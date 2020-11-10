import React from "react";
import SideBar from "./sidebar";
import { makeStyles } from "@material-ui/core/styles";
import TitleBar from "./titleBar";

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

export default function Shell(props) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawer = (value) => {
    setOpenDrawer(value);
  };
  const classes = useStyles();
  return (
    <div>
      <SideBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <TitleBar open={openDrawer} setOpenDrawer={handleDrawer} />
      <main
        className={classes.content}
        style={{ marginLeft: openDrawer === true ? 232 : 56 }}
      >
        <div className={classes.content_mTop} />
        {props.content}
      </main>
    </div>
  );
}
