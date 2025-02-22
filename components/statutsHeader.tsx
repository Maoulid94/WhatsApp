import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";

export default function StatusHeader() {
  const colors = useThemeColors();
  return (
    <View style={styles.statutsContainer}>
      <Text style={[styles.title, { color: colors.subTitle }]}>Status</Text>
      <View style={styles.headerContainer}>
        <View style={styles.profileConatiner}>
          <View style={styles.profile}>
            <Image
              style={styles.imagestyle}
              source={require("../assets/images/photo.jpeg")}
            />
            <TouchableOpacity style={styles.addBox}>
              <Ionicons name="add-outline" size={16} color={"red"} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContent}>
            <Text style={[styles.title, { color: colors.subTitle }]}>
              My status
            </Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Tap to add Status update
            </Text>
          </View>
        </View>
        <Text style={[styles.textstatus, { color: colors.text }]}>
          Recent updates
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  statutsContainer: {
    gap: 15,
  },
  profile: {},
  textContent: {},
  profileConatiner: { flexDirection: "row", gap: 20 },
  headerContainer: {},
  imagestyle: { width: 45, height: 45, borderRadius: 45 / 2 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  addBox: {
    height: 20,
    width: 20,
    position: "absolute",
    bottom: -1,
    right: -5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#25D366",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textstatus: {
    fontSize: 14,
    marginVertical: 10,
  },
});
