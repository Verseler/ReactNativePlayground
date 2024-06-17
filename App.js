import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Accelerometer } from "expo-sensors";

import { DatePickerInput } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enGB, registerTranslation } from "react-native-paper-dates";
registerTranslation("en-GB", enGB);

function App() {
  const [orientation, setOrientation] = useState(1);
  const [data, setData] = useState(0.5);

  // useEffect(() => {
  //   const subscription = Accelerometer.addListener((dat) => {
  //     const filteredZ = lowPassFilter(dat.z, data);
  //     console.log(filteredZ.toFixed(2));
  //     setData(filteredZ);
  //   });

  //   return () => subscription.remove();
  // }, []);

  function convertRange(x, in_min, in_max, out_min, out_max) {
    // Calculate the scale factor
    let scaleFactor = (out_max - out_min) / (in_max - in_min);

    // Apply the transformation
    return out_min + (x - in_min) * scaleFactor;
  }

  const lowPassFilter = (currentValue, previousValue) => {
    const dt = 1.0 / 50.0;
    const RC = 0.15;
    const alpha = dt / (RC + dt);

    return alpha * currentValue + (1.0 - alpha) * previousValue;
  };

  useEffect(() => {
    // checkOrientation();
    // const subscription = ScreenOrientation.addOrientationChangeListener(
    //   handleOrientationChange
    // );
    // return () => {
    //   ScreenOrientation.removeOrientationChangeListeners(subscription);
    // };
    // lockOrientation();
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

  function convertRange(x, in_min, in_max, out_min, out_max) {
    // Calculate the scale factor
    let scaleFactor = (out_max - out_min) / (in_max - in_min);

    // Apply the transformation
    return out_min + (x - in_min) * scaleFactor;
  }

  // Example usage
  let originalValue = 90;
  let originalMin = 85;
  let originalMax = 95;
  let newMin = 1;
  let newMax = 100;

  const [inputDate, setInputDate] = useState(undefined);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <View style={styles.timer}>
            <Feather
              style={styles.clockIcon}
              name="clock"
              size={26}
              color="red"
            />
            <Text style={styles.time}>00:00</Text>
          </View>
          <Feather
            style={styles.moreButton}
            name="more-vertical"
            size={24}
            color="black"
          />
        </View>

        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <DatePickerInput
            locale="en"
            label="Birthdate"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
        </View>
        {/* <View style={styles.body}>
        <AnimatedCircularProgress
          arcSweepAngle={240}
          rotation={240}
          size={140}
          width={24}
          fill={0}
          tintColor="red"
          backgroundColor="#D9D9D9"
        >
          {() => (
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "red",
                }}
              >
                2.5
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "semibold",
                  textAlign: "center",
                  color: "red",
                }}
              >
                DEPTH
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          arcSweepAngle={240}
          rotation={240}
          size={300}
          width={50}
          fill={convertRange(data.toFixed(2) * 100, 100, 108, 1, 100)}
          tintColor="red"
          backgroundColor="#D9D9D9"
        >
          {() => (
            <View>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              > */}
        {/* Push Harder */}
        {/* {convertRange(data.toFixed(2) * 100, 100, 108, 1, 100)} */}
        {/* </Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          arcSweepAngle={240}
          rotation={240}
          size={140}
          width={24}
          fill={0}
          tintColor="red"
          backgroundColor="#D9D9D9"
        >
          {() => (
            <View>
              <Text
                style={{
                  fontSize: 38,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "red",
                }}
              >
                2
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: "semibold",
                  textAlign: "center",
                  color: "red",
                }}
              >
                COMPRESSION
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View> */}
        <StatusBar style="auto" hidden />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appBar: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  time: {
    color: "red",
    fontSize: 20,
    fontWeight: "semibold",
  },
  moreButton: {
    backgroundColor: "#F6F6F6",
    position: "absolute",
    right: 10,
    padding: 10,
    borderRadius: 20,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 40,
  },
  depthIndicatorBar: {
    height: 50,
    width: 200,
    backgroundColor: "red",
    transform: [{ rotate: "90deg" }],
  },
});

export default App;
