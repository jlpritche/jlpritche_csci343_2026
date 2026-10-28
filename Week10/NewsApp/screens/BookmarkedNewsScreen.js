import { StyleSheet, Text, View } from 'react-native';

export default function BookmarkedNewsScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Bookmarked News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
