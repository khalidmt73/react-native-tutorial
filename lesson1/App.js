import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import home from "./screens/home";
import about from "./screens/about";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="aa">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="about" component={about} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
