import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import NotesScreen from './screens/NotesScreen';
import AddNoteScreen from './screens/AddNoteScreen'
import Colors from './constants/Colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'noteFont': require('./assets/fonts/Note.ttf'),
    'paperNote': require('./assets/fonts/Papernotes.ttf'),
    'paperNotesSketch': require('./assets/fonts/Papernotes Sketch.ttf'),
    'paperNotesBold': require('./assets/fonts/Papernotes Bold.ttf'),
  })

  const [currentScreen, setCurrentScreen] = useState('');
  const [currentID, setCurrentID] = useState(4);
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: 'Math Notes',
      text: 'a^2 + b^2 = c^2\n2 + 2 = 4'
    },
    {
      id: 2,
      title: 'Birthdays',
      text: 'Dakota: 08/17/1994\nJohn: 09/20/1996\nAna: 10/30/2003'
    },
    {
      id: 3,
      title: 'To Do List',
      text: '1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner'
    }
  ])

  function homeScreenHandler() {
    setCurrentScreen('');
  }
  
  function notesScreenHandler() {
    setCurrentScreen('notes');
  }

  function addNoteScreenHandler() {
    setCurrentScreen('add');
  }

  function addNotesItemHandler(enteredNoteTitle, enteredNoteText) {
    setCurrentNotes((currentNotes) => [
      ...currentNotes,
      {id: currentID, title: enteredNoteTitle, text: enteredNoteText},
    ]);
    setCurrentID(currentID + 1);
    notesScreenHandler();
  }

  function deleteNotesItemHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => item.id !== id)
    });
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />;
  
  if (currentScreen === 'notes') {
    screen = <NotesScreen
    onHome={homeScreenHandler} 
    onAdd={addNoteScreenHandler}
    onDelete={deleteNotesItemHandler}
    currentNotes={currentNotes} />;
  }

  if (currentScreen === 'add') {
    screen = <AddNoteScreen
    onCancel={notesScreenHandler}
    onAdd={addNotesItemHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
