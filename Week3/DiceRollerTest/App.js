import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, Modal, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  // Set max and min values for the dice
  const minVal = 1;
  const maxVal = 6;
  // Create state management variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [userGuess, setUserGuess] = useState('');
  const [userWager, setUserWager] = useState('');
  const [diceSum, setDiceSum] = useState(2);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startDiceRollHandler() { setModalIsVisible(true); setUserGuess(''); setUserWager(''); }
  function endDiceRollHandler() { setModalIsVisible(false); }
  function onDiceRoll() {
    const randNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const randNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(randNum1);
    setDice2(randNum2);
    let result = randNum1 + randNum2;
    setDiceSum(result);
    endDiceRollHandler();
  }

  let resultText = 'Roll the dice and place your wager';
  const userGuessNum = parseInt(userGuess);
  if (userGuess !== '' && userGuessNum === diceSum) {
    resultText = `Congratulations! You won $${(userWager * 5).toFixed(2)}.`;
  }
  if (userGuess !== '' && userGuessNum !== diceSum) {
    resultText = `Sorry, you lost $${(userWager * 1).toFixed(2)}.`;
  }
  return (
   <>
    <StatusBar style="auto" />
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Dice Roller</Text>
      </View>
      <View style={styles.rollButtonContainer}>
        <Pressable
        style={({pressed}) => {return pressed && styles.pressedButton;}}
        android_ripple={{color: '#210644'}} 
        onPress={startDiceRollHandler}>
          <View style={styles.rollButton}>
            <Text style={styles.rollButtonText}>Roll Dice</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.diceContainer}>
        <View style={styles.dice}>
          <Text style={styles.diceNumber}>{dice1}</Text>
        </View>
        <View style={styles.dice}>
          <Text style={styles.diceNumber}>{dice2}</Text>
        </View>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>The resulting dice roll is {diceSum}</Text>
      </View>
      <View style={styles.wagerContainer}>
        <Text style={styles.wagerText}>{resultText}</Text>
      </View>

      <Modal visible={modalIsVisible}>
        <View style={styles.modalRoot}>
          <Text style={styles.inputLabel}>Guess the Roll Value: </Text>
          <TextInput style={styles.textInput}
          placeholder="Enter a guess between 2 and 12"
          onChangeText={setUserGuess}
          value={userGuess}
          keyboardType="number-pad"
          />
          <Text style={styles.inputLabel}>What's Your Wager: </Text>
          <TextInput style={styles.textInput}
          placeholder="Enter your wager here"
          onChangeText={setUserWager}
          value={userWager}
          keyboardType="number-pad"
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Roll Dice" color='green' onPress={onDiceRoll}/>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" color='black' onPress={endDiceRollHandler}/>
            </View>
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
    backgroundColor: '#c75fcf',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '90%',
    margin: 20,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'white',
    marginTop: 50,
  },
  
  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },

  rollButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  rollButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },

  rollButtonText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    padding: 8,
  },

  pressedButton: {
    opacity: 0.5,
  },

  diceContainer: {
    flex: 3,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  dice: {
    borderWidth: 6,
    margin: 20,
    width: '40%',
    paddingVertical: 30,
    backgroundColor: 'white',
  },

  diceNumber: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  resultsContainer: {
    flex: 1,
  },

  resultsText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },

  wagerContainer: {
    flex: 1,
  },

  wagerText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },

  modalRoot: {
    flex: 1,
    backgroundColor: '#c49dc7',
    alignItems: 'center',
  },

  inputLabel: {
    fontSize: 25,
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#c75fcf',
    backgroundColor: '#c75fcf',
    color: 'black',
    borderRadius: 6,
    width: '90%',
    padding: 12,
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
