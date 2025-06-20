import { Image, StyleSheet, View,Text, Pressable } from "react-native";

function HeaderSignup({children,image,onPress})
{
    return (
        <Pressable   onPress={onPress} >
        <View style={styles.topHeader}> 
            <Image  source={image} style={styles.backIcon} />
            <Text style={styles.text}>{children}</Text>
        </View>
        </Pressable>
    )
}
export default HeaderSignup;

const styles = StyleSheet.create({
    topHeader:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        paddingTop:32,
        width:'100%',
        justifyContent:'center'
    },
    text:{
        color:'#ffffff',
        width:'100%',
        fontSize:16,
        fontWeight:600,
        textAlign:'center',
        right:10
    },
    backIcon:{
        width:32,
        height:32,
        left:20,
    },
   
});