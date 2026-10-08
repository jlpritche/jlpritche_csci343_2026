import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from '../constants/Colors';
import Title from '../components/Title';
import NavButton from '../components/NavButton';

export default function HomeScreen(props) {
    const insets = useSafeAreaInsets();
    return (
        <LinearGradient
        colors={[Colors.primary800, Colors.accent500, Colors.accent500, Colors.primary800]}
        style={styles.container}>
        <View style={styles.container}
        paddingTop={insets.top}
        paddingBottom={insets.bottom}
        paddingLeft={insets.left}
        paddingRight={insets.right}>
            <View style={styles.titleContainer}>
                <Title>Deli Delights</Title>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {/*Sandwich size options*/}
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Sandwich size: </Text>
                    <RadioGroup 
                    radioButtons={props.sizeRadioButtons}
                    onPress={props.onSetSizeId}
                    selectedId={props.sizeId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioGroupLabel} />
                </View>

                {/*Bread options*/}
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Bread Type: </Text>
                    <RadioGroup 
                    radioButtons={props.breadRadioButtons}
                    onPress={props.onSetBreadId}
                    selectedId={props.breadId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioGroupLabel} />
                </View>

                {/*Upper portion of form container*/}
                <View style={styles.rowContainer}>
                    {/* Meat options */}
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Meat Type: </Text>
                        <View style={styles.checkBoxSubContainer}>
                            {props.meats.map ((item) => {
                                return (
                                    <BouncyCheckbox
                                    key={item.id}
                                    text={item.name}
                                    onPress={props.onSetMeats.bind(this, item.id)}
                                    textStyle={{
                                        textDecorationLine: "none",
                                        color: Colors.primary500,
                                    }}
                                    innerIconStyle={{
                                        borderRadius: 0,
                                        borderColor: Colors.primary500,
                                    }}
                                    iconStyle={{ borderRadius: 0 }}
                                    fillColor={Colors.primary500}
                                    style={styles.checkBox}
                                    />
                                );
                            })}
                        </View>
                    </View>

                    {/* Sauce options */}
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Sauce Type: </Text>
                        <View style={styles.checkBoxSubContainer}>
                            {props.sauces.map ((item) => {
                                return (
                                    <BouncyCheckbox
                                    key={item.id}
                                    text={item.name}
                                    onPress={props.onSetSauces.bind(this, item.id)}
                                    textStyle={{
                                        textDecorationLine: "none",
                                        color: Colors.primary500,
                                    }}
                                    innerIconStyle={{
                                        borderRadius: 0,
                                        borderColor: Colors.primary500,
                                    }}
                                    iconStyle={{ borderRadius: 0 }}
                                    fillColor={Colors.primary500}
                                    style={styles.checkBox}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </View>

                {/*Middle portion of form container*/}
                <View style={styles.rowContainer}>
                    {/* Vegetable options */}
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Vegetable Type: </Text>
                        <View style={styles.checkBoxSubContainer}>
                            {props.vegetables.map ((item) => {
                                return (
                                    <BouncyCheckbox
                                    key={item.id}
                                    text={item.name}
                                    onPress={props.onSetVegetables.bind(this, item.id)}
                                    textStyle={{
                                        textDecorationLine: "none",
                                        color: Colors.primary500,
                                    }}
                                    innerIconStyle={{
                                        borderRadius: 0,
                                        borderColor: Colors.primary500,
                                    }}
                                    iconStyle={{ borderRadius: 0 }}
                                    fillColor={Colors.primary500}
                                    style={styles.checkBox}
                                    />
                                );
                            })}
                        </View>
                    </View>

                    {/* Cheese options */}
                    <View style={styles.cheeseContainer}>
                        <Text style={styles.checkBoxHeader}>Cheese Type: </Text>
                        <RadioGroup 
                        radioButtons={props.cheeseRadioButtons}
                        onPress={props.onSetCheeseId}
                        selectedId={props.cheeseId}
                        layout="column"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabel} />
                    </View>
                </View>

                {/*Lower portion of form container*/}
                <View style={styles.rowContainer}>
                    {/* Add on options */}
                    <View style={styles.addOnContainer}>
                        <View style={styles.addOnSubContainer}>
                            <Text style={styles.addOnLabel}>Double Meat: </Text>
                            <Switch
                            onValueChange={props.onSetDoubleMeat}
                            value={props.doubleMeat}
                           thumbColor={props.doubleMeat ? Colors.primary500 : Colors.primary800}
                           trackColor={{false: '#767577', true: '#81b0ff'}} />
                        </View>

                        <View style={styles.addOnSubContainer}>
                            <Text style={styles.addOnLabel}>Double Cheese: </Text>
                            <Switch
                            onValueChange={props.onSetDoubleCheese}
                            value={props.doubleCheese}
                           thumbColor={props.doubleCheese ? Colors.primary500 : Colors.primary800}
                           trackColor={{false: '#767577', true: '#81b0ff'}} />
                        </View>
                    </View>
                    
                    <View style={styles.addOnContainer}>
                        <View style={styles.addOnSubContainer}>
                            <Text style={styles.addOnLabel}>Toasted: </Text>
                            <Switch
                            onValueChange={props.onSetToasted}
                            value={props.toasted}
                           thumbColor={props.toasted ? Colors.primary500 : Colors.primary800}
                           trackColor={{false: '#767577', true: '#81b0ff'}} />
                        </View>

                        <View style={styles.addOnSubContainer}>
                            <Text style={styles.addOnLabel}>Combo Meal: </Text>
                            <Switch
                            onValueChange={props.onSetMealCombo}
                            value={props.mealCombo}
                           thumbColor={props.mealCombo ? Colors.primary500 : Colors.primary800}
                           trackColor={{false: '#767577', true: '#81b0ff'}} />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onNext={props.onNext}>Submit Order</NavButton>
                </View>
            </ScrollView>
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

    radioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    radioHeader: {
        fontSize: 30,
        color: Colors.primary500,
        fontFamily: 'Note',
    },

    radioGroup: {
        paddingBottom: 20,
    },

    radioGroupLabel: {
        fontSize: 15,
        color: Colors.primary500,
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingHorizontal: 24,
    },

    checkBoxContainer: {
        width: '48%',
        paddingHorizontal: 12,
    },

    checkBoxHeader: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: 'Note',
        textAlign: 'center',
    },

    checkBoxSubContainer: {
        width: '100%',
        padding: 2,
    },

    checkBox: {
        width: '100%',
        padding: 2,
    },

    cheeseContainer: {
        width: '50%',
        alignItems: 'center',
    },

    addOnContainer: {
        justifyContent: 'space-between',
    },

    addOnSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    addOnLabel: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: 'Note',
    },

    buttonContainer: {
        alignItems: 'center',
    },
});