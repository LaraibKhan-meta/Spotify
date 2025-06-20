import { StyleSheet, View } from "react-native";
import { Colors } from "../constant/colors";


function ThemeColor({children})
{
    return <View style={styles.container}>{children}</View>
}

export default ThemeColor;

const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:Colors.secondary50,
}
});