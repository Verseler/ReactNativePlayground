import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { ProgressBar, MD3Colors, Button } from "react-native-paper";
import * as ScreenOrientation from "expo-screen-orientation";
import { Accelerometer } from "expo-sensors";


function App() {
  const [data, setData] = useState(0.5);


  useEffect(() => {
    const subscription = Accelerometer.addListener((dat) => {
      const filteredZ = lowPassFilter(dat.z, data);
      console.log(filteredZ)
      setData(filteredZ);
    });

    return () => subscription.remove();
  }, []);

  
  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }, [])


  const lowPassFilter = (currentValue, previousValue) => {
    const dt = 1.0 / 50.0;
    const RC = 0.15;
    const alpha = dt / (RC + dt);

    return alpha * currentValue + (1.0 - alpha) * previousValue;
  };


  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: 100, backgroundColor: "skyblue" }}>
      <ProgressBar
        style={{ height: 30, borderWidth: 1, transform: [{ rotate: "90deg" }] }}
        progress={data}
        anim
        color={MD3Colors.error50}
      />
    </View>
  );
}

export default App;
