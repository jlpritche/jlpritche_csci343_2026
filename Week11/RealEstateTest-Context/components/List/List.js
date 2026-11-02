import { StyleSheet, View, FlatList } from "react-native";
import ListingItem from "./ListingItem";

export default function List(props) {
    function renderListingItem(itemData) {
        const ListingItemProps = {
            id: itemData.item.id,
            imageUrl: itemData.item.imageUrl,
            price: itemData.item.price,
            bedrooms: itemData.item.bedrooms,
            bathrooms: itemData.item.bathrooms,
            squareFeet: itemData.item.squareFeet,
            yearBuilt: itemData.item.yearBuilt,
            address: itemData.item.address,
            city: itemData.item.city,
            state: itemData.item.state,
            zipCode: itemData.item.zipCode,
            description: itemData.item.description,
            listIndex: itemData.index
        };
        return <ListingItem {...ListingItemProps} />;
    }

    return (
        <View style={styles.listContainer}>
        <FlatList
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={renderListingItem}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: 'black'
    },
});