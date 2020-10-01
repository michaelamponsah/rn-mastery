import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../AppText";

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return (
    <View style={styles.container}>
      <AppText style={styles.errorMessage}>{error}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: "center",
  },
  errorMessage: {
    color: "#ff9494",
    fontSize: 19,
    paddingHorizontal: 20,
  },
});
export default AppErrorMessage;
