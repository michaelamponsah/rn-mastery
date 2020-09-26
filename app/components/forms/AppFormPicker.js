import React from "react";
import { View, Text } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

const AppFormPicker = ({ items, name, placeholder }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <React.Fragment>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default AppFormPicker;
