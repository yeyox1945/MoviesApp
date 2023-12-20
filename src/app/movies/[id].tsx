import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LoadingPage from "../../components/LoadingPage";
import Ionicons from "@expo/vector-icons/Ionicons";
import useMovieDetails from "../../hooks/useMovieDetails";
import MovieDetails from "../../components/movies/MovieDetails";

const screenHeight = Dimensions.get("screen").height;

export const MovieDetailPage = () => {
  // hooks
  const { id } = useLocalSearchParams();
  const { movie, credits, isLoading, isFetching } = useMovieDetails(
    id as string
  );

  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  if (isLoading || !movie || !credits) return <LoadingPage />;

  return (
    <>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={25} color="white" />
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
        <View style={styles.marginContainer}>
          <Text style={styles.subTitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>

        <MovieDetails movieFull={movie} cast={credits.cast} />
      </ScrollView>
    </>
  );
};

export default MovieDetailPage;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.65,
    overflow: "hidden",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: { position: "absolute", left: 20, top: 50, zIndex: 10 },
});
