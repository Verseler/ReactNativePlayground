import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function TestExpoFeat() {
  console.log(1)
  const [res, setRes] = useState('empty');

  async function saveData(key, val) {
    try {
      await SecureStore.setItemAsync(key, val);
    }
    catch(error) {
      console.error(error);
    }
  }

  async function getData() {
    try {
      const value = await SecureStore.getItemAsync('key');
      setRes(value);
    }
    catch(error) {
      console.error(error);
    }
  }


  return(
    <View style={styles.container}>
      <Text>{res}</Text>
      <Button title="add" onPress={() => saveData('key', 'val1')} />
      <Button title="get" onPress={() => getData()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  }
})