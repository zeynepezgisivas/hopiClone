import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const MyCardsScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/WalletScreen/MyCardsScreen/cardImage.png")}
        style={{ alignSelf: "center", marginTop: 10 }}
      />
      <View style={styles.body}>
        <Text style={styles.debitandCreditCardsTitle}>
          {t("myCards.debitandCreditCardsTitle")}
        </Text>
        <Text>{t("myCards.debitandCreditCardsDescription")}</Text>
        <TouchableOpacity style={styles.dashedButton}>
          <FontAwesome name="cc-mastercard" size={24} color="dodgerblue" />
          <Text style={styles.dashedButtonTitle}>
            {t("myCards.addDebitCardButtonTitle")}
          </Text>
        </TouchableOpacity>
        <Text style={styles.transportationCardsTitle}>
          {t("myCards.transportationCardsTitle")}
        </Text>
        <Text>{t("myCards.transportationCardsDescription")}</Text>
        <TouchableOpacity style={styles.dashedButton}>
          <MaterialCommunityIcons
            name="credit-card-plus"
            size={24}
            color="dodgerblue"
          />
          <Text style={styles.dashedButtonTitle}>
            {t("myCards.addTransportationCardButtonTitle")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    width: "90%",
    flex: 1,
    alignSelf: "center",
    marginTop: 10,
  },
  debitandCreditCardsTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#444444",
    marginBottom: 10,
  },
  dashedButton: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderStyle: "dashed",
    marginVertical: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  dashedButtonTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "dodgerblue",
  },
  transportationCardsTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#444444",
    marginBottom: 10,
  },
});
