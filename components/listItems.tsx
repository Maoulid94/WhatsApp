import Colors from "../constants/colors";
import ItemsList from "../constants/items";
import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";
import useThemeColors from "./ThemeColors";
import { Ionicons } from "@expo/vector-icons";

export default function ListItems() {
  const colors = useThemeColors();
  const dataWithIcon = [...ItemsList, "add-icon"];

  return (
    <FlatList
      data={dataWithIcon}
      keyExtractor={(index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) =>
        item === "add-icon" ? (
          <View
            style={[
              styles.addButton,
              { backgroundColor: colors.backgroundColorItens },
            ]}
          >
            <Ionicons name="add-outline" size={18} color={colors.text} />
          </View>
        ) : (
          // Normal Item
          <View
            style={[
              styles.item,
              { backgroundColor: colors.backgroundColorItens },
            ]}
          >
            <Text style={[styles.text, { color: colors.text }]}>{item}</Text>
          </View>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  listContainer: {
    alignSelf: "center",
    marginLeft: 15,
    marginVertical: 15,
  },
  item: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    color: "#333",
  },
  addButton: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
});
