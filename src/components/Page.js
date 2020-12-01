import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdfd",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#EAB543",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
  },
}));

const Page = (props) => {
  const { title, description, icon } = props;
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
          <Card className={classes.pageIcon}>{icon}</Card>
          <div className={classes.pageTitle}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="subtitle2" component="div">
              {description}
            </Typography>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Page;
