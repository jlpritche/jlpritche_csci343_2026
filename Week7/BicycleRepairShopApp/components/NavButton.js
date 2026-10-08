import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function NavButton(props) {
    return (
        <Pressable
        android_ripple={{color: Colors.secondary}}
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
        opacity: 0.3,
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 75,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 300,
        backgroundColor: Colors.tertiary,
    },

    textContainer: {},

    text: {
        fontSize: 25,
        color: Colors.secondary,
        textAlign: 'center'
    }
})