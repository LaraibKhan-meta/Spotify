import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { images } from "../constant/Images";

function EditorsPickItem({id,name,image})
{
    return (
       <Pressable>
            <View style={styles.mainContainer}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.text}>{name}</Text> 
            </View>
       </Pressable>
    )
}

export default EditorsPickItem;

const styles = StyleSheet.create({
    image:{
        width:154,
        height:154
    },
    text:{
        fontSize:12,
        color:'#ffffff',
        fontWeight:300,
        width:154
    },
    mainContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        gap:5
    }
});