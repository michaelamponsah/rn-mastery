import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={routes.LISTINGS}
        component={ListingsScreen}
        options={{
          headerTitle: "Listings",
        }}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        options={{ headerTitle: "Listing Details" }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
