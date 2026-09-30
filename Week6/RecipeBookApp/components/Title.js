import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        fontFamily: 'milesdane',
        textAlign: 'center',
        color: Colors.primary,
        textShadowColor: Colors.tertiary3,
        textShadowRadius: 10,
    }
})
