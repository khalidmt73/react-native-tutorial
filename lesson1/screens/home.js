import React from "react";
import { Button, View, Text } from "react-native";

export default function home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="about"
        onPress={() => {
          navigation.navigate("about", {
            age: 47,
            name: "khalid"
          });
        }}
      />
    </View>
  );
}
