import { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../constant/colors";
function PlaylistItem({id,name,artist,onPress})
{
    console.log(onPress);
    return (
        <Pressable style={styles.mainContainer} onPress={onPress}>
            <View style={styles.listContainer}>
                <Text style={styles.text}>{name}</Text>
                <View style={styles.artistContainer}>
                    <Ionicon name="arrow-down-circle-sharp" size={18}  color="#1DB954"/>
                    <Text style={styles.textArt}>{artist}</Text>
                </View>
            </View>
            <View>
                 <Ionicon name="ellipsis-horizontal-sharp" size={27} color="white"/>
            </View>
        </Pressable>
    )
}

export default PlaylistItem;

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listContainer:{
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    text:{
        fontSize:17,
        fontWeight:500,
        color:'#ffffff',
        paddingVertical:5
    },
    textArt:{
        color:'white'
    },
    artistContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:8
    }

});