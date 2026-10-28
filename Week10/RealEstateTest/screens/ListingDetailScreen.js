import { useState, useLayoutEffect, use } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LISTINGS } from "../data/dummy_data";
import Colors from '../constants/Colors';
import BookmarkButton from '../components/BookmarkButton';

export default function ListingDetailScreen(props) {
  const listingId = props.route.params.listingId;
  const selectedListing = LISTINGS.find(listing => listing.id === listingId);
  
  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: '',
      headerRight: () => {
        return (
          <BookmarkButton pressed={pressed} onPress={headerButtonPressHandler} />
        );
      }
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedListing.imageUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>${selectedListing.price.toLocaleString()}</Text>
        <Text style={styles.space}>
          {selectedListing.bedrooms} Bed | {selectedListing.bathrooms} Bath | {selectedListing.squareFeet} Sq Ft
        </Text>
        <Text style={styles.address}>
          {selectedListing.address}, {selectedListing.city} {selectedListing.state} {selectedListing.zipCode}
        </Text>
        <Text style={styles.year}>Built: {selectedListing.yearBuilt}</Text>
        <Text style={styles.description}>{selectedListing.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  imageContainer: {
    marginVertical: 10,
    height: 300
  },

  image: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 7
  },

  infoContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary500o8,
    borderRadius: 7
  },

  price: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: 'PlayfairBold',
    paddingBottom: 5
  },

  space: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: 'Playfair',
    paddingBottom: 5
  },

  address: {
    color: Colors.primary300,
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontFamily: 'Playfair',
    paddingBottom: 5
  },

  year: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: 'Playfair',
    marginBottom: 30
  },

  description: {
    color: Colors.primary300,
    width: '90%',
    fontSize: 15,
    textAlign: 'justify',
    fontFamily: 'Playfair',
  }
});
