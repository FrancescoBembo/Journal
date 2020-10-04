import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function BodyText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default BodyText;
