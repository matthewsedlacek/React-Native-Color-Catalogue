import React from "react";
import ColorList from "./components/ColorList.js";
import ColorDetails from "./components/ColorDetails.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={ColorList} />
        <Screen name="Details" component={ColorDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
