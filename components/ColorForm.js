import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ColorForm({ onNewColor = (f) => f }) {
  const [inputValue, setValue] = useState("");
  const input = useRef();
  //   console.log("->", inputValue);
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        value={inputValue}
        onChangeText={setValue}
        style={styles.txtInput}
        autoCapitalize="none"
        placeholder="enter a color..."
      />
      <Button
        title="add"
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          //   console.log(`add value ${inputValue}`);
          setValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
  },
});
