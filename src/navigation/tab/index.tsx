import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "native-base";
import { Platform } from "react-native";
import Home from "../../screens/home";
import { colors } from "../../theme/colors";

export function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "home"
              : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "gear" : "gear";
          }

          // You can return any component that you like here!
          return (
            <Icon
              as={FontAwesome}
              name={iconName}
              color={color}
              nativeID={Platform.OS ? "ios-go-on" : "md-go-on"}
              size={size}
            />
          );
        },
        tabBarActiveTintColor: colors.light.cian,
        tabBarInactiveTintColor: colors.light.gray,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
            borderBottomWidth: 1
          }
        }}
      />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
}
