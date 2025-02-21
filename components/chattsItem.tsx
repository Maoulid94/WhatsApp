import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import chatInfo from "../constants/chatInfo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import useThemeColors from "./ThemeColors";
import ListItems from "@/components/listItems";
import ChatSearchBar from "./searchBar";
export default function ChatsItem() {
  const colors = useThemeColors();
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 Filter chats based on search input
  const filteredChats = chatInfo.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FlatList
      data={chatInfo}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <ChatSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ListItems />
        </>
      }
      renderItem={({ item }) => (
        <View style={[styles.chatItem, { backgroundColor: colors.background }]}>
          <Image source={item.imagePath} style={styles.profileImage} />
          <View style={styles.chatbox}>
            <View style={styles.chatDetails}>
              <Text style={[styles.chatName, { color: colors.subTitle }]}>
                {item.name}
              </Text>
              <View style={styles.messageContainer}>
                <Ionicons
                  name={item.icon as any}
                  size={14}
                  color={"#34B7F1"}
                  style={styles.icons}
                />
                <Text style={[styles.chatMessage, { color: colors.text }]}>
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
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
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
