import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import useThemeColors from "./ThemeColors";

interface HeaderBoxType {
  title: string;
  icons: string[];
}

import { StatusBar } from "react-native";
export default function HeaderBox({ title, icons = [] }: HeaderBoxType) {
  const glyphMap = Ionicons.glyphMap;
  const colors = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={
          colors.background === "#111B21" ? "light-content" : "dark-content"
        }
        backgroundColor={colors.background}
      />
      <Text style={[styles.title, { color: colors.title }]}>{title}</Text>
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <Ionicons
            key={index}
            name={icon as keyof typeof glyphMap}
            size={24}
            color={colors.icons}
            style={styles.icon}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
});
