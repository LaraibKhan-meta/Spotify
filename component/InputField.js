import { Text, View,TextInput, Pressable, StyleSheet } from "react-native";
import { Colors } from "../constant/colors";

function InputField({children,subTitle,value})
{
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.titleForm}>{children}</Text>
            <TextInput value={value} style={styles.inputField}/>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

export default InputField;

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:22
    },
    titleForm:{
        fontSize:20,
        fontWeight:"700",
        color:'#ffffff'
    },
    inputField:{
        backgroundColor:Colors.secondary100,
        padding:16,
        borderRadius:5
    },
    subTitle:{
        color:'#ffffff',
        marginTop:6,
        fontSize:8
    }
});