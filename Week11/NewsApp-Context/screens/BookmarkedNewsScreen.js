import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BookmarksContext } from '../store/context/bookmarks-context';
import { NEWS } from '../data/dummy-data';
import List from '../components/list/List';
import Colors from '../constants/Colors';

export default function BookmarkedNewsScreen() {
  const bookmarkedNewsCtx = useContext(BookmarksContext);
  const bookmarkedNews = NEWS.filter(story => {
    return bookmarkedNewsCtx.ids.includes(story.id)
  });

  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no saved stories</Text>
      </View>
    );
  } else {
    return (
      <List items={bookmarkedNews} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_o95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontFamily: 'CreatoBold',
    color: 'white'
  },
});
