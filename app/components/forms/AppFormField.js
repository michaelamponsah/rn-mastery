import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

const AppFormField = ({ name, ...otherProps }) => {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <React.Fragment>
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
      <AppTextInput
        onBlur={() => {
          setFieldTouched(name);
        }}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
    </React.Fragment>
  );
};

export default AppFormField;
