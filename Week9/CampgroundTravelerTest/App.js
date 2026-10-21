import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Colors from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import CampgroundsOverviewScreen from './screens/CampgroundsOverviewScreen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {const [fontsLoaded] = Font.useFonts({
    Camp : require('./assets/fonts/Mountain.ttf')
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
          title: 'Campground Locations'
        }} />
        <Stack.Screen
        name='CampgroundsOverview'
        component={CampgroundsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  screenOptions: {
    headerStyle: { backgroundColor: Colors.primary500 },
    headerTintColor: Colors.primary300,
    headerTitleStyle: { fontFamily: 'Camp', fontSize: 40 },
    contentStyle: { backgroundColor: Colors.primary800 }
  },
});