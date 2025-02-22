import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "./ThemeColors";
import SuggestionListMeta from "../constants/suggestionMetaList";

const chunkArray = (array: any[], chunkSize: number) => {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const groupedData = chunkArray(SuggestionListMeta.slice(0, 16), 8).concat(
  chunkArray(SuggestionListMeta.slice(16), 9)
);

export default function SuggestionList() {
  const colors = useThemeColors();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <FlatList
        data={groupedData}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <View style={styles.rowContainer}>
              {item.map((suggestion) => (
                <TouchableOpacity
                  key={suggestion.id}
                  style={[
                    styles.suggestionItem,
                    {
                      backgroundColor: colors.backgroundColorItens,
                      borderBottomColor: colors.subTitle,
                    },
                  ]}
                >
                  {suggestion.icon && (
                    <Ionicons
                      name={suggestion.icon as keyof typeof Ionicons.glyphMap}
                      size={16}
                      color={colors.text}
                      style={styles.icon}
                    />
                  )}
                  <Text style={[styles.suggestionText, { color: colors.text }]}>
                    {suggestion.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderEndWidth: 1,
    // marginBottom: 10,
  },
  suggestionItem: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 10,
    alignSelf: "center",
    marginLeft: 15,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  suggestionText: {
    fontSize: 12,
  },
});
