// Trong file App.js hoặc file tương tự
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./Screen1"; // Import component cho màn hình 1
import Screen2 from "./Screen2"; // Import component cho màn hình 2
import GetMovie from "./GetMovie";
import PhotoScreen from "./PhotoScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            title: "Screen 1",
          }}
        />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="GetMovie" component={GetMovie} />
        <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
