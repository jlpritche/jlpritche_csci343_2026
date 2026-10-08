import { StyleSheet, View, Text, ScrollView, Switch, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RadioGroup } from 'react-native-radio-buttons-group';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from '../constants/Colors';
import Title from '../components/Title';
import NavButton from '../components/NavButton';

export default function HomeScreen(props) {
    const insets = useSafeAreaInsets();

    return (
        <ImageBackground
        source={require('../assets/images/bicycle-shop-background.jpg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}>
            <View style={styles.container}
            paddingTop={insets.top}
            paddingBottom={insets.bottom}
            paddingLeft={insets.left}
            paddingRight={insets.right}>
                <View style={styles.titleContainer}>
                    <Title>Bicycle Repair Shop</Title>
                </View>
                <ScrollView style={styles.scrollContainer}>
                {/*Repair Times*/}
                    <View style={styles.radioContainer}>
                        <Text style={styles.radioHeader}>Repair Time: </Text>
                        <RadioGroup 
                        radioButtons={props.repairTimeRadioButtons}
                        onPress={props.onSetRepairTimeId}
                        selectedId={props.repairTimeId}
                        layout="row"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabel} />
                    </View>
                    {/* Services Offered */}
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Services: </Text>
                        <View style={styles.checkBoxSubContainer}>
                            {props.services.map ((item) => {
                                return (
                                    <BouncyCheckbox
                                    key={item.id}
                                    text={item.name}
                                    onPress={props.onSetServices.bind(this, item.id)}
                                    textStyle={{
                                        textDecorationLine: "none",
                                        color: Colors.tertiary,
                                        fontSize: 20,
                                    }}
                                    innerIconStyle={{
                                        borderRadius: 0,
                                        borderColor: Colors.tertiary,
                                    }}
                                    iconStyle={{ borderRadius: 0 }}
                                    fillColor={Colors.primary}
                                    style={styles.checkBox}
                                    />
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        {/* Add-on options */}
                        <View style={styles.addOnContainer}>
                            <Text style={styles.addOnHeader}>Add Ons: </Text>
                            <View style={styles.addOnSubContainer}>
                                <Text style={styles.addOnLabel}>Newsletter: </Text>
                                <Switch
                                onValueChange={props.onSetNewsletter}
                                value={props.newsletter}
                                thumbColor={props.newsletter ? Colors.primary : Colors.secondary}
                                trackColor={{false: '#767577', true: '#81b0ff'}} />
                            </View>

                            <View style={styles.addOnSubContainer}>
                                <Text style={styles.addOnLabel}>Rental Membership: </Text>
                                <Switch
                                onValueChange={props.onSetRentalMembership}
                                value={props.rentalMembership}
                                thumbColor={props.rentalMembership ? Colors.primary : Colors.secondary}
                                trackColor={{false: '#767577', true: '#81b0ff'}} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <NavButton onNext={props.onNext}>Submit Request</NavButton>
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
        opacity: 0.15,
    },

    titleContainer: {
        marginBottom: 30,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary,
        paddingHorizontal: 20,
    },

    scrollContainer: {
        flex: 1,
    },

    radioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    radioHeader: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'Mistical-Spring',
    },

    radioGroup: {
        paddingBottom: 30,
    },

    radioGroupLabel: {
        fontSize: 20,
    },

    checkBoxContainer: {
        paddingBottom: 30
    },

    checkBoxHeader: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'Mistical-Spring',
        textAlign: 'center',
    },

    checkBoxSubContainer: {},

    checkBox: {
        padding: 5,
    },

    rowContainer: {
        flexDirection: 'row',
        paddingBottom: 40,
        alignItems: 'center'
    },

    addOnContainer: {},

    addOnHeader: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'Mistical-Spring',
    },

    addOnSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    addOnLabel: {
        fontSize: 20,
    },

    buttonContainer: {
        alignItems: 'center',
    },
});