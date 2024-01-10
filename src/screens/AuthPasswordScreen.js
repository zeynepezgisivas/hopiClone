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

const AuthPasswordScreen = ({ navigation }) => {
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
      <View style={styles.passwordInputContainer}>
        <Text style={styles.title}>{t("authpassword.title")}</Text>
        <Text style={styles.description}>{t("authpassword.description")}</Text>
        <TextInput style={styles.inputArea} secureTextEntry={true} />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("HomeScreenBottomRoutes")}
      >
        <Text style={styles.buttonTitle}>{t("auth.buttonTitle")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthPasswordScreen;

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
  passwordInputContainer: {
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
