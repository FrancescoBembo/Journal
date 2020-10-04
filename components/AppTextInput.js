import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={colors.secondary}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 30,
    flexDirection: "row",
    width: "100%",
    height: 60,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 20,
    color: colors.dark,
  },
});

export default AppTextInput;
