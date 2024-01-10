import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useTranslation } from "react-i18next";

import ParacikBalanceScreen from "../screens/ParacikBalanceScreen";
import TLBalanceScreen from "../screens/TLBalanceScreen";
import MyCardsScreen from "../screens/MyCardsScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const WalletScreenTopRoutes = () => {
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
        name={t("walletScreenTopTab.paracikBalance")}
        component={ParacikBalanceScreen}
      />
      <Tab.Screen
        name={t("walletScreenTopTab.TLAmount")}
        component={TLBalanceScreen}
      />
      <Tab.Screen
        name={t("walletScreenTopTab.myCards")}
        component={MyCardsScreen}
      />
    </Tab.Navigator>
  );
};

export default WalletScreenTopRoutes;

const styles = StyleSheet.create({});
