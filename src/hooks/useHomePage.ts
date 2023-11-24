import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "../redux/apis/moviesApi";
import { useMoviePagination } from "./useMoviePagination";

export const useHomePage = () => {
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

  return {
    isLoading:
      nowPlayingLoading || popularLoading || topRatedLoading || upcomingLoading,
    isFetching:
      nowPlayingFetching ||
      popularFetching ||
      topRatedFetching ||
      upcomingFetching,
      nowPlaying,
      popular,
      topRated,
      upcoming,
      nowPlayingPagination,
      popularPagination,
      topRatedPagination,
      upcomingPagination,
  };
};
