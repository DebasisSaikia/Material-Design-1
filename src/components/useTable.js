import {
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: " #000",
      backgroundColor: "#f1c40f",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

const useTable = (records, headCells) => {
  const classes = useStyles();

  // paginations
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [itemPage, setItemPage] = useState(pages[page]);

  // sorting function
  const [order, setOrder] = useState();
  const [orderby, setOrderby] = useState();

  const TabContainer = (props) => {
    return <Table className={classes.table}>{props.children}</Table>;
  };

  const TabHead = (props) => {
    // sorting onclick
    const handleSort = (cellId) => {
      const isAsc = orderby === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderby(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>
              <TableSortLabel
                active={orderby === headCell.id}
                direction={orderby === headCell.id ? order : "asc"}
                onClick={() => handleSort(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  // pagination function
  const handlePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleRowsPage = (e) => {
    setItemPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const TabPaginate = () => {
    return (
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={itemPage}
        count={records.length}
        onChangePage={handlePage}
        onChangeRowsPerPage={handleRowsPage}
      />
    );
  };

  // sorting function
  const sortingRecords = () => {
    return records.slice(page * itemPage, (page + 1) * itemPage);
  };

  return {
    TabContainer,
    TabHead,
    TabPaginate,
    sortingRecords,
  };
};

export default useTable;
