import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import MainText from "../components/MainText.js";
import BodyText from "../components/BodyText.js";

import colors from "../config/colors";

function DetailScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/placeholder.jpg")}
      />
      <View style={styles.ContainerTxt}>
        <MainText>Entry number 1</MainText>
        <BodyText>23.08.2018</BodyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerTxt: {
    padding: 20,
  },
});

export default DetailScreen;
