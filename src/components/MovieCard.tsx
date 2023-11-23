import { View, Image } from "react-native";
import { Movie } from "../models/moviesResponse";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MovieCard = ({ movie, height = 150, width = 100 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{ height, width}}>
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
  );
};

export default MovieCard;
