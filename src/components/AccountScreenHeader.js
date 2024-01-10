import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Fontisto } from "@expo/vector-icons";

const AccountScreenHeader = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          {t("account.headerTitle")}
        </Text>
      </View>
      <TouchableOpacity>
        <Fontisto name="player-settings" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
