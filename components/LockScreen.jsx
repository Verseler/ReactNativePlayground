// LockScreen.js
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const LockScreen = ({ onUnlock }) => {
  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.button} onPress={onUnlock}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
});

export default LockScreen;
