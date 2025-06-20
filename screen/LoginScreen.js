import { Image, StyleSheet, View,Text, Button } from "react-native";
import SocialButton from "../component/Ui/SocialButton";
import { images } from "../constant/Images";
import ThemeColor from "../component/ThemeColor";
import { spotifyLogin } from "../until/auth";
import { useDispatch } from "react-redux";

function LoginScreen({navigation})
{
    const dispatch = useDispatch();

    function navigateSignupScreen()
    {
        navigation.navigate("Signup");
    }
    const handleLogin = () => {
        spotifyLogin({navigation,dispatch});

    }
    return (
        <ThemeColor>
        <View style={styles.mainConatiner}>
            <Image source={require('../src/assets/images/spotify_image.png')} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Millions of Songs.</Text>
                <Text style={styles.text}>Free on Spotify.</Text>
            </View>
            <View style={styles.btnContainer}>
                <SocialButton mode="Signup" onPress={navigateSignupScreen}>Sign up free</SocialButton>
                <SocialButton image={images.Google}>Continue with Google</SocialButton>
                <SocialButton image={images.facebook}>Continue with facebook</SocialButton>
                <SocialButton image={images.ios}>Continue with Apple</SocialButton>
                <SocialButton mode="Login" onPress={handleLogin}>Login</SocialButton>
            </View>
        </View>
        </ThemeColor>
    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    mainConatiner:{
        flex:1
    },
    image:{
        width:'100%',
    },
    textContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    text:{
        color:'#ffffff',
        fontSize:28,
        fontWeight:'600'
    },
    btnContainer:{
        padding:40,
    },
   
});