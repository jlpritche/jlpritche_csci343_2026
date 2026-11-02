import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import BookmarksContextProvider from './store/context/bookmarks-context';
import NewsDetailsScreen from './screens/NewsDetailsScreen';
import BookmarkedNewsScreen from './screens/BookmarkedNewsScreen';
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import SportsNewsScreen from './screens/SportsNewsScreen';
import Colors from './constants/Colors';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName='News'
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'Brunson',
        fontSize: 40,
        color: 'white'
      },
      sceneContainerStyle: { backgroundColor: Colors.primary },
      drawerContentStyle: { backgroundColor: Colors.primary },
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: 'white',
      drawerActiveBackgroundColor: Colors.accent
    }} >
      <Drawer.Screen
      name='News'
      component={TabsNavigator}
      options={{
        title: 'Latest News',
        drawerLabel: 'Latest News',
        drawerIcon: ({ color, size }) => (
          <Entypo name="list" color={color} size={size} />
        )
      }} />
      <Drawer.Screen
      name='BookmarkedListings'
      component={BookmarkedNewsScreen}
      options={{
        title: 'Saved Stories',
        drawerLabel: 'Saved Stories',
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
      tabBarActiveBackgroundColor: Colors.accent,
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: Colors.primary,
      tabBarInactiveTintColor: 'white',
      tabBarLabelStyle: {
        fontSize: 14,
        fontFamily: 'CreatoBold'
      },
      tabBarStyle: {
        backgroundColor: Colors.primary
      }
    }}>
      <Tabs.Screen
      name='USNews'
      component={USNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="flag-usa" color={color} size={size} />
        ),
        tabBarLabel: 'US News'
      }} />
      <Tabs.Screen
      name='WorldNews'
      component={WorldNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Entypo name="globe" color={color} size={size} />
        ),
        tabBarLabel: 'World News'
      }} />
      <Tabs.Screen
      name='SportsNews'
      component={SportsNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="sports-football" color={color} size={size} />
        ),
        tabBarLabel: 'Sports News'
      }} />
    </Tabs.Navigator>
  )
}

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Brunson : require('./assets/fonts/Brunson.ttf'),
    Creato : require('./assets/fonts/CreatoDisplay-Regular.otf'),
    CreatoBold : require('./assets/fonts/CreatoDisplay-Bold.otf'),
    CreatoItalic : require('./assets/fonts/CreatoDisplay-RegularItalic.otf'),
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
    <BookmarksContextProvider> 
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='DrawerScreen'
        screenOptions={{
          headerTintColor: Colors.primary,
          headerStyle: { backgroundColor: Colors.primary },
          contentStyle: { backgroundColor: 'black' }
        }} >
          <Stack.Screen
          name='DrawerScreen'
          component={DrawerNavigator}
          options={{
            headerShown: false
          }} />
          <Stack.Screen
          name='NewsDetails'
          component={NewsDetailsScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: Colors.primary }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookmarksContextProvider>
    </>
  );
}


