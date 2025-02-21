import useThemeColors from "../components/ThemeColors";
import HeaderBox from "../components/HeaderBox";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function Chats() {
  const colors = useThemeColors();
  console.log("Applied Theme Colors:", colors);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBox
        title="WhatsApp"
        icons={["qr-code", "camera-outline", "ellipsis-vertical"]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
