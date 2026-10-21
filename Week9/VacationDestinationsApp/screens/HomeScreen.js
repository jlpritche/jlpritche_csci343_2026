import { StyleSheet, View, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

export default function HomeScreen(props) {
    function renderCountryItem(itemData) {
        function pressHandler() {
            props.navigation.navigate('DestinationsOverview', {
                countryId: itemData.item.id
            });
        }

        return (
            <CountryGridTile
            name={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler} />
        );
    }

    return (
        <View>
            <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => {return item.id}}
            renderItem={renderCountryItem}
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
