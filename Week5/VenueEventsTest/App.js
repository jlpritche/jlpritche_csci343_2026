import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import MainScreen from './screens/MainScreen'
import EventsScreen from './screens/EventsScreen';
import Colors from './constants/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'squealer': require('./assets/fonts/Squealer.otf'),
    'squealer-embossed': require('./assets/fonts/SquealerEmbossed.otf')
  })

  const [currentScreen, setCurrentScreen] = useState('main')

  function mainScreenHandler() {
    setCurrentScreen('main');
  }
  
  function eventsScreenHandler() {
    setCurrentScreen('events');
  }

  let screen = <MainScreen onNext={eventsScreenHandler} />;
  
  if (currentScreen == 'events') {
    screen = <EventsScreen onNext={mainScreenHandler} />;
  }

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
