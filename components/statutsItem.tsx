import { Text, View, Image, FlatList } from "react-native";

export default function StatutsInfo() {
  return (
    <View>
      <Text>Status</Text>
      <View>
        <Image source={require("../assets/images/photo.jpeg")} />
        <View>
          <Text>My status</Text>
          <Text>Tap to add Status update</Text>
        </View>
        <Text>Recent updates</Text>
        {/* <FlatList/> */}
      </View>
    </View>
  );
}
