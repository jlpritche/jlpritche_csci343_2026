import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavButton from '../components/NavButton';
import Title from '../components/Title';
import RecipeItem from '../components/RecipeItem';
import ViewRecipeModal from '../modals/ViewRecipeModal';

export default function RecipeScreen(props) {
  const insets = useSafeAreaInsets();
  const [modalRecipeTitle, setModalRecipeTitle] = useState('');
  const [modalRecipeText, setModalRecipeText] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function recipeModalHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  function closeRecipeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={[styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
        },
    ]}>
      <View style={styles.titleContainer}>
        <Title>Recipes</Title>
      </View>
      <View>
        <FlatList
        data={props.currentRecipes}
        keyExtractor={(item, index) => {return item.id}}
        alwaysBounceVertical={false}
        renderItem={(itemData) => {return (
          <RecipeItem
          id={itemData.item.id}
          title={itemData.item.title}
          onView={recipeModalHandler.bind(this, itemData.item.title, itemData.item.text)}
          onDelete={props.onDelete.bind(this, itemData.item.id)} />
        )}} />
      </View>

      <ViewRecipeModal
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeModalHandler} />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
        <View style={styles.button}>
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '90%'
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    marginHorizontal: 10
  }
});
