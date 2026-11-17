import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GAMES } from '../data/dummy-data';
import ProgressCircle from '../components/progress-circle';
import List from '../components/list';
import GlobalStyles from '../constants/styles';

export default function BacklogScreen() {
  const insets = useSafeAreaInsets(); // Get the safe area insets for native padding, react navigation won't handle it automatically

  // Random Game States and Function
  const [randomGame, setRandomGame] = useState(null);
  const gamesBacklog = GAMES.filter(game => game.completionStatus !== 'Completed'); 
  function pickRandomGame() {
    if (gamesBacklog.length === 0) {
      setRandomGame(null);
      return;
    }
    const randomGame = gamesBacklog[Math.floor(Math.random() * gamesBacklog.length)];
    setRandomGame(randomGame);
  }

  return (
  // Backlog screen with linear gradient background
    <LinearGradient
    colors={[
      GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.primary, GlobalStyles.accent1
    ]}
    style={{ flex: 1 }}>
      <View style={[{ flex: 1 }, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
      }]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <View style={styles.circleContainer}>
              <ProgressCircle
              completed={GAMES.filter(game => game.completionStatus == 'Completed').length}
              inProgress={GAMES.filter(game => game.completionStatus == 'In Progress').length}
              total={GAMES.length} />
              <View style={styles.centerText}>
                <Text style={styles.totalText}>{GAMES.length}</Text>
                <Text style={styles.labelText}>TOTAL GAMES</Text>
              </View>
            </View>
            <Text style={styles.legendText}>Completed Games: {GAMES.filter(game => game.completionStatus == 'Completed').length}{'\n'}
            Games In Progress: {GAMES.filter(game => game.completionStatus == 'In Progress').length}{'\n'}
            Games Not Started: {GAMES.filter(game => game.completionStatus == 'Not Started').length}</Text>
          </View>

          <View style={styles.toPlayContainer}>
            <Text style={styles.toPlayText}>Games To Play:</Text>
            <List items={gamesBacklog} />
          </View>

          <View style={styles.randomContainer}>
            <Button title="Pick Me a Game To Play" style={styles.randomButton} onPress={pickRandomGame} />
            {randomGame === null ? (
              <Image source={require('../assets/images/placeholder.jpg')} style={styles.randomImage} />
            ) : (
              <Image source={{ uri: randomGame.imageURL }} style={styles.randomImage} />
            )}
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  totalText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  labelText: {
    fontSize: 12,
    color: 'white',
  },

  legendText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: 'Pixel'
  },

  toPlayContainer: {
    flex: 1,
    marginTop: 40
  },

  toPlayText: {
    textAlign: 'left',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Aldo',
    margin: 15,
  },

  randomContainer: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  randomButton: {},

  randomImage: {
    width: 130,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#000000',
    borderWidth: 3,
    borderColor: '#ffffff'
  },

  randomText: {}
});
