import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import responsive from "../until/responsive";

function RecentItem({id,name,image,width,height,onPress})
{
    return (
        <Pressable onPress={onPress}>
            <View style={styles.mainContainer}>
                <Image source={{uri:image}} style={{width:width,height:height}}/>
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    )
}

export default RecentItem;

const styles = StyleSheet.create({
    image:{
        width:responsive.width(105),
        height:responsive.height(105)
    },
    mainContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        gap:5
    },
    text:{
        width:responsive.width(97),
        height:responsive.height(24),
        color:'#ffffff',
        fontSize:responsive.fontSize(12),
        fontWeight:500
    }
});