import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
        width:105,
        height:105
    },
    mainContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        gap:5
    },
    text:{
        color:'#ffffff',
        fontSize:12,
        fontWeight:500
    }
});