import { StyleSheet, View, Text, Button } from 'react-native';
import Colors from '../constants/Colors';

export default function NotesItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='View' onPress={props.onView}/>
                </View>
                <View style={styles.button}>
                    <Button title='Delete' onPress={props.onDelete}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500
  },

  titleContainer: {
    justifyContent: 'center'
  },

  title: {
    fontFamily: 'paperNoteBold',
    fontSize: 20,
    color: Colors.primary300,
    padding: 8
  },

  buttonContainer: {
    flexDirection: 'row'
  },

  button: {
    marginHorizontal: 3,
    marginVertical: 5
  }
});
