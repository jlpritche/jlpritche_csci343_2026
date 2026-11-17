import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GAMES } from '../data/dummy-data';
import List from '../components/list';
import ManageGameModal from '../modals/manageGameModal';
import GlobalStyles from '../constants/styles';

export default function HomeScreen() {
  const insets = useSafeAreaInsets(); // Get safe area insets for padding, stack navigation won't work correctly without it

  const topGames = [GAMES[3], GAMES[0], GAMES[8]]; // Top 3 games to display on home screen

  // Manage Game Modal States and Functions
  const [modalIsVisible, setModalIsVisible] = useState(false);

    function viewAddHandler() {
        setModalIsVisible(true);
    }
    function closeAddHandler() {
        setModalIsVisible(false);
    }

  return (
  // Home screen with open vault background image (<ImageBackground> is deprecated, using <View> with absolute Image)
    <View style={{ flex: 1 }}>
      <Image
      source={require('../assets/images/open-vault-background.jpg')}
      style={styles.backgroundImage} />
      <View style={[{ flex: 1 }, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right}]} >
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.titleContainer}> 
            <Text style={styles.title}>GameVault</Text>
          </View>

          <View style={styles.topContainer}>
            <Text style={styles.topText}>Top 3 Games</Text> 
            <View style={styles.topImagesContainer}>
              <List items={topGames} />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>My Collection</Text>
            <Text style={styles.bottomSubText}>Total Games Owned: {GAMES.length}</Text>
            <List items={GAMES} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Add Game" style={styles.addGameButton} onPress={viewAddHandler} />
          </View>

          <ManageGameModal isVisible={modalIsVisible} onClose={closeAddHandler} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.2,
  },

  titleContainer: {
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 48,
    fontFamily: 'Aldo',
    color: GlobalStyles.primary,
    textShadowColor: GlobalStyles.tertiary1,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    paddingLeft: 10,
  },

  topContainer: {
    marginTop: 40,
  },

  topText: {
    fontSize: 30,
    fontFamily: 'Pixel',
    color: GlobalStyles.primary,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 10,
    padding: 3,
    backgroundColor: GlobalStyles.tertiary1,
    marginBottom: 10,
  },

  topImagesContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  
  topImage: {
    flex: 1,
    height: 180,
    resizeMode: 'contain',
  },

  bottomContainer: {
    marginTop: 40,
  },

  bottomText: {
    fontSize: 25,
    fontFamily: 'Pixel',
    color: GlobalStyles.primary,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 10,
    padding: 3,
    backgroundColor: GlobalStyles.tertiary1,
    marginBottom: 10,
  },

  bottomSubText: {
    fontSize: 18,
    fontFamily: 'Pixel',
    color: GlobalStyles.primary,
    textAlign: 'left',
  },

  allGamesContainer: {},

  buttonContainer: {
    marginTop: 40,
  },

  addGameButton: {}
});
