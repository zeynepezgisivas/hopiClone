import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const AccountScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.userContainer}>
          <EvilIcons name="user" size={70} color="gray" />
          <Text style={styles.usernameText}>Kek Börek</Text>
          <TouchableOpacity>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionTextWithIcon}>
            <Ionicons name="notifications" size={24} color="black" />
            <Text style={styles.optionText}>
              {t("account.notificationsOption")}
            </Text>
          </View>
          <View style={styles.notificationNumberContainerWithIcon}>
            <View style={styles.notificationNumberContainer}>
              <Text style={styles.notificationNumberText}>7</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionTextWithIcon}>
            <Ionicons name="ios-star-sharp" size={24} color="black" />
            <Text style={styles.optionText}>{t("account.listsOption")}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionTextWithIcon}>
            <Ionicons name="call" size={24} color="black" />
            <Text style={styles.optionText}>
              {t("account.callingCenterOption")}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    width: "90%",
    flex: 1,
    alignSelf: "center",
    marginTop: 20,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 20,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginRight: 10,
  },
  topBorder: {
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
  optionTextWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  notificationNumberContainer: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 12,
  },
  notificationNumberText: {
    color: "white",
  },
  notificationNumberContainerWithIcon: {
    flexDirection: "row",
  },
});
