import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import callsInfo, { CallInfo } from "../constants/callInfo";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";

const CallHistory: React.FC = () => {
  const colors = useThemeColors();

  const renderItem: ListRenderItem<CallInfo> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imagePath} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: colors.subTitle }]}>
          {item.name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <item.callIcon size={20} color="green" rotation={0} />
          </View>
          <Text style={[styles.text, { color: colors.text }]}>
            {item.text} {item.time}
          </Text>
        </View>
      </View>
      <Ionicons
        name={item.icon as keyof typeof Ionicons.glyphMap}
        size={22}
        color={colors.subTitle}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={callsInfo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View
            style={[
              styles.favouriteBox,
              { backgroundColor: colors.background },
            ]}
          >
            <Text style={[styles.name, { color: colors.subTitle }]}>
              Favourites
            </Text>
            <View style={styles.favouriteContent}>
              <View style={styles.iconBox}>
                <Ionicons name="heart" size={18} color={colors.subTitle} />
              </View>
              <Text style={[styles.name, { color: colors.subTitle }]}>
                Add favourite
              </Text>
            </View>
            <Text style={[styles.name, { color: colors.subTitle }]}>
              Recent
            </Text>
          </View>
        }
      />
      {/* Floating "addBox" Button */}
      <TouchableOpacity style={styles.addBox}>
        <Ionicons name="add-circle-outline" size={24} color={colors.subTitle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  iconContainer: {
    // marginLeft: 2,
  },
  favouriteBox: {
    flex: 1,
    marginVertical: 10,
    marginLeft: 15,
    gap: 15,
  },
  favouriteContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  iconBox: {
    backgroundColor: "#25D366",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  addBox: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#25D366",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default CallHistory;
