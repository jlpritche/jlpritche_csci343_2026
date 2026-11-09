import { StyleSheet, View, Text } from 'react-native';

export default function BacklogScreen() {
  return (
    <View style={styles.container}>
      <Text>Backlog Screen</Text>
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
