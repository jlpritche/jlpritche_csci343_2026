import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors'; 

export default function OrderReviewScreen(props) {
    const insets = useSafeAreaInsets();

    return (
        <ImageBackground
        source={require('../assets/images/sub-back.jpg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        <View style={styles.container}
        paddingTop={insets.top}
        paddingBottom={insets.bottom}
        paddingLeft={insets.left}
        paddingRight={insets.right}>
            <View style={styles.titleContainer}>
                <Title>Order Summary</Title>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>Your order has been placed with your order details below:</Text>
                </View>
                <View style={styles.ingredientsContainer}>
                    {/* Ingredients will be displayed here */}
                    <Text style={styles.ingredients}>Sandwich Size: </Text>
                    <Text style={styles.subIngredients}>{props.size}</Text>
                    <Text style={styles.ingredients}>Bread Type: </Text>
                    <Text style={styles.subIngredients}>{props.bread}</Text>
                    <Text style={styles.ingredients}>Cheese Type: </Text>
                    <Text style={styles.subIngredients}>{props.cheese}</Text>
                    <Text style={styles.ingredients}>Meats: </Text>
                    {props.meats.map((item) => {
                        if (item.value) {
                            return (
                            <Text key={item.id} style={styles.subIngredients}>{item.name}</Text>
                            );
                        }
                    })};
                    <Text style={styles.ingredients}>Sauces: </Text>
                    {props.sauces.map((item) => {
                        if (item.value) {
                            return (
                            <Text key={item.id} style={styles.subIngredients}>{item.name}</Text>
                            );
                        }
                    })};
                    <Text style={styles.ingredients}>Vegetables: </Text>
                    {props.vegetables.map((item) => {
                        if (item.value) {
                            return (
                            <Text key={item.id} style={styles.subIngredients}>{item.name}</Text>
                            );
                        }
                    })};
                </View>
                <Text style={styles.ingredients}>Add ons: </Text>
                <Text style={styles.subIngredients}>{props.toasted ? "Toasted" : ""}</Text>
                <Text style={styles.subIngredients}>{props.doubleMeat ? "Double Meat" : ""}</Text>
                <Text style={styles.subIngredients}>{props.doubleCheese ? "Double Cheese" : ""}</Text>
                <Text style={styles.subIngredients}>{props.mealCombo ? "Combo Meal" : ""}</Text>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Total: ${(props.price * 1.06).toFixed(2)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <NavButton onNext={props.onNext}>Return Home</NavButton>
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImage: {
        opacity: 0.3,
    },

    titleContainer: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        paddingHorizontal: 30,
    },

    scrollContainer: {
        flex: 1,
    },

    subTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    subTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary500,
    },

    ingredientsContainer: {
        flex: 3,
    },

    ingredients: {
        fontSize: 20,
        fontFamily: 'Note',
        color: Colors.primary500,
    },

    subIngredients: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary300,
    },

    buttonContainer: {
        alignItems: 'center',
    }
});