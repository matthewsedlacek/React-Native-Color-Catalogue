import * as React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ProgressViewIOS,
  ProgressBarAndroid,
  Button,
  Alert,
  Dimensions,
  Platform,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={{ padding: 50 }}>
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} />}
      {Platform.OS === "android" && (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="blue"
          progress={0.5}
        />
      )}
      <ActivityIndicator size="large" color="#61DBF" />
      <Button title="click me" onPress={onButtonPress} />
      <Text>Platform: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
    </View>
  );
}
