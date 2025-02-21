import useThemeColors from "../components/ThemeColors";
import HeaderBox from "../components/HeaderBox";
import { Text, View, StyleSheet } from "react-native";

export default function Satuts() {
  const colors = useThemeColors();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBox
        title="Updates"
        icons={["qr-code", "search", "ellipsis-vertical"]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
