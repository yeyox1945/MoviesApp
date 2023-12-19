import { Image, TouchableOpacity } from "react-native";
import { Movie } from "../models/moviesResponse";
import { router } from "expo-router";

interface Props {
  movie: Movie;
  image?: string;
  height?: number;
  width?: number;
}

const MovieCard = ({
  movie,
  image = movie.poster_path,
  height = 150,
  width = 100,
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${image}`;

  // actions
  const navigateToDetail = () =>
    router.push({
      pathname: "movies/[id]",
      params: {
        id: movie.id,
        movie: movie,
      },
    });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={navigateToDetail}
      style={{ height, width }}
    >
      <Image
        source={{
          uri,
        }}
        style={{
          flex: 1,
          objectFit: "cover",
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
