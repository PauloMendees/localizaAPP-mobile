import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { Platform } from "react-native";
import AddItem from "../../screens/AddItem";
import Inventario from "../../screens/Inventario";
import SearchTable from "../../screens/SearchTable";
import { colors } from "../../theme/colors";

export function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inventário") {
            iconName = focused ? "shopping-bag" : "shopping-bag";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if(route.name === "Adicionar") {
            iconName = "plus"
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
        tabBarInactiveTintColor: colors.light.darkGrey
      })}
    >
      <Tab.Screen
        name="Inventário"
        component={Inventario}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Adicionar"
        component={AddItem}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchTable}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
