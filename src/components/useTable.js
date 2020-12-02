import { Table } from "@material-ui/core";
import React from "react";

const useTable = (record, headCells) => {
  const tabContainer = (props) => {
    <Table>{props.children}</Table>;
  };
  return {
    tabContainer,
  };
};

export default useTable;
