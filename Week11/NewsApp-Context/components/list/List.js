import { StyleSheet, View, FlatList } from "react-native";
import NewsItem from "./NewsItem";
import Colors from "../../constants/Colors";

export default function List(props) {
    function renderNewsItem(itemData) {
        const NewsItemProps = {
            id: itemData.item.id,
            imageURL: itemData.item.imageURL,
            headline: itemData.item.headline,
            datePublished: itemData.item.datePublished,
            author: itemData.item.author,
            agency: itemData.item.agency,
            description: itemData.item.description,
            listIndex: itemData.index
        };
        return <NewsItem {...NewsItemProps} />;
    }

    return (
        <View style={styles.listContainer}>
        <FlatList
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={renderNewsItem}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primary_o95
    },
});