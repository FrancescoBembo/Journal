import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import PrimaryButton from "../components/PrimaryButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <PrimaryButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
