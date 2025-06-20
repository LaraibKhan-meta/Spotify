import { Image, StyleSheet, View,Text, FlatList } from "react-native";
import { images } from "../constant/Images";
import { Colors } from "../constant/colors";
import Ionicon from 'react-native-vector-icons/Ionicons';
import { RecentlyPlayed } from "../model/DummyData";
import PlaylistItem from "../component/PlaylistItem";
import LinearGradient from "react-native-linear-gradient";
import BottomPlayer from "../component/BottomPlayer";
import { useSelector } from "react-redux";

function AlbumScreen({navigation})
{

    const tracks = useSelector((state) => state.track);


    function renderToPlaytrack(item)
    {
        navigation.navigate("PlayTrack",{id:item});
    }
    function renderPlaylist(itemData)
    {
        const item = itemData.item;

        const displaydata = {
            id:item.id,
            name:item.title,
            artist:item.artist,
            onPress: () => renderToPlaytrack(item.id)
        }
       
        return <View style={styles.listItem}><PlaylistItem {...displaydata}/></View>
    }

   return (
    <LinearGradient colors={['#C63224', '#641D17', '#271513']} style={styles.linearGradient}>
        <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <Image  source={images.AlbumImage}  style={styles.albumImage}/>
        </View>
        <View style={styles.contentConatiner}>
            <Text style={styles.text}>1Remastered</Text>
        </View>
        <View style={styles.albumDetails}>
            <View style={styles.albumTextcontainer}>
                <View style={styles.albumText}>
                    <Image source={images.AlbumArtist} style={styles.imageIcon}/>
                    <Text style={styles.artistName}>The Beatles</Text>
                </View>
                <View style={styles.subAlbumText}>
                    <Text>Album .2020</Text>
                    <View style={styles.iconBtn}>
                        <Ionicon name="heart-outline" size={25} color="#FFFFFF"></Ionicon>
                        <Ionicon name="arrow-down-circle-sharp" size={25}  color="#1DB954"></Ionicon>
                        <Ionicon name="ellipsis-horizontal-sharp" size={25} color="white"></Ionicon>
                    </View>
                </View>
            </View>
            <View> 
                <Ionicon name="pause-circle-sharp" size={56} color="#1DB954"></Ionicon>
            </View>
        </View>
        <View style={styles.listSongs}>
            <FlatList data={tracks}  keyExtractor={item => item.id} renderItem={renderPlaylist}/>
        </View>
    </View>
    <BottomPlayer/>
    </LinearGradient>
   ) 
}

export default AlbumScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'transparent'
    },
    imageContainer:{
        width:'100%',
        marginBottom:30,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
        paddingTop:80,
        paddingBottom:25
    },
    albumImage:{
        width:234,
        height:236,
        resizeMode:'contain',
    },
    contentConatiner:{
        paddingVertical:10,
        paddingHorizontal:20,
    },
    text:{
        fontSize:25,
        fontWeight:500,
        color:'#ffffff'
    },
    albumText:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingBottom:10
    },
    subAlbumText:{
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    albumDetails:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    imageIcon:{
        width:23,
        height:21
    },
    artistName:{
        fontSize:14,
        fontWeight:500,
        color:'#ffffff'
    },
    iconBtn:{
        paddingTop:10,
        flexDirection:'row',
        gap:22
    },
    listItem:{
        paddingHorizontal:20,
        paddingBottom:20
    },
    listSongs:{
        paddingTop:20,
        flex:1
    },
    linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});