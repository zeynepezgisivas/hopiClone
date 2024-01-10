import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useTranslation } from "react-i18next";

import OffersScreen from "../screens/OffersScreen";
import BrandsScreen from "../screens/BrandsScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const CategoriesScreenTopRoutes = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name={t("categoriesScreenTopTab.offers")}
        component={OffersScreen}
      />
      <Tab.Screen
        name={t("categoriesScreenTopTab.brands")}
        component={BrandsScreen}
      />
    </Tab.Navigator>
  );
};

export default CategoriesScreenTopRoutes;

const styles = StyleSheet.create({});
