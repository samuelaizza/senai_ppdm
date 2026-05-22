import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//páginas

//navegadores
const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = "ellipse-outline";

          if (route.name === "Atendimentos") {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          if (route.name === "Profissionais") {
            iconName = focused ? "people" : "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: true,
        tabBarActiveTintColor: "#FF914D",
        tabBarInactiveTintColor: "#777",
      })}
    ></Tabs.Navigator>
  );
}
