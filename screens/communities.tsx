import { Text, View, StyleSheet } from "react-native";
import HeaderBox from "../components/HeaderBox";
import useThemeColors from "../components/ThemeColors";

export default function Communities() {
  const colors = useThemeColors();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBox title="Communities" icons={["qr-code", "ellipsis-vertical"]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
