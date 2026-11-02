import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { LISTINGS } from "../data/dummy_data";
import List from '../components/List/List';
import Colors from '../constants/Colors';

export default function BookmarksScreen() {
  const favoriteListingIds = useSelector(state => state.favoriteListings.ids);

  const favoriteListings = LISTINGS.filter((listingItem) => 
    favoriteListingIds.includes(listingItem.id));

  if (favoriteListings.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no saved listings yet!</Text>
      </View>
    );
  } else {
    return (
      <List items={favoriteListings} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary300
  },
});
