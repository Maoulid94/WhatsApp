import { useColorScheme } from "react-native";
import Colors from "../constants/colors";

export default function useThemeColors() {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? Colors.darkMode : Colors.lightMode;
}
