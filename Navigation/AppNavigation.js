import { useDispatch, useSelector } from "react-redux";
import ScreenNavigation from "./ScreensNavigation";
import { SafeAreaView } from "react-native";
import AuthNavigation from "./AuthNavigation";
import { useEffect } from "react";
import TrackPlayer from "react-native-track-player";
import BootSplash from "react-native-bootsplash";
import { setAccessToken } from "../redux/authToken";
import { persistor } from "../redux/store";

function AppNavigation() {
    // const setAllTrack = useSelector(State => State.track);
    // console.log("All track", setAllTrack);
    
    const { accessToken : getToken} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const { expiresIn, timestamp } = useSelector(state => state.auth);
    console.log("Access Token before Login", getToken?.accessToken);
  
    // const date = new Date(1752065341753).toString();
    // console.log("Date Timke",date);

    useEffect(() => {
           const isTokenExpired = () => {
            console.log("Checked Time");
        if (!timestamp || !expiresIn) return true;
        return Date.now() - timestamp > expiresIn * 1000;
    };
         console.log("BeforExpireAccesssToken");
            if (isTokenExpired()) {
                console.log('Access token expired, logging out...');
                dispatch({ type: 'Logout' });
                persistor.purge();
            }
            console.log("ExpireAccesssToken");
      
    }, [timestamp, expiresIn, dispatch]);
   
    useEffect(() => {
        const init = async () => {
            async function TrackPlayerSetup() {
                await TrackPlayer.setupPlayer();
                console.log('setup Succesfully installed');
            }
            TrackPlayerSetup();
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
            console.log("BootSplash has been hidden successfully");
        });
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {getToken?.accessToken ? <ScreenNavigation/> : <AuthNavigation />}
        </SafeAreaView>
    )
}

export default AppNavigation;