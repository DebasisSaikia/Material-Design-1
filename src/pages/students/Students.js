import React, { useState } from "react";
import Page from "../../components/Page";
import StudentForm from "./StudentForm";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import useTable from "../../components/useTable";
import * as stuService from "../../services/stuService";

// custom styles
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullName", label: "Student Name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile No" },
  { id: "deptId", label: "Department" },
];

const Students = () => {
  const classes = useStyles();
  // getting all students data
  const [records, setRecords] = useState(stuService.getAllStudents());
  // table container
  const { TabContainer, TabHead, TabPaginate, sortingRecords } = useTable(
    records,
    headCells
  );
  return (
    <>
      <Page
        title="Student Form"
        description="Job application"
        icon={<AccessibilityIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/* <StudentForm /> */}
        <TabContainer>
          <TabHead />
          <TableBody>
            {sortingRecords().map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.fullName}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.mobile}</TableCell>
                <TableCell>{record.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TabContainer>
        <TabPaginate />
      </Paper>
    </>
  );
};

export default Students;
