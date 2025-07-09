import { useSelector } from "react-redux";
import ScreenNavigation from "./ScreensNavigation";
import { SafeAreaView } from "react-native";
import AuthNavigation from "./AuthNavigation";
import { useEffect } from "react";
import TrackPlayer from "react-native-track-player";

function AppNavigation()
{
     // const setAllTrack = useSelector(State => State.track);
    // console.log("All track", setAllTrack);
    const  {accessToken} = useSelector((state) => state.auth);
    console.log("Access Token before Login",accessToken);

      useEffect(() => {
        async function TrackPlayerSetup()
        {
           await TrackPlayer.setupPlayer();
           console.log('setup Succesfully installed');
        }
        TrackPlayerSetup();
      },[]) 

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {accessToken ? <ScreenNavigation/> : <AuthNavigation/>}
        </SafeAreaView>
    )
}

export default AppNavigation;