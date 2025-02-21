import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Chats from "../screens/chats";
import Updates from "../screens/updates";
import Communities from "../screens/communities";
import Calls from "../screens/calls";
import useThemeColors from "../components/ThemeColors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const colors = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 60,
          borderTopWidth: 0,
        },
        tabBarIcon: () => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            chats: "chatbubble-outline",
            updates: "time-outline",
            communities: "people-outline",
            calls: "call-outline",
          };

          return (
            <Ionicons
              name={icons[route.name] as keyof typeof Ionicons.glyphMap}
              size={24}
              color={colors.icons}
            />
          );
        },
      })}
    >
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="updates" component={Updates} />
      <Tab.Screen name="communities" component={Communities} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
}
