import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export const MovieDetailPage = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default MovieDetailPage;
