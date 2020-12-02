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

export const useForm = (initialValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  //   onchange function
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  // form resetting
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleInput,
    errors,
    setErrors,
    resetForm,
  };
};

// reusable form
export const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};
