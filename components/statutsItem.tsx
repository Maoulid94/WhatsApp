import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useThemeColors from "./ThemeColors";
import StatusFooter from "./statutsFooter";
import statutsInfo from "../constants/statutInfo";
import StatusHeader from "./statutsHeader";

export default function StatutsInfo() {
  const colors = useThemeColors();
  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <FlatList
        data={statutsInfo}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<StatusHeader />}
        ListFooterComponent={<StatusFooter />}
        style={styles.statutsContainer}
        renderItem={({ item }) => (
          <View style={styles.profileContainer}>
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
          </View>
        )}
      />
      {/* </ScrollView> */}
      <TouchableOpacity style={styles.addSatuts}>
        <Ionicons name="add-outline" size={18} color={colors.subTitle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addPhoto}>
        <Ionicons name="camera-outline" size={20} color={colors.background} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },
  statutsContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
  },
  profileContainer: { marginVertical: 8 },
  profileContent: { flexDirection: "row", gap: 20 },
  imagestyle: { width: 45, height: 45, borderRadius: 45 / 2 },
  channelsContainer: { borderTopWidth: 1, marginTop: 10 },
  channelsContent: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 12,
    gap: 8,
  },
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
  addSatuts: {
    height: 25,
    width: 25,
    position: "absolute",
    right: 30,
    bottom: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25D366",
  },
  addPhoto: {
    height: 45,
    width: 45,
    position: "absolute",
    right: 20,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25D366",
  },
});
