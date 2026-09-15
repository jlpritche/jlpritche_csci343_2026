import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Movie from './components/Movie';

export default function App() {
  const [movie, setMovie] = useState([
    {
      name: "Interstellar",
      image: require("./assets/images/interstellar.jpeg"),
      rating: "9.9",
      id: 1,
    },
    {
      name: "Forrest Gump",
      image: require("./assets/images/forrest-gump.jpg"),
      rating: "9.2",
      id: 2,
    },
    {
      name: "Guardians of the Galaxy",
      image: require("./assets/images/gotg.jpg"),
      rating: "8.8",
      id: 3,
    },
    {
      name: "The Prestige",
      image: require("./assets/images/prestige.jpg"),
      rating: "9.4",
      id: 4,
    },
    {
      name: "Harry Potter and\nthe Prisoner of Azkaban",
      image: require("./assets/images/hp3.jpg"),
      rating: "9.7",
      id: 5,
    },
    {
      name: "Iron Man",
      image: require("./assets/images/iron-man.jpeg"),
      rating: "9",
      id: 6,
    },
    {
      name: "Good Will Hunting",
      image: require("./assets/images/gwh.jpeg"),
      rating: "9.6",
      id: 7,
    },
    {
      name: "Logan",
      image: require("./assets/images/logan.jpeg"),
      rating: "8.7",
      id: 8,
    },
    {
      name: "Spider-Man:\nInto the Spider-Verse",
      image: require("./assets/images/itsv.jpg"),
      rating: "9.5",
      id: 9,
    },
    {
      name: "The Dark Knight",
      image: require("./assets/images/tdk.jpg"),
      rating: "9.4",
      id: 10,
    },
  ]);

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList 
            data={movie}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return <Movie 
                name={itemData.item.name}
                image={itemData.item.image}
                rating={itemData.item.rating}/>
            }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#454843',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
    width: '80%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'black',
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  listContainer: {
    flex: 10,
    width: '90%',
  }
});
