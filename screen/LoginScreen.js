import { Image, StyleSheet, View, Text, Button, ScrollView } from "react-native";
import SocialButton from "../component/Ui/SocialButton";
import { images } from "../constant/Images";
import ThemeColor from "../component/ThemeColor";
import { handleOpenInAppBrowser, spotifyLogin } from "../until/auth";
import { useDispatch } from "react-redux";
import MainContainer from "../component/MainContainer";
import responsive from "../until/responsive";
import { setAccessToken } from "../redux/authToken";

function LoginScreen({ navigation }) {
    const dispatch = useDispatch();

    function navigateSignupScreen() {
        navigation.navigate("Signup");
    }
    const handleLogin = async () => {
        // spotifyLogin({ navigation, dispatch });
         try {
            const res = await handleOpenInAppBrowser();
            if (res?.access_token) {
                console.log("Get Access Token:", res.access_token);
                dispatch(setAccessToken({
                    accessToken: res.access_token,
                    expiresIn: res.expires_in,
                    timestamp: Date.now()
                }));
            } else {
                console.log("Can't get access token");
            }
            } catch (error) {
            console.error('Login flow failed', error);
            }
    }
    return (
        <ThemeColor>
            <ScrollView>
                <View style={styles.mainConatiner}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../src/assets/images/spotify_image.png')} style={styles.image} />
                    </View>
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Millions of Songs.</Text>
                        <Text style={styles.text}>Free on Spotify.</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <SocialButton mode="Signup" onPress={navigateSignupScreen}>Sign up free</SocialButton>
                        <SocialButton image={images.Google} onPress={handleLogin}>Continue with Google</SocialButton>
                        <SocialButton image={images.facebook}>Continue with facebook</SocialButton>
                        <SocialButton image={images.ios}>Continue with Apple</SocialButton>
                        <SocialButton mode="Login" onPress={handleLogin}>Login</SocialButton>
                    </View>
                </View>
            </ScrollView>
        </ThemeColor>
    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    mainConatiner: {
        width:responsive.width(428),
        height:responsive.height(926)
    },
    image: {
        width: responsive.width(438),
        height: responsive.height(446),
        resizeMode:'stretch'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -30
    },
    text: {
        color: '#ffffff',
        fontSize: responsive.fontSize(28),
        fontWeight: '600'
    },
    btnContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },

});