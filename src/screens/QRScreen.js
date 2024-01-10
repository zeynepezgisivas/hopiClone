import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const QRScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.counterText}>{t("QR.secondText")}</Text>
        <Text style={styles.infoText}>{t("QR.secondInfoText")}</Text>
      </View>
      <Image source={require("../assets/QRScreen/QRCode.png")} />
      <View style={styles.numContainer}>
        <Text style={styles.numText}>4507 7627 27</Text>
        <TouchableOpacity>
          <FontAwesome5 name="copy" size={25} color="#444444" />
        </TouchableOpacity>
      </View>
      <View style={styles.usageTextContainer}>
        <Text style={styles.usageText}>{t("QR.usageInfoText")}</Text>
      </View>
      <TouchableOpacity style={styles.scanQRButton}>
        <FontAwesome5 name="camera" size={24} color="white" />
        <Text style={styles.scanQRButtonTitle}>
          {t("QR.scanQRButtonTitle")}
        </Text>
        <FontAwesome5 name="chevron-up" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 20,
  },
  counterText: {
    fontWeight: "bold",
    color: "tomato",
    fontSize: 15,
  },
  infoText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  numContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 30,
    width: "70%",
  },
  numText: {
    color: "#444444",
    fontWeight: "bold",
    fontSize: 30,
  },
  usageTextContainer: {
    width: "70%",
  },
  usageText: {
    textAlign: "center",
    fontSize: 15,
    color: "#444444",
    fontWeight: "bold",
  },
  scanQRButton: {
    backgroundColor: "#00ADEF",
    width: "80%",
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  scanQRButtonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
