import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title'
import Colors from '../constants/colors';

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
            <Title>House of Blues</Title>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/venue.jpg')} />
        </View>
        <View style={styles.infoContainer}>
            <Text
            style={styles.infoText} onPress={() => Linking.openURL('tel:8432723000')}>
                Phone: 843-272-3000</Text>
            <Text
            style={styles.infoText} onPress={() => Linking.openURL('https://maps.app.goo.gl/6gsAwE8qAZ5TurDj6')}>
                Address: 4640 Highway 17 S{'\n'}North Myrtle Beach, SC 29582</Text>
            <Text
            style={styles.infoText} onPress={() => Linking.openURL('https://myrtlebeach.houseofblues.com/')}>
                Website: www.houseofblues.com</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title='View Events' onPress={props.onNext} color='#2f042fff' />
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
    resizeMode: 'cover',
    height: '100%',
    width: 380,
  },

  infoContainer: {
    flex: 3,
    justifyContent: 'center',
  },

  infoText: {
    fontSize: 28,
    textAlign: 'center',
    padding: 7,
    fontFamily: 'squealer',
    color: Colors.primary500,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 40,
    width: 150,
  },
});