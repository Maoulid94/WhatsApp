import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import useThemeColors from "./ThemeColors";
import Channels from "../constants/channels";
import StatusMain from "./statusMain";

export default function StatusFooter() {
  const colors = useThemeColors();
  return (
    <FlatList
      data={Channels}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<StatusMain />}
      renderItem={({ item }) => (
        <View style={[styles.profileContainer, { marginLeft: 15 }]}>
          <View style={styles.profileContent}>
            <Image style={styles.imagestyle} source={item.imagePath} />
            <View>
              <Text style={[styles.title, { color: colors.subTitle }]}>
                {item.name}
              </Text>
              <Text style={[styles.text, { color: colors.text }]}>
                {item.text}
              </Text>
            </View>
          </View>
          <View style={[styles.follow, {}]}>
            <Text style={[styles.title, { color: colors.subTitle }]}>
              {item.tag}
            </Text>
          </View>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  profileContainer: { marginVertical: 8 },
  profileContent: { flexDirection: "row", gap: 20 },
  imagestyle: { width: 45, height: 45, borderRadius: 45 / 2 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  follow: {
    position: "absolute",
    right: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#25D366",
    borderRadius: 15,
    textAlign: "center",
  },
});
