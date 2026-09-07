import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, TextInput, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const [userQuestion, setUserQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [eightBallResponse, setEightBallResponse] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startEightBallHandler() { setModalIsVisible(true); }
  function endEightBallHandler() { setModalIsVisible(false); setUserQuestion(''); setEightBallResponse(''); }
  function eightBallShake() {
    const randResponse = Math.floor(Math.random() * responses.length);
    setSubmittedQuestion(userQuestion);
    setEightBallResponse(responses[randResponse]);
    startEightBallHandler();
  }

  return (
   <>
    <StatusBar style="auto" />
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Magic Eight Ball</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.inputLabel}>What is your question? </Text>
          <TextInput style={styles.textInput}
          onChangeText={setUserQuestion}
          value={userQuestion}
          keyboardType="default"
          />
      </View>
      <View style={styles.eightBallContainer}>
        <Text style={styles.eightBallText}>Click the Eight Ball to get your fortune!</Text>
        <Pressable
        style={({pressed}) => {return pressed && styles.pressedEightBall;}}
        android_ripple={{color: '#210644'}} 
        onPress={eightBallShake}>
          <Image style={styles.eightBall}
          source={require("./assets/images/Magic8Ball.jpeg")} />
        </Pressable>
      </View>

      <Modal visible={modalIsVisible} animationType="slide">
        <View style={styles.modalRoot}>
          <Text style={styles.questionText}>You asked: {submittedQuestion}</Text>
          <Text style={styles.responseText}>Magic Eight Ball Says:{'\n'}{eightBallResponse}</Text>
          <View style={styles.button}>
              <Button title="Ask Another Question" color='black' onPress={endEightBallHandler}/>
          </View>
        </View>
      </Modal>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '90%',
    marginTop: 50,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#6c6edb',
  },
  
  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },

  questionContainer: {
    flex: 2,
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'center',
  },

  inputLabel: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },

  textInput: {
    backgroundColor: '#6c6edb',
    color: 'black',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'black',
    width: '100%',
  },

  eightBallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },

  eightBallText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },

  eightBall: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 100,
  },

  pressedEightBall: {
    opacity: 0.5,
  },

  modalRoot: {
    flex: 1,
    backgroundColor: '#6c6edb',
    alignItems: 'center',
  },

  questionText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white',
    margin: 50,
  },

  responseText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'dark blue',
    margin: 50,
  },

  button: {
    margin: 50,
    width: '35%',
  },
});
