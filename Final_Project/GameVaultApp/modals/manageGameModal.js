import { useState } from 'react';
import { StyleSheet, View, Text, Modal, Image, TextInput, Button } from 'react-native';
import GlobalStyles from '../constants/styles';

export default function ManageGameModal(props) {
  // Add/Edit Game States and Functions
  const [gameTitle, setGameTitle] = useState('')
  const [gameReleaseDate, setGameReleaseDate] = useState('')
  const [gameGenre, setGameGenre] = useState('')
  const [gamePlatform, setGamePlatform] = useState('')
  const [gameCompletionStatus, setGameCompletionStatus] = useState('')
  const [gameLiked, setGameLiked] = useState(false)
  const [gameDescription, setGameDescription] = useState('')

  function addGameHandler() {
    props.onAdd(gameTitle, gameReleaseDate, gameGenre, gamePlatform, gameCompletionStatus, gameLiked, gameDescription);
    props.onCancel();
  }
  function editGameHandler() {
    props.onEdit(gameTitle, gameReleaseDate, gameGenre, gamePlatform, gameCompletionStatus, gameLiked, gameDescription);
    props.onCancel();
  }

  return(
    <View style={styles.container}>
        <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false} >
            <View style={styles.modalContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.pageTitle}>Add/Edit Game</Text>
                <Image 
                source={require('../assets/images/placeholder.jpg')}
                style={styles.gameImage} />
              </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Game Title</Text>
                    <TextInput 
                    onChangeText={setGameTitle}
                    style={styles.input}  />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Release Date</Text>
                    <TextInput 
                    onChangeText={setGameReleaseDate}
                    placeholder="MM/DD/YYYY"
                    placeholderTextColor="#ffffff"
                    style={styles.input} />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Genre</Text>
                    <TextInput 
                    onChangeText={setGameGenre}
                    style={styles.input} />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Platform</Text>
                    <TextInput 
                    onChangeText={setGamePlatform}
                    style={styles.input} />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Completion Status</Text>
                    <TextInput 
                    onChangeText={setGameCompletionStatus}
                    style={styles.input} />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Liked</Text>
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput 
                    onChangeText={setGameDescription}
                    style={styles.input} />
                  </View>
                </View> 

                <View style={styles.buttonContainer}>
                    <Button title="Cancel" style={styles.cancelButton} onPress={props.onClose} />
                    <Button title="Submit" style={styles.submitButton} onPress={props.onClose} />
                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.tertiary2,
  },

  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  pageTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'Aldo',
    textAlign: 'center',
    padding: 10,
  },

  gameImage: {
    width: 130,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#000000',
    borderWidth: 3,
    borderColor: '#ffffff'
  },

  inputContainer: {
    flex: 1,
    marginTop: 40,
  },

  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Pixel',
    textAlign: 'left',
    padding: 5,
  },

  input: {
    color: '#ffffff',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ffffff',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  }
});