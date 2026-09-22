import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import MainScreen from './screens/MainScreen'
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/Colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'roffelia': require('./assets/fonts/Roffelia.otf'),
    'bebas-neue': require('./assets/fonts/BebasNeue.otf')
  })

  const [currentScreen, setCurrentScreen] = useState('main')

  function mainScreenHandler() {
    setCurrentScreen('main');
  }
  
  function menuScreenHandler() {
    setCurrentScreen('menu');
  }

  let screen = <MainScreen onNext={menuScreenHandler} />;
  
  if (currentScreen == 'menu') {
    screen = <MenuScreen onNext={mainScreenHandler} />;
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
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
