import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";
import chatInfo from "../constants/chatInfo";
import SearchModal from "../components/serachModal";

export default function SearchBarContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchModal, setSearchModal] = useState(false);
  const colors = useThemeColors();

  // 🔹 Filter chats based on search input
  const filteredChats = chatInfo.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => setSearchModal(true)}
        style={[
          styles.searchContainer,
          { backgroundColor: colors.backgroundColorItens },
        ]}
      >
        <Ionicons name="search-outline" size={20} color={colors.text} />
        <Text style={[styles.searchInput, { color: colors.text }]}>
          Ask Meta AI or Search
        </Text>
      </Pressable>

      <SearchModal
        visible={searchModal}
        onClose={() => setSearchModal(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredChats={filteredChats}
      />
    </View>
  );
}

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
    elevation: 3,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
  },
});
