import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import MovieHorizontalView from "../components/MovieHorizontalView";

export default function App() {
  return (
    <View>
      <MovieHorizontalView title="Now Playing" />
      <MovieHorizontalView title="Upcoming" />
      <MovieHorizontalView title="Popular" />
    </View>
  );
}
