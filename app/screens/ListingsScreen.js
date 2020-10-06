import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const ListingsScreen = ({ navigation }) => {
  // State variable to store the listings received from the server
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  // LOAD LISTINGS THE FIRST TIME THE COMPONENT GETS RENDERED
  useEffect(() => {
    loadListings();
  }, []);

  // FUNCTION TO GET ALL LISTINGS
  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <View style={styles.screen}>
      {error && (
        // If for some reason, listings are not returned from the server, display the view below
        <View style={styles.error}>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </View>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 5,
  },
});
export default ListingsScreen;
