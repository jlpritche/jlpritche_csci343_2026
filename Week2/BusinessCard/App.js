import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} 
          source={require("./assets/images/business_image.jpg")}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Player's Choice</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('https://www.playerschoicenmb.com/')}>
            Website: www.playerschoicenmb.com/</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('tel:8432720268')}>
            Phone: 843-272-0268</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('https://maps.app.goo.gl/9fwtEk2hpjFFr1mv6')}>
            Open in Google Maps</Text>
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
