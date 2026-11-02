import { useLayoutEffect, useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NEWS } from "../data/dummy-data";
import { BookmarksContext } from '../store/context/bookmarks-context';
import Colors from '../constants/Colors';
import BookmarkButton from '../components/BookmarkButton';

export default function NewsDetailsScreen(props) {
  const bookmarkedNewsCtx = useContext(BookmarksContext);

  const id = props.route.params.id;
  const selectedNews = NEWS.find(newsItem => newsItem.id === id);

  const newsIsBookmarked = bookmarkedNewsCtx.ids.includes(id); 

  function changeBookmarkStatusHandler() {
    if (newsIsBookmarked) {
      bookmarkedNewsCtx.removeBookmark(id);
    } else {
      bookmarkedNewsCtx.addBookmark(id);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: '',
      headerRight: () => {
        return (
          <BookmarkButton isBookmarked={newsIsBookmarked} onPress={changeBookmarkStatusHandler} />
        );
      }
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageURL }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <Text style={styles.datePublished}>{selectedNews.datePublished}</Text>
        <Text style={styles.author}>{selectedNews.author}</Text>
        <Text style={styles.agency}>{selectedNews.agency}</Text>
        <Text style={styles.description}>{selectedNews.description}</Text>
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
    backgroundColor: Colors.primary_o95,
    borderRadius: 7
  },

  headline: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Brunson',
    paddingBottom: 5
  },

  datePublished: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'CreatoItalic',
    paddingBottom: 5
  },

  author: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontFamily: 'CreatoBold',
    paddingBottom: 5
  },

  agency: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Creato',
    marginBottom: 30
  },

  description: {
    color: 'white',
    width: '90%',
    fontSize: 15,
    textAlign: 'justify',
    fontFamily: 'Creato',
  }
});
