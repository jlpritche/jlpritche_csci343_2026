import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Colors from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import DestinationsOverviewScreen from './screens/DestinationsOverviewScreen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Melodrame : require('./assets/fonts/Melodrame.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style='auto' />
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={styles.screenOptions} >
        <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Vacation Locations'
        }} />
        <Stack.Screen
        name='DestinationsOverview'
        component={DestinationsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  screenOptions: {
    headerStyle: { backgroundColor: Colors.primary },
    headerTitleStyle: { fontFamily: 'Melodrame', fontSize: 50 },
    contentStyle: { backgroundColor: Colors.primary }
  },
});