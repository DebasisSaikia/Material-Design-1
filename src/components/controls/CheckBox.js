import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

const CheckBox = (props) => {
  const { name, label, onChange, value } = props;

  const convert = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <>
      <FormControl>
        <FormControlLabel
          control={
            <MuiCheckbox
              name={name}
              color="primary"
              checked={value}
              onChange={(e) => onChange(convert(name, e.target.checked))}
            />
          }
          label={label}
        />
      </FormControl>
    </>
  );
};

export default CheckBox;
