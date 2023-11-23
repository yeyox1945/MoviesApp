import { ScrollView } from "react-native";
import MovieHorizontalView from "../components/MovieHorizontalView";
import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "../redux/apis/moviesApi";
import { router } from "expo-router";
import { useMoviePagination } from "../hooks/useMoviePagination";

export default function App() {
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
      <MovieHorizontalView
        title="In theaters"
        movies={nowPlaying?.results || []}
        onEndReached={
          !nowPlayingLoading && !nowPlayingFetching
            ? nowPlayingPagination.loadNextPage
            : undefined
        }
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
