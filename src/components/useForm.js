import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  //   onchange function
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInput,
  };
};

// reusable form
export const Form = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
};
