import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const PassScreenButton = ({ title, navScreen, nav }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => nav.navigate(navScreen)}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PassScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#E1288F",
    width: "85%",
    height: "7%",
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
