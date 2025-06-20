import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";


function RadioButton({children,onPress,style})
{
    
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>{children}</Text>
            <Pressable style={({pressed}) => [styles.radioBtn, pressed && styles.pressed,style]} onPress={onPress}>
                <View>
                    <Text></Text>
                </View>
            </Pressable>
        </View>
    )
}

export default RadioButton;
const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:22,
        marginTop:30
    },
    radioBtn:{
        borderWidth:2,
        borderColor:Colors.secondary300,
        borderRadius:100,
        height:24,
        width:24
    },
    text:{
        color:'#ffffff',
        fontSize:10,
        width:'80%'
    },
    pressed:{
        backgroundColor:Colors.secondary200
    }
});