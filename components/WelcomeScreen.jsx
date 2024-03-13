import { Image, View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://seeklogo.com/images/D/design-sample-logo-3FBBE20907-seeklogo.com.png",
            height: 100,
            width: 100,
          }}
        />
        <Text>Set What you Don't Need</Text>
      </View>

      <View style={[styles.loginBtn, styles.button]} />
      <View style={[styles.signupBtn, styles.button]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },  
  button: {
    height: 80,
    width: "100%"
  },
  loginBtn: {
    backgroundColor: "red",
  },
  signupBtn: {
    backgroundColor: "lightgreen",
  },
});
