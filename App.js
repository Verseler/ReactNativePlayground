import React, { useState, useRef, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [myLocation, setMyLocation] = useState({
    latitude: 8.477217,
    longitude: 124.64592,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef();
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "Point 1",
      description: "",
      coordinates: { latitude: 8.4268, longitude: 124.6403 },
      showDetails: false,
    },
    {
      id: 2,
      title: "Point 2",
      description: "",
      coordinates: { latitude: 8.4206, longitude: 124.6355 },
      showDetails: false,
    },
    {
      id: 3,
      title: "Point 3",
      description: "",
      coordinates: { latitude: 8.429, longitude: 124.6457 },
      showDetails: false,
    },
    {
      id: 4,
      title: "Point 4",
      description: "",
      coordinates: { latitude: 8.4185, longitude: 124.6328 },
      showDetails: false,
    },
    {
      id: 5,
      title: "Point 5",
      description: "",
      coordinates: { latitude: 8.422, longitude: 124.6395 },
      showDetails: false,
    },
  ]);

  useEffect(() => {
    askLocationPermission();
  }, []);

  async function askLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setMyLocation((prevMyLocation) => {
      return {
        ...prevMyLocation,
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      };
    });
  }
  const onMarkerSelected = (marker) => {
    Alert.alert(marker.title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={myLocation}
          region={myLocation}
          // showsMyLocationButton={true}
          showsUserLocation={true}
          ref={mapRef}
        >
          {users.map((user) => (
            <Marker
              key={user.id}
              onPress={() => onMarkerSelected(user)}
              coordinate={{
                latitude: user.coordinates.latitude,
                longitude: user.coordinates.longitude,
              }}
            >
              <Image
                source={require("./assets/customMarkerHeart.png")}
                style={{
                  width: 35,
                  height: 35,
                  objectFit: "contain",
                }}
              />
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {},
  map: {
    width: "100%",
    height: "100%",
  },
});
