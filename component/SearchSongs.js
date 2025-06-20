import { Image, StyleSheet, Text, View } from "react-native";

function SearchSongs({children,title,style})
{
    return (
            <View style={[styles.parentContainer,style]}>
                <View style={[styles.boxContainer]}>
                    <Text style={styles.title}>{children}</Text>
                    <Image source={require('../src/assets/images/CoverDisc.png')} style={{width:88,height:88,justifyContent:'flex-end',alignItems:'flex-end',marginTop:6,marginRight:-25}}/> 
                </View>
            </View>
    )
}

export default SearchSongs;

const styles = StyleSheet.create({
    boxContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        overflow:'hidden'
    },
    parentContainer:{
        paddingTop:20,
        paddingLeft:20,
        borderRadius:5,
        width:'48%',
        height:109,
        overflow:'hidden'
    },
    title:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:700,
        width:72
    },
    
});