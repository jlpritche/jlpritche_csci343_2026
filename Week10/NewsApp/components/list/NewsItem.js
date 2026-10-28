import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewsItem(props) {
    const navigation = useNavigation();

    function selectedStoryHandler() {
        navigation.navigate('NewsDetails', { id: props.id });
    }
    return (
        <View style={[
            styles.itemContainer,
            { backgroundColor: props.listIndex % 2 === 0 ? '#ccc' : '#fff' }
        ]}>
            <Pressable onPress={selectedStoryHandler}>
                <View style={styles.imageContainer}> 
                    <Image style={styles.image} source={{ uri: props.imageURL }}  />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.headline}>{props.headline}</Text>
                    <Text style={styles.date}>{props.datePublished}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
    },

    imageContainer: {
        height: 300
    },

    image: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 7
    },

    infoContainer: {
        flex: 1,
        alignItems: 'center'
    },

    headline: {
        fontSize: 35,
        fontFamily: 'Brunson',
        paddingBottom: 5
    },

    date: {
        fontSize: 25,
        fontFamily: 'CreatoItalic',
        paddingBottom: 5
    },
})
