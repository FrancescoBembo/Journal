import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function MainText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default MainText;
