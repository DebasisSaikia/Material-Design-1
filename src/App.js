import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Students from "./pages/students/Students";

// theme customization
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f39c12",
      light: "#e67e22",
    },
    secondary: {
      main: "#8e44ad",
      light: "#9b59b6",
    },
    background: {
      default: "#dfe6e9",
    },
  },
  shape: {
    borderRadius: "none",
  },
  overrides: {
    MuiAppBar: {
      root: { transform: "translateZ(0)" },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
      disableFocusRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "20rem",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />

          <Students />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
