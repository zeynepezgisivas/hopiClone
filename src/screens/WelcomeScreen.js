import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

export default WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("welcome.title")}</Text>
      <Text style={styles.description}>{t("welcome.description")}</Text>
      <Image
        source={require("../assets/WelcomeScreen/welcomescreenbackgroundimage.png")}
        style={styles.imageContainer}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("AuthEmailScreen")}
      >
        <Text style={styles.buttonTitle}>{t("welcome.buttonTitle")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1CDD9",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "#E1278E",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#E1288F",
    width: 350,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
