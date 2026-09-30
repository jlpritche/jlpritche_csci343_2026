import { StyleSheet, View, Text, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';

export default function NoteModal(props) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={[styles.rootContainer,
          {
              paddingTop: insets.top,
              paddingRight: insets.right,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
          },
      ]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <NavButton onNext={props.onClose}>Return To Thoughts</NavButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.accent800,
    alignItems: 'center'
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'paperNoteSketch',
    color: Colors.primary300
  },

  textContainer: {
    flex: 5,
    width: '90%',
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10
  },

  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: 'paperNote'
  },

  buttonContainer: {
    flex: 1,
    marginTop: 10
  }
});
