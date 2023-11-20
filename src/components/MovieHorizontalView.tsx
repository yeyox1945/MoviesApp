import { View, Text, Image, ScrollView, NativeScrollEvent } from "react-native";
import { useMoviePagination } from "../hooks/useMoviePagination";
import { useGetNowPlayingQuery } from "../redux/apis/moviesApi";

interface Props {
  title: string;
  // movies: Movie[];
  // endReached?: () => void;
}

const MovieHorizontalView = ({ title }: Props) => {
  // hooks
  const pagination = useMoviePagination();

  const {
    data: movies,
    isLoading,
    isFetching,
  } = useGetNowPlayingQuery(pagination.page);

  const handleScrollEnd = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToEnd = 200;

    if (
      layoutMeasurement.width + contentOffset.x >=
        contentSize.width - paddingToEnd &&
      !isFetching &&
      !isLoading &&
      !pagination.lastPage
    ) {
      console.log("Load next page...");
      pagination.loadNextPage();
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 5 }}>
        {title}
      </Text>

      <ScrollView
        horizontal
        onScroll={({ nativeEvent }) => handleScrollEnd(nativeEvent)}
      >
        {movies?.results.map((movie, index) => (
          <Image
            key={`${movie.id}-${index}`}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={{
              flex: 1,
              height: 150,
              width: 100,
              objectFit: "cover",
              borderRadius: 20,
              marginHorizontal: 5,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieHorizontalView;
