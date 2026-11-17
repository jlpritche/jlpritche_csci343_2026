import { StyleSheet, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GameItem(props) {
    const navigation = useNavigation(); // Get navigation object

    function selectedGameHandler() { // Navigate to the game details screen with the selected game's ID
        navigation.navigate('GameDetails', { id: props.id });
    }
    return (
    // Render a pressable game item with an image
        <View>
            <Pressable onPress={selectedGameHandler}>
                <View style={styles.imageContainer}> 
                    <Image style={styles.image} source={{ uri: props.imageURL }}  />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {},

    image: {
        width: 130,
        height: 200,
        resizeMode: 'contain',
        backgroundColor: '#000000',
        borderWidth: 3,
        borderColor: '#ffffff'
    }
})
