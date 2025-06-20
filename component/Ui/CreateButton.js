import { View, Text, Pressable, StyleSheet } from "react-native";

function CreateButton({children,onPress }) {
    return (
        <View style={styles.mainContainer}>
            <Pressable style={styles.createBtn} onPress={onPress}>
                <View>
                    <Text style={styles.createText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CreateButton;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    createBtn: {
        backgroundColor: '#ffffff',
        padding: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    createText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 700
    }
});