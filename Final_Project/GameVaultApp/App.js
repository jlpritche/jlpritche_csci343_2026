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

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator>
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
  const [fontsLoaded] = Font.useFonts({
    Aldo : require('./assets/fonts/AldotheApache.ttf'),
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
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={TabsNavigator}
        options={{ headerShown: false }} />
        <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
