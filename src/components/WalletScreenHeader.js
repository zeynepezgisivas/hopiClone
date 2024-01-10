import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

const WalletScreenHeader = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name="questioncircleo" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          {t("wallet.headerTitle")}
        </Text>
      </View>
      <Text>{t("wallet.headerRight")}</Text>
    </View>
  );
};

export default WalletScreenHeader;

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
