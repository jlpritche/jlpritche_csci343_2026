import { View, Text, Image, StyleSheet } from "react-native";
import Title from './Title'
import Colors from "../constants/Colors";

export default function MenuItem(props){
    return (
        <View style={styles.dishContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image} />
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
    },

    nameContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: Colors.primary,
    },

    name: {
        fontSize: 35,
        fontFamily: 'bebas-neue',
        textAlign: 'center',
    },

    imageContainer: {
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: 'black',
    },

    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },

    priceContainer: {
        borderWidth: 3,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: Colors.primary
    },

    price: {
        fontSize: 30,
        textAlign: 'center',
        fontStyle: 'italic',
    },
})
