import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HopiScreen from "../screens/HopiScreen";
import HopiShopScreen from "../screens/HopiShopScreen";

const Tab = createMaterialTopTabNavigator();

const HomeScreenTopRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HopiScreen") {
            // İlk tab için kullanılacak ikon veya görüntü
            iconName = focused
              ? require("../assets/HomeScreen/hopiIcon.png")
              : require("../assets/HomeScreen/hopiIcon.png");
          } else if (route.name === "HopiShopScreen") {
            // İkinci tab için kullanılacak ikon veya görüntü
            iconName = focused
              ? require("../assets/HomeScreen/hopiShopIcon.png")
              : require("../assets/HomeScreen/hopiShopIcon.png");
          }

          // İster ikon kullanın, ister özel bir görüntü
          return (
            <Image
              source={iconName}
              style={{ width: 65, height: 65, resizeMode: "contain" }}
            />
          );
        },

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIconStyle: {
          width: 50,
          height: 50,
          resizeMode: "contain",
        },
      })}
    >
      <Tab.Screen name="HopiScreen" component={HopiScreen} />
      <Tab.Screen name="HopiShopScreen" component={HopiShopScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreenTopRoutes;

const styles = StyleSheet.create({});
