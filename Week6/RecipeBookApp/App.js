import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import AddRecipeScreen from './screens/AddRecipeScreen'
import Colors from './constants/Colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'milesdane': require('./assets/fonts/Milesdane.otf'),
    'monimer': require('./assets/fonts/MonimerSerif.otf'),
    'vogue-regular': require('./assets/fonts/Vogue-Regular.otf'),
  })

  const [currentScreen, setCurrentScreen] = useState('');
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: 'Breakfast Casserole',
      text: '1 lb ground breakfast sausage\n1/2 cup Bisquik\n4 large eggs\n2 cups milk\n1 1/2 cups shredded cheese\nCook sausage until no longer pink\nPour into 9x13 dish\nMix ingredients\nPour mixture over sausage\nBake for 30 min at 350'
    },
    {
      id: 2,
      title: 'Meatloaf',
      text: '2 lbs ground beef\n1 pack Lipton onion soup\n2 eggs\n1/3 cup breadcrumbs\nMix all but ground beef\nIncorporate mixture into ground beef\nBake for 1 hour at 350\nTop with ketchup'
    },
    {
      id: 3,
      title: 'Monkey Bread',
      text: '3 cans homestyle biscuits\n3/4 cup white sugar\n2 tsp cinnamon\n1 cup melted butter\n1/2 cup brown sugar\nCut each biscuit into fourths\nCombine white sugar and cinnamon\nToss biscuit pieces in sugar mixture\nMelt butter and brown sugar and stir together\nAdd biscuit pieces to bundt pan\nPour melted butter mixture over biscuits\nBake for 40 min at 350'
    }
  ])

  function homeScreenHandler() {
    setCurrentScreen('');
  }
  
  function recipesScreenHandler() {
    setCurrentScreen('recipes');
  }

  function addRecipeScreenHandler() {
    setCurrentScreen('add');
  }

  function addRecipeItemHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => [
      ...currentRecipes,
      {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText},
    ]);
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeItemHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id)
    });
  }

  let screen = <HomeScreen onNext={recipesScreenHandler} />;
  
  if (currentScreen === 'recipes') {
    screen = <RecipesScreen
    onHome={homeScreenHandler} 
    onAdd={addRecipeScreenHandler}
    onDelete={deleteRecipeItemHandler}
    currentRecipes={currentRecipes} />;
  }

  if (currentScreen === 'add') {
    screen = <AddRecipeScreen
    onCancel={recipesScreenHandler}
    onAdd={addRecipeItemHandler} />;
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
    backgroundColor: Colors.tertiary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
