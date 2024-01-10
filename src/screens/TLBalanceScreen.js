import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const TLBalanceScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../assets/WalletScreen/TLBalanceScreen/TLBakiyeCard.png")}
          style={styles.cardImage}
        />
        <Text>{t("TLBalance.canUseText")}</Text>
        <View style={styles.advantageOptions}>
          <Ionicons name="ios-checkmark-circle" size={20} color="dodgerblue" />
          <Text style={{ flexWrap: "wrap", width: "90%" }}>
            {t("TLBalance.brandsAdvantageText")}
          </Text>
        </View>
        <View style={styles.advantageOptions}>
          <Ionicons name="ios-checkmark-circle" size={20} color="dodgerblue" />
          <Text style={{ flexWrap: "wrap", width: "95%" }}>
            {t("TLBalance.sendFriendsAdvantageText")}
          </Text>
        </View>
        <View style={styles.advantageOptions}>
          <Ionicons name="ios-checkmark-circle" size={20} color="dodgerblue" />
          <Text style={{ flexWrap: "wrap", width: "95%" }}>
            {t("TLBalance.shopECommerceAdvantageText")}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.activeHopCardButton}>
        <Image
          source={require("../assets/WalletScreen/TLBalanceScreen/activeHopiCardButton.png")}
        />
        <Text style={styles.activeHopCardButtonText}>
          {t("TLBalance.activedollyCardButtonTitle")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TLBalanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    width: "90%",
    height: "88%",
    alignSelf: "center",
    marginTop: 20,
  },
  cardImage: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
    borderRadius: 20,
    marginBottom: 20,
  },
  advantageOptions: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginTop: 20,
  },
  activeHopCardButton: {
    justifyContent: "center",
  },
  activeHopCardButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
  },
});
