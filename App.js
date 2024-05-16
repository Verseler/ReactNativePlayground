// App.js or your main component
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LockScreen from "./components/LockScreen";

const App = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [sample, setSample] = useState(1);

  const handleLock = () => {
    setIsLocked(true);
  };

  const handleUnlock = () => {
    setIsLocked(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={console.log(sample)} title="Press Me" />
      <Text>Your main content goes here</Text>

      <Button title="Lock Screen" onPress={handleLock} />
      {isLocked && <LockScreen onUnlock={handleUnlock} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default App;
