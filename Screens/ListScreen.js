import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import MainText from "../components/MainText.js";
import BodyText from "../components/BodyText.js";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const listing = [
  {
    id: 1,
    title: "nice day",
    date: "23.08.2018",
    image: require("../assets/placeholder.jpg"),
  },
  {
    id: 2,
    title: "Another nice day",
    date: "23.08.2019",
    image: require("../assets/placeholder.jpg"),
  },
];

function ListScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Screen style={styles.screen}>
        <View>
          <FlatList
            data={listing}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.date}
                image={item.image}
              />
            )}
          />
        </View>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  background: {
    flex: 1,
    width: "100%",
  },
});

export default ListScreen;
