import { useState } from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title'
import MenuItem from '../components/MenuItem';

export default function MenuScreen(props) {
const insets = useSafeAreaInsets();

const [menu, setMenu] = useState([
    {
        name: 'Cheese Ravioli',
        image: require('../assets/images/ravioli.jpg'),
        price: '$15.50',
        id: 1
    },
    {
        name: 'Chicken Parmiginia',
        image: require('../assets/images/chicken-parm.jpg'),
        price: '$18.25',
        id: 2
    },
    {
        name: 'Spaghetti with Meat Sauce',
        image: require('../assets/images/spaghetti.jpg'),
        price: '$16.95',
        id: 3
    },
    {
        name: 'Manicotti',
        image: require('../assets/images/manicotti.jpg'),
        price: '$16.75',
        id: 4
    },
    {
        name: 'Lasagna',
        image: require('../assets/images/lasagna.jpg'),
        price: '$17.50',
        id: 5
    }
])
  
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
            <Title>Menu</Title>
        </View>
        <View style={styles.listContainer}>
            <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false}>
            {menu.map((itemData) => (
              <MenuItem
              key={itemData.id}
              name={itemData.name}
              image={itemData.image}
              price={itemData.price}/>
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Home' onPress={props.onNext} color='#30691d' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  listContainer: {
    flex: 7,
    width: 380,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 40,
    width: 150,
  },
});