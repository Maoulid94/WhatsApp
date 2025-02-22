import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";
import DetailList from "../constants/detailList";

export default function DetailListContent() {
  const colors = useThemeColors(); // Get theme colors

  return (
    <FlatList
      data={DetailList}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.detailContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <View
            style={[
              styles.detailItem,
              { backgroundColor: colors.backgroundColorItens },
            ]}
          >
            {item.icon && (
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
                size={14}
                color={colors.text}
                style={styles.icon}
              />
            )}
            <Text style={[styles.detailText, { color: colors.text }]}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    alignSelf: "center",
    marginLeft: 15,
    marginVertical: 15,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 12,
  },
});
