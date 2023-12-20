import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingPage;
