import { ThemeProvider } from "@rneui/themed";
import theme from "./theme";
import Demo from "./Demo";
import { StatusBar } from "expo-status-bar";

function TempApp() {
  return (
    <ThemeProvider theme={theme}>
      <Demo />
    </ThemeProvider>
  );
}

export default TempApp;
