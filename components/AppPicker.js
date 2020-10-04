import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import BodyText from "./BodyText";
import Screen from "../components/Screen";
import PickerItem from "../components/PickerItem";

function AppPicker({
  icon,
  items,
  placeholder,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Ionicons
              name={icon}
              size={24}
              color={colors.secondary}
              style={styles.icon}
            />
          )}
          <View style={styles.text}>
            <BodyText>
              {selectedItem ? selectedItem.label : placeholder}
            </BodyText>
          </View>
          {icon && (
            <Ionicons
              name="ios-arrow-down"
              size={24}
              color={colors.secondary}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
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
  text: {
    flex: 1,
  },
});

export default AppPicker;
