import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";

function App() {
  const [orientation, setOrientation] = useState(1);

  useEffect(() => {
    // checkOrientation();

    // const subscription = ScreenOrientation.addOrientationChangeListener(
    //   handleOrientationChange
    // );
    // return () => {
    //   ScreenOrientation.removeOrientationChangeListeners(subscription);
    // };
    lockOrientation();
  }, []);
  
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    console.log("orientation", orientation);
  };

  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };

  return <View style={styles.container}>
  <Text>ORIENTATION: {orientation}</Text>
  <StatusBar style="auto" />
</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
