import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";

function SocialButton({ children, mode, image, onPress }) {

    if (mode == 'Signup') {
        return (
            <Pressable style={styles.filloutBtn} onPress={onPress}>
                <View style={styles.innerText}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </Pressable>
        )
    }
    else if (mode == 'Login') {
        return (
            <Pressable style={styles.loginBtn} onPress={onPress}>
                <View>
                    <Text style={styles.textLogin}>{children}</Text>
                </View>
            </Pressable>
        )
    }
    else {
        return (
            <Pressable style={styles.flatBtn} onPress={onPress}>
                <View style={styles.imageBtnContainer}>
                    <Image source={image} style={styles.image} />
                    <Text style={styles.textFlat}>{children}</Text>
                </View>
            </Pressable>
        )
    }


}

export default SocialButton;

const styles = StyleSheet.create({
    filloutBtn: {
        backgroundColor: Colors.primary100,
        padding: 12,
        width: '100%',
        borderRadius: 40,
    },
    loginBtn: {
        marginTop: 12
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "700"
    },
    textLogin: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "700",
        color: 'white'
    },
    imageBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 18,
        height: 18
    },
    flatBtn: {
        padding: 12,
        width: '100%',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 12
    },
    textFlat: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 55,
        fontWeight: "700"
    }
});