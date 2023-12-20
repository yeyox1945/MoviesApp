import React from "react";
import { Cast } from "../../models/movieCreditsResponse";
import { View, Text, Image, StyleSheet } from "react-native";
interface Props {
  actor: Cast;
}

const CastCard = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 60, height: 60, borderRadius: 10 }}
        />
      )}

      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{actor.name} </Text>
        <Text style={{ fontSize: 18, opacity: 0.7 }}>{actor.character} </Text>
      </View>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingRight: 5,
    gap: 10,
  },
});
