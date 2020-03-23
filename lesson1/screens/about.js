import React from "react";
import { Button, View, Text } from "react-native";

export default function about({ route, navigation }) {
  const { age } = route.params;
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>age: {JSON.stringify(age)}</Text>
      <Text>name: {JSON.stringify(name)}</Text>
      <Button title="home" onPress={() => navigation.navigate("home")} />
    </View>
  );
}
