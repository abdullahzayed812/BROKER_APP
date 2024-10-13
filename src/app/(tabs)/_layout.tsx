import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
// import { useAppTheme } from "../_layout";

export default function TabLayout() {
  // const { colors } = useAppTheme();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false, tabBarStyle: { borderRadius: 10 } }}>
      <Tabs.Screen
        name="find"
        options={{
          title: "Find",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
        }}
      />
      <Tabs.Screen
        name="addRequest"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="myAds"
        options={{
          title: "My Ads",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="file" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="align-left" color={color} />,
        }}
      />
    </Tabs>
  );
}
