import { StyleSheet, View, Text } from 'react-native';

export default function GameDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Details Screen</Text>
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
