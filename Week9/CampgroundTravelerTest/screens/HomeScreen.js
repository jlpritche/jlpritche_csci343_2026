import { StyleSheet, View, Text, FlatList } from "react-native";
import { STATES } from "../data/dummy-data";
import StateGridTile from "../components/StateGridTile";

export default function HomeScreen(props) {
    function renderStateItem(itemData) {
        function pressHandler() {
            props.navigation.navigate('CampgroundsOverview', {
                stateId: itemData.item.id
            });
        }

        return (
            <StateGridTile
            name={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler} />
        );
    }

    return (
        <View>
            <FlatList
            data={STATES}
            keyExtractor={(item) => {return item.id}}
            renderItem={renderStateItem}
            numColumns={2} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
