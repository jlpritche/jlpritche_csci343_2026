import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function NavButton(props) {
    return (
        <Pressable
        android_ripple={{color: Colors.tertiary3}}
        onPress={props.onNext}
        style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.8
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: 150,
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.secondary
    },

    textContainer: {},

    text: {
        padding: 8,
        fontSize: 25,
        fontFamily: 'vogue-regular',
        color: Colors.tertiary2,
        textAlign: 'center'
    }
})
