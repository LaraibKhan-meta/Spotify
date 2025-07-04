import { StyleSheet, View } from "react-native";
import responsive from "../until/responsive";

function MainContainer({children}) {
    return <View style={styles.mainConatiner}>{children}</View>
}

export default MainContainer;

const styles = StyleSheet.create({

    mainConatiner:{
        width:responsive.width(428),
        height:responsive.height(926)
    }
});