import { Button, Badge } from "@rneui/base";
import { makeStyles, useTheme, useThemeMode } from "@rneui/themed";
import { View } from "react-native";

function Demo() {
  const { theme, updateTheme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Button
        title="Click me"
        onPress={() => updateTheme({ colors: { primary: "red" } })}
      />
      <Button title="dark" onPress={() => setMode("dark")} />
      <Button title="light" onPress={() => setMode("light")} />
    </View>
  );
}

export default Demo;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.white,
    height: "100%",
  },
}));
