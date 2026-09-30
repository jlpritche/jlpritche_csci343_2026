import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        textAlign: 'center',
        fontFamily: 'noteFont',
        color: Colors.primary300,
        textShadowColor: Colors.accent800,
        textShadowRadius: 25,
    }
})