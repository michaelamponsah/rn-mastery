import { useEffect, useState } from "react";
import * as Location from "expo-location";
// This custom hook encapsulates the location state as well as the logic associated with this state
export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      if (!response.granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error getting location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
