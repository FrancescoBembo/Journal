import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function Header({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
  },
});

export default Header;
