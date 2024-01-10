import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const QRScreenHeader = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <AntDesign name="questioncircleo" size={24} color="black" />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        {t("QR.headerTitle")}
      </Text>
    </View>
  );
};

export default QRScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
