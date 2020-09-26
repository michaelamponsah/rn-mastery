import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingDetailsScreen />;
  // return <ListingEditScreen />;
}
