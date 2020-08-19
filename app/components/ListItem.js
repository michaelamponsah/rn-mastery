import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

const ListItem = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.userDetails}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
  userDetails: {
    justifyContent: "center",
  },
});
export default ListItem;
