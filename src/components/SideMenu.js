import React from "react";
import { withStyles, makeStyles } from "@material-ui/core";

// JSS
const style = {
  sideNav: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "320px",
    height: "100vh",
    backgroundColor: "#323232",
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideNav}></div>;
};

export default withStyles(style)(SideMenu);
