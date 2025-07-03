import React, { useEffect } from "react";
import LoginScreen from "./screen/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./screen/SignupScreen";
import { StatusBar } from "react-native";
import ArtistScreen from "./screen/ArtistScreen";
import HomeScreen from "./screen/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "./constant/colors";
import LibraryScreen from "./screen/LibraryScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from "./screen/SearchScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import AlbumScreen from "./screen/AlbumScreen";
import PlayTrackScreen from "./screen/PlayTrackScreen";
import TrackPlayer from "react-native-track-player";
import Track from "./model/Track";
// import Track, { track1, track2, track3 } from "./model/Track";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

  
function MyTabs() {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.secondary50,
        },
        tabBarActiveTintColor: '#ffffff'
      }}
    >
      <Bottom.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />), tabBarLabelStyle: { fontSize: 12 } }} />
      <Bottom.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: 'Search', tabBarIcon: ({ color, size }) => (<Ionicons name="search-outline" size={size} color={color} />), tabBarLabelStyle: { fontSize: 12 } }} />
      <Bottom.Screen name="Library" component={LibraryScreen} options={{ tabBarLabel: 'Your Library', tabBarIcon: ({ color, size }) => (<Ionicons name="library-outline" size={size} color={color} />), tabBarLabelStyle: { fontSize: 12 } }} />
    </Bottom.Navigator>

  );
}
function App()
{
  // const setAllTrack = useSelector(State => State.track);

  // console.log("All track", setAllTrack);
  useEffect(() => {
    async function TrackPlayerSetup()
    {
       await TrackPlayer.setupPlayer();
       console.log('setup Succesfully installed');

    }
    TrackPlayerSetup();
  },[]) 

  return (
      <Provider store={store}>
        <StatusBar hidden/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Artist" component={ArtistScreen}/>
            <Stack.Screen name="BottomTabs" component={MyTabs}/>
            <Stack.Screen name="Album" component={AlbumScreen}/>
            <Stack.Screen name="PlayTrack" component={PlayTrackScreen}/>
             <Stack.Screen name="TrackPlay" component={Track}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  )
}

export default App;