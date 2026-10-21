import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

export default function DestinationsOverviewScreen(props) {
    const countryId = props.route.params.countryId;

    useLayoutEffect(() => {
        const country = COUNTRIES.find((country) => country.id === countryId);
        props.navigation.setOptions({ title: country ? country.name : null });
    }, [countryId, props.navigation]);

    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    })

    function renderDestinationItem(itemData) {
        const destinationItemProps = {
            name: itemData.item.name,
            imageURL: itemData.item.imageURL,
            recommendedDays: itemData.item.recommendedDays,
            averageCost: itemData.item.averageCost,
            rating: itemData.item.rating,
            listIndex: itemData.index
        };
        return <DestinationItem {...destinationItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={displayedDestinations}
            keyExtractor={(item) => item.id}
            renderItem={renderDestinationItem} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});
