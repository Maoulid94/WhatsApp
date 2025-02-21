import React from "react";
import { View, TextInput, StyleSheet, Pressable, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";

interface ChatSearchBarProps {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  onPress?: () => void; // Optional prop for handling external navigation
}

const ChatSearchBar: React.FC<ChatSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onPress,
}) => {
  const colors = useThemeColors();

  return (
    <Pressable
      onPress={onPress || (() => Keyboard.dismiss())} // Dismiss keyboard if no external function is provided
      style={[
        styles.searchContainer,
        { backgroundColor: colors.backgroundColorItens },
      ]}
    >
      <Ionicons name="search-outline" size={20} color={colors.text} />
      <TextInput
        style={[styles.searchInput, { color: colors.text }]}
        placeholder="Ask Meta AI or Search"
        placeholderTextColor={colors.text}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ChatSearchBar;
