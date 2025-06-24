import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";


function TopHeader({children,style,textStyle})
{
    return (
        <Animated.View style={[styles.topHeader,style]}>
            <Animated.Text style={[styles.text,textStyle]}>{children}</Animated.Text>
        </Animated.View>
    )
}   
export default TopHeader;

const styles = StyleSheet.create({
    topHeader:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        paddingTop:20,
        width:'100%',
        justifyContent:'flex-start',
        backgroundColor:'#641D17',
        zIndex:0,
    },
    text:{
        color:'#ffffff',
        width:'100%',
        fontSize:16,
        fontWeight:600,
        textAlign:'left',
        right:10
    },
    backIcon:{
        width:32,
        height:32,
        left:20,
    },  
});