import {
  View,
  Text,
  NativeScrollEvent,
  FlatList,
  ScrollView,
} from "react-native";
import MovieCard from "./MovieCard";
import { Movie } from "../models/moviesResponse";

interface Props {
  title?: string;
  movies: Movie[];
  onEndReached?: () => void;
}

const MovieHorizontalView = ({ title, movies, onEndReached }: Props) => {
  const handleScrollEnd = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToEnd = 200;

    if (
      layoutMeasurement.width + contentOffset.x >=
      contentSize.width - paddingToEnd
    ) {
      console.log("Load next page...");
      onEndReached!();
    }
  };

  return (
    <View style={{ paddingBottom: 10 }}>
      {title && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingVertical: 5,
            paddingLeft: 20,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item, index) => `${title}-${item.id}-${index}`}
        onScroll={
          onEndReached
            ? ({ nativeEvent }) => handleScrollEnd(nativeEvent)
            : () => null
        }
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default MovieHorizontalView;
