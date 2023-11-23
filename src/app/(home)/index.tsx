import { Dimensions, ScrollView } from "react-native";
import MovieHorizontalView from "../../components/MovieHorizontalView";
import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "../../redux/apis/moviesApi";
import { useMoviePagination } from "../../hooks/useMoviePagination";
import MovieCard from "../../components/MovieCard";
import Carousel from "react-native-snap-carousel";

const { width: windowWidth } = Dimensions.get("window");

export default function Home() {
  // hooks
  const nowPlayingPagination = useMoviePagination();
  const popularPagination = useMoviePagination();
  const topRatedPagination = useMoviePagination();
  const upcomingPagination = useMoviePagination();

  const {
    data: nowPlaying,
    isLoading: nowPlayingLoading,
    isFetching: nowPlayingFetching,
  } = useGetNowPlayingQuery(nowPlayingPagination.page);
  const {
    data: popular,
    isLoading: popularLoading,
    isFetching: popularFetching,
  } = useGetPopularQuery(popularPagination.page);
  const {
    data: topRated,
    isLoading: topRatedLoading,
    isFetching: topRatedFetching,
  } = useGetTopRatedQuery(topRatedPagination.page);
  const {
    data: upcoming,
    isLoading: upcomingLoading,
    isFetching: upcomingFetching,
  } = useGetUpcomingQuery(upcomingPagination.page);

  return (
    <ScrollView>
      <Carousel
        data={nowPlaying?.results || []}
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
        movies={popular?.results || []}
        onEndReached={
          !popularLoading && !popularFetching
            ? popularPagination.loadNextPage
            : undefined
        }
      />
      <MovieHorizontalView
        title="Top rated"
        movies={topRated?.results || []}
        onEndReached={
          !topRatedLoading && !topRatedFetching
            ? topRatedPagination.loadNextPage
            : undefined
        }
      />
      <MovieHorizontalView
        title="Upcoming"
        movies={upcoming?.results || []}
        onEndReached={
          !upcomingLoading && !upcomingFetching
            ? upcomingPagination.loadNextPage
            : undefined
        }
      />
    </ScrollView>
  );
}
