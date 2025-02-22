import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  FlatList,
  Image,
  Text,
} from "react-native";
import { useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";
import SuggestionList from "./suggestionList";
import DetailListContent from "./detailList";

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  filteredChats: {
    id: number;
    name: string;
    text: string;
    time: string;
    imagePath: any;
    icon?: string;
  }[];
}

export default function SearchModal({
  visible,
  onClose,
  searchQuery,
  setSearchQuery,
  filteredChats,
}: SearchModalProps) {
  const colors = useThemeColors();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      inputRef.current?.focus();
    } else {
      setSearchQuery("");
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="none" transparent>
      <View
        style={[styles.modalContainer, { backgroundColor: colors.background }]}
      >
        <View
          style={[
            styles.fullScreenContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <View style={styles.modalHeader}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={colors.subTitle}
              style={{ marginRight: 30 }}
              onPress={onClose}
            />
            <Ionicons name="search-outline" size={20} color={colors.text} />
            <TextInput
              style={[styles.searchInput, { color: colors.text, flex: 1 }]}
              ref={inputRef}
              placeholder="Ask Meta AI or Search"
              placeholderTextColor={colors.text}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Ionicons name="send-outline" size={26} color="#25D366" />
          </View>
          <FlatList
            data={filteredChats}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <SuggestionList />
                <DetailListContent />
              </>
            }
            renderItem={({ item }) => (
              <View
                style={[
                  styles.chatItem,
                  { backgroundColor: colors.background },
                ]}
              >
                <Image source={item.imagePath} style={styles.profileImage} />
                <View style={styles.chatbox}>
                  <View style={styles.chatDetails}>
                    <Text style={[styles.chatName, { color: colors.subTitle }]}>
                      {item.name}
                    </Text>
                    <View style={styles.messageContainer}>
                      {item.icon && (
                        <Ionicons
                          name={item.icon as keyof typeof Ionicons.glyphMap}
                          size={14}
                          color={"#34B7F1"}
                          style={styles.icons}
                        />
                      )}
                      <Text
                        style={[styles.chatMessage, { color: colors.text }]}
                      >
                        {item.text}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.chatTime, { color: colors.text }]}>
                    {item.time}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  fullScreenContainer: {
    flex: 1,
    borderTopLeftRadius: 15, // Rounde
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: "#ddd",
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  chatDetails: {
    flex: 1,
  },
  chatbox: {
    flex: 1,
    flexDirection: "row",
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatMessage: {
    fontSize: 14,
  },
  chatTime: {
    fontSize: 12,
    marginTop: 4,
  },
  icons: {
    marginRight: 5,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
