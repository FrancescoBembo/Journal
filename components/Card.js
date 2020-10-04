import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from "../config/colors";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import MainText from "../components/MainText.js";
import BodyText from "../components/BodyText.js";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.ContainerTxt}>
        <MainText style={styles.titleTxt}>{title}</MainText>
        <BodyText style={styles.subTitleTxt}>{subTitle}</BodyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },

  titleTxt: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },
  subTitleTxt: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 180,
  },
  ContainerTxt: {
    padding: 20,
  },
});

export default Card;
