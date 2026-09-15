import { StyleSheet, Text, View, Image } from 'react-native';

export default function Restaurant(props) {
    return (
    <View style={styles.restaurantContainer}>
        <View style={styles.restaurantTitleContainer}>
            <Text style={styles.restaurantTitle}>{props.name}</Text>
        </View>
        <View style={styles.restaurantImageContainer}>
            <Image style={styles.restaurantImage} source={props.image} />
        </View>
        <View style={styles.restaurantRatingContainer}>
            <Text style={styles.restaurantRating}>{props.rating}/10</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    restaurantContainer: {
        marginBottom: 20,
  },

  restaurantTitleContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
  },

  restaurantTitle: {
    fontSize: 30,
    textAlign: 'center',
  },

  restaurantImageContainer: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 5,
  },

  restaurantImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  restaurantRatingContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
  },

  restaurantRating: {
    fontSize: 30,
    textAlign: 'center',
  },
})