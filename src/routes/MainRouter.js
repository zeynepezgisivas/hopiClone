import { StyleSheet, Text, View } from "react-native";
import React from "react";

import WelcomeScreen from "../screens/WelcomeScreen";
import AuthEmailScreen from "../screens/AuthEmailScreen";
import AuthPasswordScreen from "../screens/AuthPasswordScreen";
import HomeScreenBottomRoutes from "./HomeScreenBottomRoutes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AuthEmailScreen" component={AuthEmailScreen} />
      <Stack.Screen name="AuthPasswordScreen" component={AuthPasswordScreen} />
      <Stack.Screen
        name="HomeScreenBottomRoutes"
        component={HomeScreenBottomRoutes}
      />
    </Stack.Navigator>
  );
};

export default MainRouter;

const styles = StyleSheet.create({});
