import React, { useState } from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

function AddMemoryScreen(props) {
  const [moodType, setMoodType] = useState();

  const moods = [
    { label: "Happy", value: 1 },
    { label: "Sad", value: 2 },
    { label: "Cool", value: 3 },
  ];
  return (
    <Screen>
      <Header>Add New Memory</Header>
      <View style={styles.container}>
        <AppTextInput placeholder="Title" icon="md-create" />
        <AppTextInput placeholder="Date" icon="ios-calendar" />
        <AppPicker
          selectedItem={moodType}
          onSelectItem={(item) => setMoodType(item)}
          items={moods}
          icon="ios-happy"
          placeholder="Mood"
        />
        <AppTextInput placeholder="Description..." icon="ios-paper" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
});

export default AddMemoryScreen;

/* 

*/
