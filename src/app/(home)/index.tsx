import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import MovieHorizontalView from "../../components/MovieHorizontalView";
import MovieCard from "../../components/MovieCard";
import Carousel from "react-native-snap-carousel";
import { useHomePage } from "../../hooks/useHomePage";

const { width: windowWidth } = Dimensions.get("window");

export default function Home() {
  const {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    isLoading,
    isFetching,
    popularPagination,
    topRatedPagination,
    upcomingPagination,
  } = useHomePage();

  if (isLoading || !popular || !nowPlaying || !topRated || !upcoming) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      <Carousel
        data={nowPlaying.results}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            image={item.backdrop_path}
            width={300}
            height={200}
          />
        )}
        itemWidth={300}
        sliderWidth={windowWidth}
        containerCustomStyle={{ marginVertical: 20 }}
        loop
      />
      <MovieHorizontalView
        title="Popular"
        movies={popular.results}
        onEndReached={
          !isFetching && !popularPagination.lastPage
            ? popularPagination.loadNextPage
            : undefined
        }
      />
      <MovieHorizontalView
        title="Top rated"
        movies={topRated.results}
        onEndReached={
          !isFetching && !topRatedPagination.lastPage
            ? topRatedPagination.loadNextPage
            : undefined
        }
      />
      <MovieHorizontalView
        title="Upcoming"
        movies={upcoming.results}
        onEndReached={
          !isFetching && !upcomingPagination.lastPage
            ? upcomingPagination.loadNextPage
            : undefined
        }
      />
    </ScrollView>
  );
}
