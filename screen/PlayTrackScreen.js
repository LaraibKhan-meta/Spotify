import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { images } from "../constant/Images";
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../constant/colors";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress, State } from "react-native-track-player";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MarqueeText from 'react-native-marquee'
import responsive from "../until/responsive";
function PlayTrackScreen({route})
{
    const [showTitle,setShowtTitle] = useState();

    const {id} = route.params;
    const tracks = useSelector((state) => state.track.find((song) => song.id === id));
    const allTrack = useSelector((state) => state.track);
    console.log(tracks.title);

    const [nameIcon,setNameIcon] = useState('');
    const progress = useProgress();

    useEffect(() => {
        async function getPlayTrack() {
            await TrackPlayer.reset();
            await TrackPlayer.add(allTrack);
            const index = allTrack.findIndex(song => song.id === id);
            await TrackPlayer.skip(index);
            await TrackPlayer.play();
            console.log("Play audio");
            setNameIcon('pause-outline');
            let trackIndex = await TrackPlayer.getCurrentTrack();
            let trackObject = await TrackPlayer.getTrack(trackIndex);
            setShowtTitle(trackObject.title);
        }
        getPlayTrack();
    }, [])

    async function Playtrack(){
        const state = await TrackPlayer.getState();
        console.log(state);
        if(state === State.Paused ||  state === State.Ready || state === State.Stopped)
        {
            await TrackPlayer.play();
            console.log("Play audio");
            setNameIcon('pause-outline');
        }
        else if(state === State.Playing) {
           await TrackPlayer.pause();
            console.log('song is pause');
            setNameIcon('caret-forward');
        }
    }
    async function playPreviousSong(){
        try {
          
            console.log('Skip to previous');
            await TrackPlayer.skipToPrevious();
            await TrackPlayer.play();
            let trackIndex = await TrackPlayer.getCurrentTrack();
            let trackObject = await TrackPlayer.getTrack(trackIndex);
            setShowtTitle(trackObject.title);

        } catch (error) {
            console.log("Previous songs not available",error);
        }  
    }
    async function playNextSong() {

        try {
            await TrackPlayer.skipToNext();
            await TrackPlayer.play();
            let trackIndex = await TrackPlayer.getCurrentTrack();
            let trackObject = await TrackPlayer.getTrack(trackIndex);
            setShowtTitle(trackObject.title);

        } catch (error) {
            console.log("Next song is not available",error);
        } 
    }
    return (
        <LinearGradient colors={['#C63224', '#641D17', '#271513']} style={styles.linearGradient}>
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.trackText}>1Remastered</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={images.Remastered380} style={styles.imageTrack}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.infoText}>
                    {/* <Text style={styles.songsName} >{showTitle} </Text> */}
                    <MarqueeText style={styles.songsName} speed={0.5} marqueeOnStart={true} loop={true} delay={2000}>{showTitle}</MarqueeText>
                    <Text style={styles.songArtist}>{tracks.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicon name="heart-outline" size={30} color="#ffffff" />
                </View>
            </View>
            <View style={styles.track}>
                 <Slider style={{width: responsive.width(430),height:responsive.height(4)}}  value={progress.position}   onSlidingComplete={(val) => {TrackPlayer.seekTo(val)}} minimumValue={0} maximumValue={progress.duration} minimumTrackTintColor={Colors.Gray100} maximumTrackTintColor={Colors.White} thumbTintColor={Colors.Gray100} />
            </View>
            <View style={styles.playButton}>
                <Ionicon name="play-skip-back" size={30} onPress={playPreviousSong} color="white"/>
                <View style={styles.playBtn}>
                    <Ionicon name={nameIcon} size={50} color="#000000"  onPress={Playtrack} />
                </View>
                <Ionicon name="play-skip-forward" size={30} onPress={playNextSong} color="white"/>
            </View>
        </View>
        </LinearGradient>
    )
}

export default PlayTrackScreen;
                                 
const styles = StyleSheet.create({
    linearGradient:{
        flex:1
    },
    mainContainer:{
        width:responsive.width(428),
        hegiht:responsive.height(926)
    },
    imageTrack:{
        width:responsive.width(380),
        height:responsive.height(380)
    },
    detailsContainer:{
        flexDirection:'row',
        paddingVertical:20,
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    iconContainer:{
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:30
    },
    imageContainer:{
        paddingVertical:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    songsName:{
        fontSize:responsive.fontSize(22),
        color:'#ffffff',
        fontWeight:600,
        width:responsive.width(300),
    },
    songArtist:{
        fontSize:responsive.fontSize(16),
        color:Colors.Gray100
    },
    infoText:{
        flexDirection:'column',
        gap:5,
    },
    playButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:50
    },
    track:{
        paddingBottom:40,
        paddingTop:10
    },
    changeTrack:{
        width:22,
        height:25
    },
     changeTracki:{
        width:22,
        height:25
    },
    playBtn:{
        padding:10,
        backgroundColor:'white',
        borderRadius:50
    },
    trackText:{
        fontSize:responsive.fontSize(14),
        color:'#ffffff'
    }
});