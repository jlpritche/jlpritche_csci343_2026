import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GAMES } from '../data/dummy-data';
import ManageGameModal from '../modals/manageGameModal';

export default function GameDetailsScreen(props) {
  const insets = useSafeAreaInsets(); // Get the safe area insets for native padding, react navigation won't handle it automatically

  // Get the game ID and find the corresponding game object
  const id = props.route.params.id;
  const selectedGame = GAMES.find(gameItem => gameItem.id === id);

  // Manage Game Modal States and Functions
    const [modalIsVisible, setModalIsVisible] = useState(false);
  
      function viewEditHandler() {
          setModalIsVisible(true);
      }
      function closeEditHandler() {
          setModalIsVisible(false);
      }

  return (
    <View style={[styles.container, {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right
    }]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.gameContainer}>
          <Image style={styles.image} source={{ uri: selectedGame.imageURL }} />
          <Text style={styles.title}>{selectedGame.title}</Text>
          <Text style={styles.releaseDate}>Release Date: {selectedGame.releaseDate}</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.genre}>{selectedGame.genre}</Text>
          <Text style={styles.platform}>{selectedGame.platform}</Text>
          <Text style={styles.completionStatus}>{selectedGame.completionStatus}</Text>
          {selectedGame.completionStatus === 'Completed' ? (
            <Text style={styles.liked}>{selectedGame.liked ? 'Liked' : 'Not Liked'}</Text>
          ) : null}
          <Text style={styles.description}>{selectedGame.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Edit Game" style={styles.editGameButton} onPress={viewEditHandler} />
        </View>

        <ManageGameModal isVisible={modalIsVisible} onClose={closeEditHandler} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  gameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 260,
    resizeMode: 'contain',
    backgroundColor: '#000000',
    borderWidth: 3,
    borderColor: '#ffffff'
  },

  title: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'Aldo',
    textAlign: 'center',
    padding: 10,
  },

  detailsContainer: {
    flex: 1,
    marginTop: 20,
  },

  releaseDate: {
    color: '#ffffff',
    fontSize: 18,
    fontStyle: 'italic',
  },

  genre: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Pixel',
    padding: 10,
  },

  platform: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Pixel',
    padding: 10,
  },

  completionStatus: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Pixel',
    padding: 10,
  },

  liked: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Pixel',
    padding: 10,
  },

  description: {
    color: '#ffffff',
    textAlign:'center',
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 20,
    padding: 10,
  },

  buttonContainer: {},

  editGameButton: {}
});
