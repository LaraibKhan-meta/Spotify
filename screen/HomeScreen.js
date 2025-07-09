import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { EditorPicks, RecentlyPlayed } from "../model/DummyData";
import RecentItem from "../component/RecentItem";
import { Colors } from "../constant/colors";
import EditorsPickItem from "../component/EditorsPickItem";
import ThemeColor from "../component/ThemeColor";
import BottomPlayer from "../component/BottomPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentlyPlayed } from "../until/auth";
import { useEffect, useState } from "react";
import responsive from "../until/responsive";
import { setAccessToken } from "../redux/authToken";
import BottomTabs from "../Navigation/ScreensNavigation";
function HomeScreen({ navigation }) {
    const [recentTracks, setRecentTracks] = useState([]);
    const {accessToken} = useSelector((state) => state.auth.accessToken);
    console.log("GET TOKEN",accessToken)
    const {expiresIn, timestamp } = useSelector(state => state.auth);
    // console.log('authToken', gettoken);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            const isTokenExpired = () => {
            if (!timestamp || !expiresIn) return true;
            return Date.now() - timestamp > expiresIn * 1000;
            }; 

            if (isTokenExpired()) {
            console.log('Access token expired, logging out...');
            dispatch(setAccessToken({ accessToken: null, expiresIn: null, timestamp: null }));
            navigation.replace('Login');
            return;
            }
            const tracks = await fetchRecentlyPlayed({ accessToken:accessToken });
            setRecentTracks(tracks);
        };

        if (accessToken) {
            loadData();
        }
        }, [accessToken]);

    function renderRecentlyPlayedList(itemData) {
        const item = itemData.item;
        const displayRecentItems = {
            id: item.id,
            name: item.name,
            image: item.image,
            width: 105,
            height: 105
        }

        return <View style={styles.itemContainer}><RecentItem {...displayRecentItems} onPress={() => navigation.navigate('TrackPlay')} /></View>
    }
    function renderEditorPickList(itemData) {
        const item = itemData.item;
        const displayRecentItems = {
            id: item.id,
            name: item.name,
            image: item.image
        }

        return <View style={styles.editorContainer}><EditorsPickItem {...displayRecentItems} /></View>
    }
    function renderToPlayerScreen() {
        navigation.navigate('Album');
    }
    return (
        <ThemeColor>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.topHeader}>
                        <Text style={styles.recentlyText}>Recently played</Text>
                        <View style={styles.topIconContainer}>
                            <Ionicons name="notifications-outline" size={22} color="#ffffff" />
                            <MaterialIcons name="history" size={22} color="#ffffff" />
                            <Ionicons name="settings-outline" size={22} color="#ffffff" />
                        </View>
                    </View>
                    <View style={styles.mainListContainer}>
                        <FlatList data={recentTracks} horizontal keyExtractor={(item) => item.id} renderItem={renderRecentlyPlayedList} showsHorizontalScrollIndicator={false} />
                    </View>
                    <View style={styles.reviewConatiner}>
                        <Image source={require('../src/assets/images/review.png')} style={styles.imageReview} />
                        <View style={styles.textReviewContainer}>
                            <Text style={styles.textHash}>#SPOTIFYWRAPPED</Text>
                            <Text style={styles.reviewText}>Your 2021 in review</Text>
                        </View>
                    </View>
                    <View style={styles.topSongsContainer}>
                        <View style={styles.songsItemContainer}>
                            <Image source={require('../src/assets/Artist/topSong.jpg')} style={styles.songsItemImage} />
                            <Text style={styles.songsItemText}>Your Top Songs 2021</Text>
                        </View>
                        <View style={styles.songsItemContainer}>
                            <Image source={require('../src/assets/Artist/artist.jpg')} style={styles.songsItemImage} />
                            <Text style={styles.songsItemText}>Your Artists Revealed</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.editorsPickContainer}>
                            <Text style={styles.editorsText}>Editor's picks</Text>
                        </View>
                        <View style={styles.editorSongsContainer}>
                            <FlatList data={EditorPicks} horizontal keyExtractor={(item) => item.id} renderItem={renderEditorPickList} showsHorizontalScrollIndicator={false} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomPlayer onPress={renderToPlayerScreen} />
        </ThemeColor>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 50
    },
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    recentlyText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 700
    },
    topIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 18,
    },
    mainListContainer: {
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 0,
        marginRight: 0,
    },
    itemContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        marginRight: 20
    },
    reviewConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 25,
        gap: 10
    },
    imageReview: {
        width: responsive.width(58),
        height: responsive.height(58)
    },
    textReviewContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    reviewText: {
        fontSize: responsive.fontSize(26),
        color: '#ffffff',
        fontWeight: 500
    },
    textHash: {
        fontSize: responsive.fontSize(10),
        color: Colors.secondary400,
    },
    topSongsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10
    },
    songsItemContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5
    },
    songsItemImage: {
        width: responsive.width(153),
        height: responsive.height(155)
    },
    songsItemText: {
        color: '#ffffff',
        fontWeight: 500,
        fontSize: responsive.fontSize(13)
    },
    editorsPickContainer: {
        paddingHorizontal: 10,
        marginTop: 18
    },
    editorsText: {
        fontSize: responsive.fontSize(24),
        color: '#ffffff',
        fontWeight: 500
    },
    editorContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        marginRight: 15
    },
    editorSongsContainer: {
        marginTop: 10,
        paddingLeft: 10
    }
});