import { Image, StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { images } from "../constant/Images";
import { Colors } from "../constant/colors";
import Ionicon from 'react-native-vector-icons/Ionicons';
import { RecentlyPlayed } from "../model/DummyData";
import PlaylistItem from "../component/PlaylistItem";
import LinearGradient from "react-native-linear-gradient";
import BottomPlayer from "../component/BottomPlayer";
import { useSelector } from "react-redux";
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import TopHeader from "../component/TopHeader";
import { play } from "react-native-track-player/lib/src/trackPlayer";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import responsive from "../until/responsive";

function AlbumScreen({ navigation }) {

    const tracks = useSelector((state) => state.track);


    function renderToPlaytrack(item) {
        navigation.navigate("PlayTrack", { id: item });
    }
    function renderPlaylist(itemData) {
        const item = itemData.item;

        const displaydata = {
            id: item.id,
            name: item.title,
            artist: item.artist,
            onPress: () => renderToPlaytrack(item.id)
        }

        return <View style={styles.listItem}><PlaylistItem {...displaydata} /></View>
    }


    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    const headerStyles = useAnimatedStyle(() => {
        const height = interpolate(scrollY.value, [0, 100, 200, 300], [200, 150, 100, 50], Extrapolation.CLAMP);
        const marginBottom = interpolate(scrollY.value, [0, 300], [20, 10], Extrapolation.CLAMP);
        const marginTop = interpolate(scrollY.value, [0, 50, 100, 200, 300], [30, 10, 5, 0], Extrapolation.CLAMP);
        return {
            height,
            marginBottom,
            marginTop,
        };
    });

    const imageStyle = useAnimatedStyle(() => {
        const width = interpolate(scrollY.value, [0, 100, 200], [200, 100, 50], Extrapolation.CLAMP);
        const height = interpolate(scrollY.value, [0, 100, 200], [200, 100, 50], Extrapolation.CLAMP);
        const opacity = interpolate(scrollY.value, [0, 100, 200], [1, 0.5, 0], Extrapolation.CLAMP);

        return {
            width,
            height,
            opacity,
        };
    });

    const textStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 100, 120], [1, 0.4, 0], Extrapolation.CLAMP);

        return {
            opacity,
        };
    });

    const topHeaderVisibleStyles = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 100, 150], [0, 0, 1], Extrapolation.CLAMP);
        return {
            opacity,
        };
    });
    const textVisibleStyles = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 150,180], [0, 0, 1], Extrapolation.CLAMP);
        return {
            opacity,
        };
    });
      
    return (
        <>
            <LinearGradient colors={['#C63224', '#641D17', '#271513']} style={styles.linearGradient}>
              
                <TopHeader style={topHeaderVisibleStyles} textStyle={textVisibleStyles}>1Remastered</TopHeader>
                
                <Animated.ScrollView onScroll={scrollHandler}  showsVerticalScrollIndicator={false}  >
                    
                        <Animated.View style={[styles.imageContainer, headerStyles]}>
                            <Animated.Image source={images.AlbumImage} style={imageStyle} />
                        </Animated.View>

                        <Animated.View style={styles.contentConatiner}>
                            <Animated.Text style={[textStyle, styles.text]}>1Remastered</Animated.Text>
                        </Animated.View>
                        <View style={[styles.albumDetails,{position: 'relative'}]}>
                            <View style={styles.albumTextcontainer}>
                                <View style={styles.albumText}>
                                    <Image source={images.AlbumArtist} style={styles.imageIcon} />
                                    <Text style={styles.artistName}>The Beatles</Text>
                                </View>
                                <View style={styles.subAlbumText}>
                                    <Text style={styles.albumTextSize}>Album .2020</Text>
                                    <View style={styles.iconBtn}>
                                        <Ionicon name="heart-outline" size={25} color="#FFFFFF"></Ionicon>
                                        <Ionicon name="arrow-down-circle-sharp" size={25} color="#1DB954"></Ionicon>
                                        <Ionicon name="ellipsis-horizontal-sharp" size={25} color="white"></Ionicon>
                                    </View>
                                </View>
                            </View>  
                            {/* <View style={{ position: 'absolute', zIndex: 1000,top: 0,bottom:0,left: 0,right: 0 }}>
                                <Ionicon name="pause-circle-sharp" size={56} color="#1DB954" style={styles.playIcon} />
                            </View> */}
                        </View>
                   
                        <View style={styles.listSongs}>
                            <FlatList data={tracks} keyExtractor={item => item.id} renderItem={renderPlaylist}  />
                        </View>  
             
                    
                </Animated.ScrollView>
                <BottomPlayer />
            </LinearGradient>
        </>
    )
}

export default AlbumScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    imageContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumImage: {
        width: 234,
        height: 236,
        resizeMode: 'contain',
    },
    contentConatiner: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: responsive.fontSize(25),
        fontWeight: 500,
        color: '#ffffff'
    },
    albumText: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10,
        zIndex: -1000
    },
    subAlbumText: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    albumDetails: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: -999999
    },
    imageIcon: {
        width: 23,
        height: 21,
        zIndex: -9999,
    },
    artistName: {
        fontSize: 14,
        fontWeight: 500,
        color: '#ffffff',
        zIndex: -999,
    },
    iconBtn: {
        paddingTop: 10,
        flexDirection: 'row',
        gap: 22
    },
    listItem: {
        paddingBottom: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    listSongs: {
        paddingTop: 20,
    },
    linearGradient: {
        width:responsive.width(428),
        height:responsive.height(926)
    },
    fixedPlayIcon: {
    position: 'relative',
    top: 430,
    right: 0,
    left: 340,
    bottom: 0,
    zIndex: 2000,
    },
    albumTextSize:{
        fontSize:responsive.fontSize(13),
        color:'#B3B3B3'
    }
});