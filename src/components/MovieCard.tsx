import { View, Image, TouchableOpacity } from "react-native";
import { Movie } from "../models/moviesResponse";
import { router } from "expo-router";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MovieCard = ({ movie, height = 150, width = 100 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigateToDetail = () =>
    router.push({
      pathname: "movies/[id]",
      params: {
        id: movie.id,
      },
    });

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={navigateToDetail}>
      <View style={{ height, width }}>
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
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
