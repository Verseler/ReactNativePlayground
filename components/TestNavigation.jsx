import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { name: "Verseler" })}
      />
    </View>
  );
};

const Profile = ({ navigation, route }) => {
  //we can accept value pass from the previous page in the stackas params
  //by accessing it as route with route.params
  return (
    <View>
      <Text>Profile</Text>
      <Text>This is {route.params.name}'s Profile</Text>
      {/* navigate or go to the home page */}
      <Button
        title="Go back home"
        onPress={() => navigation.navigate("Home")}
      />
      {/* go back to previous page in the stack */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* go back to the first screen in the stack
        this is good for deep stack and you want to back to the first page
        by skipping other page in the stack
        kind of the sa navigate
        */}
      <Button title="Go back home" onPress={() => navigation.popToTop()} />
      {/* forcefuly go to the profile page evethough its already in the profile page
        this will push or create new stack for profile
      */}
      <Button
        title="Go Profile again!"
        onPress={() => navigation.push("Profile")}
      />
    </View>
  );
};

const TestNavigation = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TestNavigation;
