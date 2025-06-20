import { StyleSheet, View, Text, Button } from "react-native";
import HeaderSignup from "../component/HeaderSignup";
import InputField from "../component/InputField";
import NextButton from "../component/Ui/NextButton";
import { images } from "../constant/Images";
import { useState } from "react";
import { Colors } from "../constant/colors";
import RadioButton from "../component/Ui/RadioButton";
import CreateButton from "../component/Ui/CreateButton";
import ThemeColor from "../component/ThemeColor";
function SignupScreen({navigation}) {

    const [selected, setSelected] = useState(null);
    const [countForm, setCountForm] = useState(0);

    function backActionHandler() {
        if (countForm > 0) {
            const prevForm = countForm - 1;
            setCountForm(prevForm);
        }
    }
    function nextActionHandler() {
        const nextForm = countForm + 1;
        setCountForm(nextForm);
    }
    function createAccountHandler()
    {
        navigation.navigate('Artist');
    }
    const handlePress = (option) => {
        setSelected(option);

    };
    return (
        <>
        <ThemeColor>
            <View style={styles.mainConatiner}>
                <HeaderSignup image={images.backIcon} onPress={backActionHandler}>Create account</HeaderSignup>
                {countForm === 0 && (<View>
                    <InputField subTitle="You’ll need to confirm this email later.">What's your email?</InputField>
                    <NextButton onPress={nextActionHandler} style={styles.nextBtn}>Next</NextButton>
                </View>)}

                {countForm === 1 && (<View>
                    <InputField subTitle="Use atleast 8 characters.">Create a password</InputField>
                    <NextButton onPress={nextActionHandler} style={styles.nextBtn}>Next</NextButton>
                </View>)}

                {countForm === 2 && (<View>
                    <InputField>What's your gender?</InputField>
                    <NextButton onPress={nextActionHandler} style={styles.nextBtn}>Next</NextButton>
                </View>)}

                {countForm === 3 && (<View style={styles.mainThirdContainer}>
                    <InputField subTitle="This appears on your spotify profile">What's your name?</InputField>
                    <View style={styles.namePanel}>
                        <View style={styles.divider} />
                        <Text style={styles.subInfo}>By tapping on “Create account”, you agree to the spotify Terms of Use.</Text>
                        <Text style={styles.linkingText}>Terms of Use</Text>
                        <Text style={styles.subInfo}>To learn more about how Spotify collect, uses, shares and protects your personal data, Please see the Spotify Privacy Policy.</Text>
                        <Text style={styles.linkingText}>Privacy Policy</Text>
                    </View>
                    <RadioButton style={[selected === 'option1' && styles.select]} onPress={() => handlePress('option1')}>Please send me news and offers from Spotify.</RadioButton>
                    <RadioButton style={[selected === 'option2' && styles.select]} onPress={() => handlePress('option2')}>Share my registration data with Spotify’s content providers for marketing purposes.</RadioButton>
                    <View style={styles.createBtnContainer}>
                        <CreateButton onPress={createAccountHandler}>Create an account</CreateButton>
                    </View>

                </View>

                )}
            </View>
        </ThemeColor>
        </>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    namePanel: {
        paddingHorizontal: 22,
    },
    nextBtn: {
        marginTop: 45
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.secondary100,
        marginTop: 35
    },
    subInfo: {
        fontSize: 10,
        color: '#ffffff',
        marginTop: 25
    },
    linkingText: {
        marginTop: 25,
        color: Colors.primary100,
        fontSize: 10,
        fontWeight: 600
    },
    bottom: {
        marginBottom: 20
    },
    select: {
        backgroundColor: Colors.secondary200
    },
    createBtnContainer: {
        flex: 1,
        paddingBottom: 100
    },
    mainThirdContainer: {
        flex: 1
    },
    mainConatiner: {
        flex: 1
    }
});