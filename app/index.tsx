import React, { useState, useCallback } from "react";
import {
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar, TabBarProps } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import Chats from "../screens/chats";
import Updates from "../screens/updates";
import Communities from "../screens/communities";
import Calls from "../screens/calls";
import useThemeColors from "../components/ThemeColors";

export default function TabSwipeNavigator() {
  const colors = useThemeColors();
  const layout = useWindowDimensions();

  // Define Screens for Each Tab
  const renderScene = SceneMap({
    chats: Chats,
    updates: Updates,
    communities: Communities,
    calls: Calls,
  });

  // State for Active Tab
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "chats", title: "Chats", icon: "chatbubble-outline" },
    { key: "updates", title: "Updates", icon: "time-outline" },
    { key: "communities", title: "Communities", icon: "people-outline" },
    { key: "calls", title: "Calls", icon: "call-outline" },
  ]);

  // Custom Tab Item
  const renderTabBarItem = useCallback(
    ({ route, onPress }: { route: any; onPress: () => void }) => {
      const isFocused = route.key === routes[index].key; // ✅ Check if tab is active

      return (
        <TouchableOpacity
          key={route.key}
          onPress={onPress}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 5,
            backgroundColor: isFocused ? colors.icons : "transparent", // Green Background for Active Tab
          }}
        >
          <Ionicons
            name={route.icon as keyof typeof Ionicons.glyphMap}
            size={20}
            color={isFocused ? "white" : "gray"} // White icon for active tab
          />
          <Text
            style={{
              color: isFocused ? "white" : "gray",
              fontSize: 12,
              marginLeft: 5, // Space between icon and text
            }}
          >
            {route.title}
          </Text>
        </TouchableOpacity>
      );
    },
    [colors, index]
  );

  // Custom TabBar
  const renderTabBar = useCallback(
    (props: TabBarProps<any>) => (
      <TabBar
        {...props}
        renderTabBarItem={({ route }) =>
          renderTabBarItem({
            route,
            onPress: () =>
              setIndex(routes.findIndex((r) => r.key === route.key)), // ✅ Set active tab manually
          })
        }
        indicatorStyle={{ backgroundColor: "transparent" }} // Hide default indicator
        style={{ backgroundColor: colors.background }} // Background Color
      />
    ),
    [colors, index]
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      tabBarPosition="bottom"
    />
  );
}
