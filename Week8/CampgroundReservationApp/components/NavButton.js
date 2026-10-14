import { StyleSheet, View, Text, Pressable, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";

export default function NavButton(props) {
    const { width, height } = useWindowDimensions();
    return (
        <Pressable
        onPress={props.onPress}
        style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.5
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 600,
        maxWidth: '70%',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 300,
        backgroundColor: Colors.secondary,
    },

    textContainer: {},

    text: {
        textAlign: 'center',
        fontFamily: 'Biotrip',
        color: 'black',
        padding: 8
    }
})