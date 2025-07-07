import Slider from "@react-native-community/slider";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from "../constant/colors";
import responsive from "../until/responsive";
function BottomPlayer({ onPress }) {
   
    return <View style={styles.container}>
        <View style={styles.cont}>
        <View style={styles.subContainer}>
            
            <Pressable style={styles.mainContainer} onPress={onPress}>
                <View>
                    <Image source={require('../src/assets/Artist/1Remastered.png')} style={styles.musicImage} />
                </View>
                <View style={styles.playerContainer}>
                    <Text style={styles.bottomPlayerText}>From Me to You - Mono / Remastered</Text>
                    <View style={styles.bluetoothArtistText}>
                        <Ionicons name="bluetooth-outline" style={{width:responsive.width(15),height:responsive.height(15)}} color={Colors.primary100} />
                        <Text style={styles.textArtistName}>BEATSPILL+</Text>
                    </View>
                </View>
            </Pressable>
            <View style={styles.actionConatiner}>
                <Pressable>
                    <Ionicons name="bluetooth-outline" size={29} color='#ffffff' />
                </Pressable>
                <Pressable>
                    <Ionicons name="pause" size={29} color='#ffffff' />
                </Pressable>
            </View>
        </View>

        <View style={styles.playerBox}>
            <Slider style={{ width: responsive.width(410), height: responsive.height(3) }} value={0.5} maximumValue={1} minimumTrackTintColor={Colors.Gray100} maximumTrackTintColor={Colors.White} thumbTintColor="transparent"/>
        </View>

        </View>
    </View>
}

export default BottomPlayer;

const styles = StyleSheet.create({
    cont:{
        width: responsive.width(413),
        height: responsive.height(67),
        backgroundColor: Colors.primary200,
        borderRadius:10,
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:10,
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor:'transparent',
    },
    playerContainer: {
        width: 280,
        left: 10,
        gap: 3
    },
    bottomPlayerText: {
        fontSize: responsive.fontSize(13.5),
        color: '#ffffff',
        fontWeight: 500
    },
    mainContainer: {
        width:responsive.width(280),
        alignItems: 'center',
        flexDirection:'row'
    },
    musicImage: {
        width: responsive.width(37),
        height: responsive.height(37),
        borderRadius: 5
    },
    bluetoothArtistText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    textArtistName: {
        fontSize: responsive.fontSize(10.5),
        color: Colors.primary100
    },
    actionConatiner:{
        flexDirection:'row',
        alignItems:'center'
    },
    playerBox:{
        bottom:0
    }
});