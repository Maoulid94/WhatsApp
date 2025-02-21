import { NavigationContainer } from "@react-navigation/native";
import TabBottom from "./index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useThemeColors from "../components/ThemeColors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
export default function App() {
  const colors = useThemeColors();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false } }>
        <Stack.Screen name="index" component={TabBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
