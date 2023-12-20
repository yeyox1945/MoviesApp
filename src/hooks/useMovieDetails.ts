import {
  useGetCreditsByIdQuery,
  useGetMovieByIdQuery,
} from "../redux/apis/moviesApi";

interface MovieDetails {}

const useMovieDetails = (movieId: string) => {
  const {
    data: movie,
    isLoading: movieLoading,
    isFetching: movieFetching,
    error: movieError,
  } = useGetMovieByIdQuery(movieId);
  const {
    data: credits,
    isLoading: creditsLoading,
    isFetching: creditsFetching,
    error: creditsError,
  } = useGetCreditsByIdQuery(movieId);

  return {
    movie,
    credits,
    isLoading: movieLoading || creditsLoading,
    isFetching: movieFetching || creditsFetching,
    error: movieError || creditsError,
  };
};

export default useMovieDetails;
