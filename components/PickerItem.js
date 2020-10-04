import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import ItemText from "../components/ItemText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemText>{label}</ItemText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default PickerItem;
