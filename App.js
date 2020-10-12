import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorButton from "./components/ColorButton.js";
import defaultColors from "./data/defaultColors.json";
import ColorForm from "./components/ColorForm.js";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <>
      <ColorForm />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={defaultColors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});
