import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import ListingDetailScreen from './screens/ListingDetailScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import HouseListingsScreen from './screens/HouseListingsScreen';
import CondoListingsScreen from './screens/CondoListingsScreen';
import TownhouseListingsScreen from './screens/TownhouseListingsScreen';
import TrailerListingsScreen from './screens/TrailerListingsScreen';
import FavoritesContextProvider from './store/context/favorites-context';
import Colors from './constants/Colors';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName='Listings'
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'Nolluqa',
        fontSize: 40,
        color: Colors.accent800
      },
      sceneContainerStyle: { backgroundColor: Colors.primary300 },
      drawerContentStyle: { backgroundColor: Colors.primary500 },
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: Colors.accent500,
      drawerActiveBackgroundColor: Colors.primary800
    }} >
      <Drawer.Screen
      name='Listings'
      component={TabsNavigator}
      options={{
        title: 'All Listings',
        drawerLabel: 'Real Estate Listings',
        drawerIcon: ({ color, size }) => (
          <Entypo name="list" color={color} size={size} />
        )
      }} />
      <Drawer.Screen
      name='BookmarkedListings'
      component={BookmarksScreen}
      options={{
        title: 'Saved Listings',
        drawerLabel: 'Saved Listings',
        drawerIcon: ({ color, size }) => (
          <Entypo name="bookmark" color={color} size={size} />
        )
      }} />
    </Drawer.Navigator>
  )
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
    screenOptions={{
      tabBarLabelVisibilityMode: true,
      tabBarActiveBackgroundColor: Colors.primary800,
      tabBarActiveTintColor: Colors.accent500,
      tabBarInactiveBackgroundColor: Colors.primary500,
      tabBarInactiveTintColor: Colors.primary300,
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'PlayfairBold'
      },
      tabBarStyle: {
        backgroundColor: Colors.primary500
      }
    }}>
      <Tabs.Screen
      name='HouseListings'
      component={HouseListingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" color={color} size={size} />
        ),
        tabBarLabel: 'Houses'
      }} />
      <Tabs.Screen
      name='CondoListings'
      component={CondoListingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="apartment" color={color} size={size} />
        ),
        tabBarLabel: 'Condos'
      }} />
      <Tabs.Screen
      name='TownhouseListings'
      component={TownhouseListingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="holiday-village" color={color} size={size} />
        ),
        tabBarLabel: 'Townhouses'
      }} />
      <Tabs.Screen
      name='TrailerListings'
      component={TrailerListingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="truck-trailer" color={color} size={size} />
        ),
        tabBarLabel: 'Mobile Homes'
      }} />
    </Tabs.Navigator>
  )
}

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Nolluqa : require('./assets/fonts/NolluqaRegular.otf'),
    Playfair : require('./assets/fonts/Playfair.ttf'),
    PlayfairBold : require('./assets/fonts/PlayfairBold.ttf'),
    PlayfairBoldItalic : require('./assets/fonts/PlayfairBoldItalic.ttf')
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
    <StatusBar style='light' />
    <FavoritesContextProvider> 
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='DrawerScreen'
        screenOptions={{
          headerTintColor: Colors.primary300,
          headerStyle: { backgroundColor: Colors.primary500 },
          contentStyle: { backgroundColor: 'black' }
        }} >
          <Stack.Screen
          name='DrawerScreen'
          component={DrawerNavigator}
          options={{
            headerShown: false
          }} />
          <Stack.Screen
          name='ListingDetail'
          component={ListingDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
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
