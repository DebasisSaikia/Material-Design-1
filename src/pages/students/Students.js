import React from "react";
import Page from "../../components/Page";
import StudentForm from "./StudentForm";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { makeStyles, Paper } from "@material-ui/core";

// custom styles
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Students = () => {
  const classes = useStyles();
  return (
    <>
      <Page
        title="Student Form"
        description="Job application"
        icon={<AccessibilityIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <StudentForm />
      </Paper>
    </>
  );
};

export default Students;
