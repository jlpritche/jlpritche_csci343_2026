import { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavButton from '../components/NavButton';
import Title from '../components/Title';
import Colors from '../constants/Colors';

export default function AddRecipeScreen(props) {
  const insets = useSafeAreaInsets();

  const [recipeTitle, setRecipeTitle] = useState('')
  const [recipeText, setRecipeText] = useState('')

  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
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
        <Title>Add Recipe</Title>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput 
            onChangeText={setRecipeTitle}
            placeholder='Enter Recipe Title Here'
            style={styles.recipeTitle} />
          </View>
          <View style={styles.recipeTextContainer}>
            <TextInput 
            onChangeText={setRecipeText}
            placeholder='Enter Recipe Text Here'
            textAlignVertical='top'
            multiline={true}
            numberOfLines={20}
            style={styles.recipeText} />
          </View>
          <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <NavButton onNext={addRecipeHandler}>Submit</NavButton>
              </View>
              <View style={styles.button}>
                <NavButton onNext={props.onCancel}>Cancel</NavButton>
              </View>
            </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 50
  },

  scrollContainer: {
    flex: 5
  },

  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.secondary
  },

  recipeTitle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 30
  },

  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.secondary,
    alignItems: 'flex-start'
  },

  recipeText: {
    color: Colors.tertiary2
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
