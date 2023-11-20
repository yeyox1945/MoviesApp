import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
          headerTitle: "Cinemapedia",
          tabBarStyle: {
            paddingBottom: 8,
            height: 60,
          },
          tabBarActiveTintColor: "indigo",
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "500",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: true,
            title: "Home",
            href: "/",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "albums" : "albums-outline"}
                size={20}
                color={focused ? "indigo" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            href: "/categories",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={20}
                color={focused ? "indigo" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            href: "/favorites",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={20}
                color={focused ? "indigo" : "gray"}
              />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
}
