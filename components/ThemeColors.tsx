import { useColorScheme } from "react-native";
import Colors from "../constants/colors";

export default function useThemeColors() {
  const colorScheme = useColorScheme();
  // return colorScheme === "dark" ? Colors.darkMode : Colors.lightMode;
  console.log("Current Theme:", colorScheme); // ✅ Check if it's detecting dark mode

  const theme = colorScheme === "dark" ? Colors.darkMode : Colors.lightMode;

  console.log("Applied Theme Colors:", theme); // ✅ Check which colors are being applied

  return theme;
}
