import {
  View,
  Text,
  NativeScrollEvent,
  FlatList,
} from "react-native";
import MovieCard from "./MovieCard";
import { Movie } from "../models/moviesResponse";
import { useState } from "react";

interface Props {
  title?: string;
  movies: Movie[];
  onEndReached?: () => void;
}

const MovieHorizontalView = ({ title, movies, onEndReached }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleScrollEnd = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToEnd = 100;

    if (
      layoutMeasurement.width + contentOffset.x >=
        contentSize.width - paddingToEnd &&
      !loading
    ) {
      setLoading(true);
      onEndReached!();
      console.log("Load next page...");
      setTimeout(() => setLoading(false), 500);
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
