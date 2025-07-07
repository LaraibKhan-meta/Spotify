import { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../constant/colors";
import responsive from "../until/responsive";
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
                 <Ionicon name="ellipsis-horizontal-sharp" style={{width:responsive.width(27),height:responsive.height(27)}} color="white"/>
            </View>
        </Pressable>
    )
}

export default PlaylistItem;

const styles = StyleSheet.create({

    mainContainer:{
        width:responsive.width(406),
        height:responsive.height(58),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    listContainer:{
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    text:{
        fontSize:responsive.fontSize(17),
        fontWeight:500,
        color:'#ffffff',
        paddingVertical:5
    },
    textArt:{
        color:'#B3B3b3',
        fontSize:responsive.fontSize(14),
    },
    artistContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:8
    }

});