import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import TestExpoFeat from "./components/TestExpoFeat";

export default function App() {
  return (
    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <TestExpoFeat />
    </SafeAreaView>
  );
}
