import { StyleSheet, View, FlatList } from "react-native";
import GameItem from "./gameItem";

export default function List(props) {
    function renderGameItem(itemData) {
        const GameItemProps = {
            id: itemData.item.id,
            imageURL: itemData.item.imageURL,
            title: itemData.item.title,
            releaseDate: itemData.item.releaseDate,
            genre: itemData.item.genre,
            platform: itemData.item.platform,
            completionStatus: itemData.item.completionStatus,
            liked: itemData.item.liked,
            description: itemData.item.description,
            listIndex: itemData.index
        };
        return <GameItem {...GameItemProps} />;
    }

    return (
        <View style={styles.listContainer}>
        <FlatList
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={renderGameItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
});
