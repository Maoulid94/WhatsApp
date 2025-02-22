import useThemeColors from "../components/ThemeColors";
import HeaderBox from "../components/HeaderBox";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ChatsItem from "../components/chattsItem";

export default function Chats() {
  const colors = useThemeColors();
  console.log("Applied Theme Colors:", colors);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBox
        title="WhatsApp"
        icons={["qr-code", "camera-outline", "ellipsis-vertical"]}
      />
      <ChatsItem />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
