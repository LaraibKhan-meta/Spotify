import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";
import responsive from "../../until/responsive";

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
                    <View style={styles.textCon}>
                        <Text style={styles.textFlat}>{children}</Text>
                    </View>
                </View>
            </Pressable>
        )
    }


}

export default SocialButton;

const styles = StyleSheet.create({
    filloutBtn: {
        backgroundColor: Colors.primary100,
        width: responsive.width(337),
        height:responsive.height(49),
        borderRadius: responsive.borderRadius(45),
        justifyContent:'center',
        alignItems:'center'
    },
    loginBtn: {
        marginTop: 12
    },
    text: {
        textAlign: 'center',
        fontSize: responsive.fontSize(16),
        fontWeight: "700"
    },
    textLogin: {
        textAlign: 'center',
        fontSize: responsive.fontSize(16),
        fontWeight: "700",
        color: 'white'
    },
    imageBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCont:{
        width:'100%',
        marginLeft:8
    },
    image: {
        width: responsive.width(18),
        height: responsive.height(18)
    },
    flatBtn: {
        width: responsive.width(337),
        height:responsive.height(49),
        borderRadius: responsive.borderRadius(40),
        justifyContent:'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 12,
        paddingHorizontal:16
    },
    textFlat: {
        color: '#ffffff',
        fontSize: responsive.fontSize(16),
        textAlign: 'center',
        fontWeight: "700",
        justifyContent:'center',
        alignItems:'center'
    },
    innerText:{
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center',
        verticalAlign:'middle',
        justifyContent:'center'
    },
    textCon:{
        width:'100%',
        flexDirection:'row',
        textAlign:'center',
        justifyContent:'center'
    }
});