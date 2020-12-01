import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

// customizing MUI theme
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
      color: "#323232",
    },
  },
  btnRoot: {
    backgroundColor: "gray",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                className={classes.searchInput}
                placeholder="Search Anything"
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton classes={{ root: classes.btnRoot }}>
                <Badge badgeContent={4} color="secondary">
                  <AddAlertIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <AccountCircleIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
