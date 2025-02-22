import useThemeColors from "../components/ThemeColors";
import HeaderBox from "../components/HeaderBox";
import { View, StyleSheet } from "react-native";
import StatutsInfo from "../components/statutsItem";

export default function Status() {
  const colors = useThemeColors();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBox
        title="Updates"
        icons={["qr-code", "search", "ellipsis-vertical"]}
      />
      <StatutsInfo />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
