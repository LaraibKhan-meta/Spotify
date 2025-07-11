import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import responsive from "../until/responsive";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import LibraryScreen from "../screen/LibraryScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../constant/colors";

const Bottom = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.secondary50,
          height:responsive.height(70),        
        },
        tabBarActiveTintColor: '#ffffff',
        
      }} initialRouteName="Home"
    >
      <Bottom.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />), tabBarLabelStyle: { fontSize: 12 } }} />
      <Bottom.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: 'Search', tabBarIcon: ({ color, size }) => (<Ionicons name="search-outline" size={size} color={color} />), tabBarLabelStyle: { fontSize: 12 } }} />
      <Bottom.Screen name="Library" component={LibraryScreen} options={{ tabBarLabel: 'Your Library', tabBarIcon: ({ color, size }) => (<Ionicons name="library-outline" size={size} color={color} />), tabBarLabelStyle: { fontSize: 12 } }} />
    </Bottom.Navigator>

  );
}

export default BottomTabsNavigation;