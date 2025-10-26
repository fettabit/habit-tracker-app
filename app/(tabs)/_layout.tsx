import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Octicons name="home-fill" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen name="login" options={{ title: "Login " }} />
    </Tabs>
  );
}
