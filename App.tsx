import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bem vindo a sua Pokedex",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
