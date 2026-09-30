import { StyleSheet, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavButton from '../components/NavButton';
import Title from '../components/Title';
import Colors from '../constants/Colors';

export default function HomeScreen(props) {
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
        <Title>My Recipes</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/recipe-book.jpg')} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onNext={props.onNext}>See Your Recipes</NavButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '90%'
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.secondary
  },

  image: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    resizeMode: 'stretch'
  },

  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
