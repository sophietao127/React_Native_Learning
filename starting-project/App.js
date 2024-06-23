import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <CategoriesScreen />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
