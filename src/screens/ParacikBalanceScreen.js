import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const ParacikBalanceScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.allParacikText}>
        {t("paracikBalance.totalParacikText")}
      </Text>
      <Text style={styles.allParacikAmount}>201,50</Text>
      <Text>{t("paracikBalance.usageInfoText")}</Text>
      <TouchableOpacity style={styles.sendParacikButton}>
        <Ionicons name="send-outline" size={24} color="white" />
        <Text style={styles.sendParacikButtonTitle}>
          {t("paracikBalance.sendParacikButtonTitle")}
        </Text>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ParacikBalanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },
  allParacikText: {
    color: "#C3C3C3",
  },
  allParacikAmount: {
    color: "orange",
    fontSize: 50,
    fontWeight: "bold",
  },
  sendParacikButton: {
    width: "90%",
    height: 60,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  sendParacikButtonTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
