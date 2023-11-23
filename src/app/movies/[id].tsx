import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export const MovieDetailPage = () => {
  // hooks
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{id}</Text>
    </View>
  );
};

export default MovieDetailPage;
