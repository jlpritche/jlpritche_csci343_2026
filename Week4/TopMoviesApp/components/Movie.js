import { StyleSheet, Text, View, Image } from 'react-native';

export default function Movie(props) {
    return (
    <View style={styles.movieContainer}>
        <View style={styles.movieTitleContainer}>
            <Text style={styles.movieTitle}>{props.name}</Text>
        </View>
        <View style={styles.moviePosterContainer}>
            <Image style={styles.moviePoster} source={props.image} />
        </View>
        <View style={styles.movieRatingContainer}>
            <Text style={styles.movieRating}>{props.rating}/10</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        marginBottom: 20,
  },

  movieTitleContainer: {
    backgroundColor: '#ffffff26',
    borderWidth: 3,
    borderRadius: 5,
  },

  movieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  moviePosterContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },

  moviePoster: {
    width: '100%',
    height: 300, 
    resizeMode: 'contain',
  },

  movieRatingContainer: {
    backgroundColor: '#ffffff26',
    borderWidth: 3,
    borderRadius: 5,
  },

  movieRating: {
    fontSize: 30,
    textAlign: 'center',
  },
})