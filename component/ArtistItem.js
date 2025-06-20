import { Image, Pressable, StyleSheet, View, Text } from "react-native";

function ArtistItem({ id, name, image,onPress }) {
    return (
        <>
        <Pressable onPress={onPress}>
            <View style={styles.mainContainer}>
                <Image source={image} style={styles.image} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
        </> 
    )
}

export default ArtistItem;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        gap:8,
        marginBottom:30,
    },
    image:{
        width:120,
        height:120,
        borderRadius:100
    },
    text:{
        color:'#ffffff',
        fontSize:12,
        fontWeight:600
    },
    mainWrapper:{
        justifyContent:'space-between'
    }
});