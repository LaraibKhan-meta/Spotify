import { StyleSheet, View, Text, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeColor from "../component/ThemeColor";
import SearchSongs from "../component/SearchSongs";
function SearchScreen() {
    return (
        <ThemeColor>
            <View style={styles.mainContainer}>
                <View style={styles.topHeader}>
                    <Text style={styles.recentlyText}>Search</Text>
                    <View style={styles.topIconContainer}>
                        <Ionicons name="camera" size={22} color="#ffffff" />
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <Ionicons name="search-outline" size={20} />
                        <TextInput placeholder="Search" style={styles.inputField} />
                    </View>
                </View>
                <View style={styles.artistBox}>
                    <Text style={styles.mainTitle}>Your Top Games</Text>
                    <View style={styles.mainSearch}>
                        <SearchSongs style={{ backgroundColor: '#9854B2' }}>Pop</SearchSongs>
                        <SearchSongs style={{ backgroundColor: '#678026' }}>Indie</SearchSongs>
                    </View>
                </View>
                <View style={styles.artistBox}>
                    <Text style={styles.mainTitle}>Your Top Games</Text>
                    <View style={styles.mainSearch}>
                        <SearchSongs style={{ backgroundColor: '#3371E4' }}>News & Politics</SearchSongs>
                        <SearchSongs style={{ backgroundColor: '#CF4321' }}>Indie</SearchSongs>
                    </View>
                </View>
            </View>
        </ThemeColor>

    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 50
    },
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    recentlyText: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 700
    },
    topIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 18,
    },
    inputField: {
        width: '100%',
        borderRadius: 5,
        paddingLeft: 10,
        fontWeight: 600,
        color: '#000000'
    },
    searchContainer: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 18
    },
    artistBox: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: "space-between",
        width: '100%',
        paddingHorizontal: 10
    },
    mainTitle: {
        paddingBottom: 15,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 600
    },
    mainSearch:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:12
    }
});