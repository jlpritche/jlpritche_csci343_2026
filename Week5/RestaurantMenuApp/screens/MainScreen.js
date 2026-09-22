import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title'
import Colors from '../constants/Colors';

export default function MainScreen(props) {
const insets = useSafeAreaInsets();  
  
return (
    <View style={[styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
        },
    ]}>
        <View style={styles.titleContainer}>
            <Title>Valentino</Title>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/restaurant.jpeg')} />
        </View>
        <View style={styles.detailsContainer}>
            <Text
            style={styles.detailsText} onPress={() => Linking.openURL('tel:8438394949')}>
                Phone: 843-839-4949</Text>
            <Text
            style={styles.detailsText} onPress={() => Linking.openURL('https://maps.app.goo.gl/2Wynz8xnTUQfAKRW6')}>
                Address: 323 US-17 Bus{'\n'}Surfside Beach, SC 29575</Text>
            <Text
            style={styles.detailsText} onPress={() => Linking.openURL('https://valentinoitalian.com/')}>
                Website: www.valentinoitalian.com</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title='View Menu' onPress={props.onNext} color='#30691d' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 4,
  },

  image: {
    resizeMode: 'contain',
    height: '100%',
    width: 380,
  },

  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
  },

  detailsText: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    fontStyle: 'italic',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 40,
    width: 150,
  },
});
