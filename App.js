import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import TestExpoFeat from "./components/TestExpoFeat";
import TestNavigation from "./components/TestNavigation";

export default function App() {
  return (
    <View>
      <TestNavigation />
    </View>
  );
}
