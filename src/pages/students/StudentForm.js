import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Controls from "../../components/controls/Controls";
import * as stuService from "../../services/stuService";
import { useForm, Form } from "../../components/useForm";

// radio groups items
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

// initial values of students
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  deptId: "",
  dob: new Date(),
  isPresent: false,
};

const StudentForm = () => {
  // form validation
  const validate = (fieldValues = values) => {
    let temp = {...errors};

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("deptId" in fieldValues)
      temp.deptId =
        fieldValues.deptId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
     if (fieldValues == values)
    return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    handleInput,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("test!!!!!");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              variant="outlined"
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleInput}
              error={errors.fullName}
            />
            <Controls.Input
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInput}
              error={errors.email}
            />
            <Controls.Input
              variant="outlined"
              label="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInput}
              error={errors.mobile}
            />
            <Controls.Input
              variant="outlined"
              label="City"
              name="city"
              value={values.city}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroups
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInput}
              items={genderItems}
            />
            <Controls.Select
              name="deptId"
              label="Department"
              value={values.deptId}
              onChange={handleInput}
              options={stuService.getDeptCollection()}
              error={errors.deptId}
            />
            <Controls.DatePicker
              name="dob"
              label="Date of Birth"
              value={values.dob}
              onChange={handleInput}
            />
            <Controls.Checkbox
              name="isPresent"
              label="Present"
              value={values.isPresent}
              onChange={handleInput}
            />
            <div>
              <Controls.Button type="submit" size="large" text="Submit" />
              <Controls.Button
                onClick={resetForm}
                color="default"
                text="Submit"
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default StudentForm;
