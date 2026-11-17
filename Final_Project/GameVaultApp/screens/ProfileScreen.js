import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, ScrollView, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GAMES } from '../data/dummy-data';
import List from '../components/list';
import GlobalStyles from '../constants/styles';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets(); // Get the safe area insets for native padding, react navigation won't handle it automatically

  const recentlyAddedGames = GAMES.slice(-4); // Get the last 4 recently added games

  return (
  // Profile screen with linear gradient background
    <LinearGradient
    colors={[
      GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.accent2
    ]}
    style={{ flex: 1 }}>
      <View style={[{ flex: 1 }, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
      }]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.userContainer}>
            <Image 
            source={require('../assets/images/user-avatar.png')}
            style={styles.userImage} />
            <View style={styles.userTextContainer}> 
              <Text style={styles.userText}>My name is Jacob. I am a passionate gamer and love exploring new games. I spend most of my free time playing video games and my favorite is The Last of Us.</Text>
            </View>
          </View>

          <View style={styles.connectionsContainer}>
            <Text style={styles.connectionsText}>Find me on:</Text>
            <View style={styles.connectionsSubContainer}>
              <Text style={[styles.connectionsSubText, { color: GlobalStyles.accent2 }, { fontFamily: 'Pixel' }]}>PlayStation:</Text>
              <Text style={styles.connectionsSubText}>jacob_gamer</Text>
            </View>
            <View style={styles.connectionsSubContainer}>
              <Text style={[styles.connectionsSubText, { color: GlobalStyles.accent1 }, { fontFamily: 'Pixel' }]}>Xbox:</Text>
              <Text style={styles.connectionsSubText}>jacob_gamer123</Text>
            </View>
            <View style={styles.connectionsSubContainer}>
              <Text style={[styles.connectionsSubText, { color: GlobalStyles.accent3 }, { fontFamily: 'Pixel' }]}>Nintendo:</Text>
              <Text style={styles.connectionsSubText}>Jacob_Gamer</Text>
            </View>
            <View style={styles.connectionsSubContainer}>
              <Text style={[styles.connectionsSubText, { color: GlobalStyles.accent4 }, { fontFamily: 'Pixel' }]}>PC:</Text>
              <Text style={styles.connectionsSubText}>jgames</Text>
            </View>

            <Text style={styles.connectionsText}>I'm also available on:</Text>
            <View style={styles.connectionsSubContainer}>
              <Text style={[styles.contactText, { backgroundColor: '#5865f2' }]} 
              onPress={() => Linking.openURL('https://discord.com/')}>Discord</Text>
              <Text style={styles.connectionsSubText}>@jacobgames</Text>
            </View>
            <View style={styles.connectionsSubContainer}>
              <Text style={[styles.contactText, { backgroundColor: '#480ab2' }]} 
              onPress={() => Linking.openURL('https://www.twitch.tv/')}>Twitch</Text>
              <Text style={styles.connectionsSubText}>@jacobgames</Text>
            </View>
          </View>

          <View style={styles.recentlyAddedContainer}>
            <Text style={styles.recentlyAddedText}>Recently Added Games:</Text>
            <List items={recentlyAddedGames} />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  userTextContainer: {
    flex: 1,
    marginLeft: 7,
  },

  userText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic'
  },

  connectionsContainer: {
    flex: 1,
    marginTop: 40,
  },

  connectionsText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Aldo',
    margin: 15,
  },

  connectionsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  connectionsSubText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'italic',
    padding: 5,
  },

  contactText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Pixel',
    padding: 5,
  },

  recentlyAddedContainer: {
    flex: 1,
    marginTop: 40,
  },

  recentlyAddedText: {
    textAlign: 'left',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Aldo',
    margin: 15,
  }
});
