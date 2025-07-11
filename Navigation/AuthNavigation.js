import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";

const Stack = createNativeStackNavigator();
function AuthNavigation()
{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
                 <Stack.Screen name="Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;