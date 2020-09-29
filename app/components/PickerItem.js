import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppText from "./AppText";
import { TouchableOpacity } from "react-native";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
