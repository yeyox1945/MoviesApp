import React from "react";
import { View, Text, FlatList } from "react-native";
import currencyFormatter from "currency-formatter";
import { MovieFull } from "../../models/movieDetailResponse";
import { Cast } from "../../models/movieCreditsResponse";
import Ionicons from "@expo/vector-icons/Ionicons";
import CastCard from "../cast/CastCard";

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 20 }}>
        {/* Votes */}
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Ionicons name="star" size={16} color="grey" />
          <Text>{movieFull.vote_average}</Text>
          <Text>- {movieFull.genres.map((g) => g.name).join(", ")}</Text>
        </View>
        {/* Overview */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Overview
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview} </Text>

        {/* Budget */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Budget
        </Text>

        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieFull.budget, { code: "USD" })}
        </Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}
        >
          Cast
        </Text>
        <FlatList
          horizontal
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastCard actor={item} />}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </>
  );
};

export default MovieDetails;
