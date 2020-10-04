import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function BodyText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
});

export default BodyText;
