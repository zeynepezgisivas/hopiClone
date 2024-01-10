import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const AuthEmailScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo
          name="chevron-left"
          size={30}
          color="black"
          style={styles.navBackButton}
        />
      </TouchableOpacity>
      <View style={styles.emailInputContainer}>
        <Text style={styles.title}>{t("authemail.title")}</Text>
        <Text style={styles.description}>{t("authemail.description")}</Text>
        <TextInput
          style={styles.inputArea}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("AuthPasswordScreen")}
      >
        <Text style={styles.buttonTitle}>{t("auth.buttonTitle")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthEmailScreen;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: 50,
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 20,
    textAlign: "left",
  },
  emailInputContainer: {
    gap: 20,
  },
  inputArea: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, .3)",
    width: "90%",
    padding: 5,
    color: "black",
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#E1288F",
    width: 350,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
