import { Text, View, StyleSheet } from "react-native";
import useThemeColors from "./ThemeColors";

export default function StatusMain() {
  const colors = useThemeColors();
  return (
    <View style={styles.container}>
      <View
        style={[styles.channelsContainer, { borderRightColor: colors.text }]}
      >
        <View style={styles.channelsContent}>
          <Text style={[styles.title, { color: colors.subTitle }]}>
            Channels
          </Text>
          <Text style={[styles.text, { color: colors.text }]}>
            Stay updated on topics that natter to you. Find channels to follow
            below.
          </Text>
        </View>
        <View style={styles.channelsContent}>
          <Text style={[styles.text, { color: colors.text }]}>
            Find channels to follow
          </Text>
        </View>
        <Text style={[styles.explore, { backgroundColor: colors.background }]}>
          Explore more
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  channelsContainer: { marginTop: 10 },
  channelsContent: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 12,
    gap: 8,
  },
  explore: {
    marginLeft: 15,
    width: 110,
    padding: 10,
    textAlign: "center",
    borderWidth: 0.5,
    color: "#25D366",
    marginTop: 15,
    borderRadius: 20,
  },
});
