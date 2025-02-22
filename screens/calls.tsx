import { Text, View, StyleSheet } from "react-native";
import HeaderBox from "../components/HeaderBox";
import useThemeColors from "../components/ThemeColors";
import CallList from "../components/callsItem";

export default function Calls() {
  const colors = useThemeColors();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBox
        title="Calls"
        icons={["qr-code", "search", "ellipsis-vertical"]}
      />
      <CallList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
