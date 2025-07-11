import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screen/SignupScreen";
import ArtistScreen from "../screen/ArtistScreen";
import AlbumScreen from "../screen/AlbumScreen";
import PlayTrackScreen from "../screen/PlayTrackScreen";
import Track from "../model/Track";
import BottomTabsNavigation from "./BottomTabsNavigation";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

function ScreenNavigation() {
    return (
        <NavigationContainer>
            <StatusBar hidden/>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BottomTabs" component={BottomTabsNavigation} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Artist" component={ArtistScreen} />
                <Stack.Screen name="Album" component={AlbumScreen} />
                <Stack.Screen name="PlayTrack" component={PlayTrackScreen} />
                <Stack.Screen name="TrackPlay" component={Track} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreenNavigation;