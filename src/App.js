import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import SideMenu from "./components/SideMenu";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

// theme customization
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d35400",
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
          <Page
            title="Debasis Saikia"
            description="Developer"
            icon={<AccessibilityIcon fontSize="large" />}
          />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
