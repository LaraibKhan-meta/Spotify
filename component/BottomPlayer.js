import Slider from "@react-native-community/slider";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from "../constant/colors";
function BottomPlayer({onPress})
{
    return <View style={styles.container}>
        <View style={styles.subContainer}>
        <Pressable style={styles.mainContainer} onPress={onPress}>
           <Image source={require('../src/assets/Artist/1Remastered.png')} style={styles.musicImage}/>
            <View style={styles.playerContainer}>
                <Text style={styles.bottomPlayerText}>From Me to You - Mono / Remastered</Text>
                <View style={styles.bluetoothArtistText}>
                    <Ionicons name="bluetooth-outline" size={11} color={Colors.primary100}/>
                    <Text style={styles.textArtistName}>BEATSPILL+</Text>
                </View>
            </View>
        </Pressable>
        <Pressable>
            <Ionicons name="bluetooth-outline" size={29} color='#ffffff'/>
        </Pressable>
        <Pressable>
            <Ionicons name="pause" size={29} color='#ffffff'/>
        </Pressable>
        </View>
        
        <View style={styles.playerBox}>
            <Slider style={{width: 430,height:0,marginLeft:-15}}  value={0.5} minimumValue={0} maximumValue={1} minimumTrackTintColor={Colors.Gray100} maximumTrackTintColor={Colors.White} thumbTintColor="transparent" />
        </View>
              
       
    </View>
}

export default BottomPlayer;

const styles = StyleSheet.create({
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15,
    },
    container:{
        backgroundColor:Colors.primary200,
        paddingHorizontal:8,
        paddingTop:8,
        borderRadius:10
    },
    playerContainer:{
         width:280,
         left:10,
         gap:3
    },
    bottomPlayerText:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:500
    },
    mainContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    musicImage:{
        width:37,
        height:37,
        borderRadius:5
    },
    bluetoothArtistText:{
        flexDirection:'row',
        alignItems:'center',
        gap:4,
    },
    textArtistName:{
        fontSize:11,
        color:Colors.primary100
    },
    playerBox:{
        width:'100%'
    }
});