import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Stack } from "expo-router";
import { Platform, SafeAreaView } from "react-native";

export default function StackLayout() {
  const marginTop = Platform.OS === "ios" ? -60 : 0;

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginTop }}>
        <Stack
          screenOptions={{
            headerTitleAlign: "left",
          }}
        >
          <Stack.Screen
            name="(home)"
            options={{
              headerShown: false,
              title: "Home",
            }}
          />
          <Stack.Screen
            name="movies/[id]"
            options={{
              title: "Movie detail",
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </Provider>
  );
}
