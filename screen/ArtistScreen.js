import { View, StyleSheet, TextInput, FlatList } from "react-native";
import HeaderSignup from "../component/HeaderSignup";
import { images } from "../constant/Images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ARTIST } from "../model/DummyData";
import ArtistItem from "../component/ArtistItem";
import ThemeColor from "../component/ThemeColor";
function ArtistScreen({navigation})
{
    function goBackHandler()
    {
        navigation.goBack();
    }
    function navigateToHome()
    {
        navigation.navigate('BottomTabs', { screen: 'Home' });
    }
    function renderArtistItemHandler(itemData)
    {
        const items = itemData.item;
        const displayArtistItem = {
            id:items.id,
            name:items.name,
            image:items.image
        }
        return <View style={styles.mainItem}><ArtistItem {...displayArtistItem} onPress={navigateToHome}/></View>
    }
    return (
        <ThemeColor>
            <View style={styles.mainContainer}>
                <HeaderSignup image={images.backIcon} onPress={goBackHandler}>Choose 3 or more artists you like.</HeaderSignup>
                <View style={styles.subContainer}>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBox}>
                            <Ionicons name="search-outline" size={20} /> 
                            <TextInput placeholder="Search" style={styles.inputField}/>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <FlatList data={ARTIST}  keyExtractor={(item) => item.id} numColumns={3} renderItem={renderArtistItemHandler} contentContainerStyle={{paddingBottom:150}}/>
                    </View>
                </View>
            </View>
        </ThemeColor>
    )
}

export default ArtistScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    searchContainer:{
        paddingHorizontal:30
    },
    searchBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#ffffff',
        borderRadius:5 ,
        paddingHorizontal:18
    },
    inputField:{
        width:'100%',
        borderRadius:5,
        paddingLeft:10,
        fontWeight:600,
        color:'#000000'
    },
    wrapper:{
        marginTop:20,
    },
    mainItem:{
        flex:1,
        justifyContent:'space-between',
        width:'100%'
    }
});