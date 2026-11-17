import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import { FontAwesome6, Ionicons, Octicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BacklogScreen from './screens/BacklogScreen';
import GameDetailsScreen from './screens/GameDetailsScreen';
import GlobalStyles from './constants/styles';
import { G } from 'react-native-svg';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Create navigators
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// Bottom Tabs Navigator function
function TabsNavigator() {
  return (
    <Tabs.Navigator
    initialRouteName='Vault'
    screenOptions={{
      tabBarLabelVisibilityMode: true,
      tabBarActiveBackgroundColor: GlobalStyles.tertiary2,
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: GlobalStyles.primary,
      tabBarInactiveTintColor: 'white',
      tabBarLabelStyle: {
        fontSize: 18,
        fontFamily: 'Aldo'
      },
      tabBarStyle: {
        backgroundColor: GlobalStyles.primary
      }
    }} >
      <Tabs.Screen 
      name="Backlog" 
      component={BacklogScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Octicons name="log" color={color} size={size} />
        ),
        tabBarLabel: 'Backlog' 
      }} />
      <Tabs.Screen 
      name="Vault" 
      component={HomeScreen}
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="vault" color={color} size={size} />
        ),
        tabBarLabel: 'Vault' 
        }} />
      <Tabs.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle" color={color} size={size} />
        ),
        tabBarLabel: 'Profile' 
      }} />
    </Tabs.Navigator>
  );
}

export default function App() {
  // Load custom fonts
  const [fontsLoaded] = Font.useFonts({
    Aldo : require('./assets/fonts/AldotheApache.ttf'),
    Pixel : require('./assets/fonts/Pixel-Digivolve.otf')
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // Render main screen with stack navigation
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen 
        name="Home" 
        component={TabsNavigator}
        options={{ headerShown: false }} />
        <Stack.Screen 
        name="GameDetails" 
        component={GameDetailsScreen}
        options={{
          headerShown: true,
          title: '',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: GlobalStyles.primary }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
