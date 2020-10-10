import * as React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ProgressViewIOS,
  Button,
} from "react-native";

export default function App() {
  const onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={{ padding: 50 }}>
      <ProgressViewIOS progress={0.5} />
      <ActivityIndicator size="large" color="#61DBF" />
      <Button title="click me" onPress={onButtonPress} />
    </View>
  );
}
