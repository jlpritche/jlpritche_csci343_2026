import { Text, StyleSheet, useWindowDimensions } from 'react-native'
import Colors from '../constants/Colors';

export default function Title(props) {
    const { width, height } = useWindowDimensions();
    return <Text style={[styles.title, {fontSize: width * 0.12}]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Biotrip-Bold',
        textAlign: 'center',
        color: Colors.secondary,
    }
})