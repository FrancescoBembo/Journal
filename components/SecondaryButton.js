import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function SecondaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    margin: 20,
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default SecondaryButton;
