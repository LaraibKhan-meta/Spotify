
import { View,Text,Pressable,StyleSheet } from "react-native";
import { Colors } from "../../constant/colors";


function NextButton({onPress,children,style}) {
    return (
        <Pressable style={[styles.mainContainer,style]} onPress={onPress}>
            <View style={styles.nextBtn}>
                <Text style={styles.nextText}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default NextButton;

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    nextBtn:{
        padding:12,
        backgroundColor:Colors.secondary200,
        width:82,
        borderRadius:30
    },
    nextText:{
        textAlign:'center',
        fontWeight:600,
        fontSize:15
    }
});

