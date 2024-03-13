import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";


export default function TestComponents() {
  const [list, setList] = useState(["First"]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    },2000)
  }

  const textList = list.map((item) => (
    <Text style={{ fontSize: 50, color: "gold" }}>{item}</Text>
  ));

  const handleOnClick = () => {
    const newList = "untitled";
    setList((prevList) => [...prevList, newList]);
  };


  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
        source={{
          uri: "https://img.lovepik.com/background/20211101/medium/lovepik-furniture-life-mobile-wallpaper-background-image_400568969.jpg",
        }}
      >
        {/* <WelcomeScreen /> */}
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <Text style={[styles.buttonTitle, { fontSize: 50, color: "blue" }]}>
              {item}
            </Text>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />

        <TouchableNativeFeedback onPress={handleOnClick}>
          <View style={styles.button}>
            <Text style={[styles.buttonTitle]}>Add List</Text>
          </View>
        </TouchableNativeFeedback>
        <Text>{Platform.OS}</Text>
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            placeholder="Type something here"
            style={{
              borderWidth: 1,
              padding: 20,
              backgroundColor: "lightgray",
              marginHorizontal: 10,
            }}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}



const styles = StyleSheet.create({
  button: {
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "lightblue",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
