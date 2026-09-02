import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} 
          source={require("./assets/images/business_card_image.jpg")}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Jacob Pritchett</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('mailto:jlpritche@coastal.edu')}>
            Email: jlpritche@coastal.edu</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('tel:8436165035')}>
            Phone: 843-616-5035</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/jlpritche')}>
            Find me on GitHub!</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(62, 61, 61)',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderColor: 'black',
    borderWidth: 5,
  },
  textContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },

  name: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontStyle: 'italic',
    color: 'white',
  },
});
