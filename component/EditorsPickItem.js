import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { images } from "../constant/Images";
import responsive from "../until/responsive";

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
        width:responsive.width(154),
        height:responsive.height(154)
    },
    text:{
        fontSize:responsive.fontSize(12),
        color:'#ffffff',
        fontWeight:300,
        width:responsive.width(154)
    },
    mainContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        gap:5
    }
});