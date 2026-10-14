import { useState } from "react";
import { StyleSheet, ImageBackground, View, Text, Pressable, Platform, Modal, Button, useWindowDimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from '@react-native-community/datetimepicker';
import WheelPicker from "react-native-wheely";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    // Check In States and Functions
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);

    function showCheckInPicker() {
        setShowCheckIn(true);
    }

    function hideCheckInPicker() {
        setShowCheckIn(false);
    }

    function onChangeCheckIn(event, selectedDate) {
        const currentDate = selectedDate;
        if (Platform.OS === 'android') {
            hideCheckInPicker();
        }
        setCheckIn(currentDate);
    }

    // Check Out States and Functions
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);

    function showCheckOutPicker() {
        setShowCheckOut(true);
    }

    function hideCheckOutPicker() {
        setShowCheckOut(false);
    }

    function onChangeCheckOut(event, selectedDate) {
        const currentDate = selectedDate;
        if (Platform.OS === 'android') {
            hideCheckOutPicker();
        }
        setCheckOut(currentDate);
    }

    // Guests States and Functions
    const guestCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);

    function showNumGuestsWheel() {
        setShowNumGuests(true);
    }

    function hideNumGuestsWheel() {
        setShowNumGuests(false);
    }

    function onChangeNumGuests(index) {
        setNumGuests(index);
    }

    // Campsites States and Functions
    const campsite = [1, 2, 3, 4, 5];
    const [numCampsite, setNumCampsite] = useState(0);
    const [showNumCampsite, setShowNumCampsite] = useState(false);

    function showNumCampsiteWheel() {
        setShowNumCampsite(true);
    }

    function hideNumCampsiteWheel() {
        setShowNumCampsite(false);
    }

    function onChangeNumCampsite(index) {
        setNumCampsite(index);
    }

    // Results States and Functions
    const [results, setResults] = useState('')

    function onReserveHandler() {
        let results = `Check In:\n${checkIn.toDateString()}\n` +
        `Check Out:\n${checkOut.toDateString()}\n` +
        `Number of Guests:\t\t${guestCount[numGuests]}\n` +
        `Campsite:\t\t${campsite[numCampsite]}\n`;
        setResults(results);
    }

    // Guarantee functionality independent of screen size/orientation
    const { width, height } = useWindowDimensions();

    const dateLabelFlex = {
        fontSize: width * 0.09
    };
    const dateTextFlex = {
        fontSize: width * 0.05
    };

    return (
        <ImageBackground
        source={require('../assets/images/camp.jpg')}
        resizeMode="cover"
        style={{flex: 1}}
        imageStyle={styles.backgroundImage} >
            <View style={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                },
            ]}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.scrollMainContainer}>
                        <View style={styles.titleContainer}>
                            <Title>Camp Tikihama</Title>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                                <Pressable onPress={showCheckInPicker}>
                                    <Text style={[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                                </Pressable>
                            </View>

                            <View style={styles.dateContainer}>
                                <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                                <Pressable onPress={showCheckOutPicker}>
                                    <Text style={[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            {showCheckIn && Platform.OS === 'android' && (
                                <DateTimePicker
                                testID='dateTimePicker1'
                                value={checkIn}
                                mode={"date"}
                                display="spinner"
                                onValueChange={onChangeCheckIn} />
                            )}
                            {showCheckOut && Platform.OS === 'android' && (
                                <DateTimePicker
                                testID='dateTimePicker2'
                                value={checkOut}
                                mode={"date"}
                                display="spinner"
                                onValueChange={onChangeCheckOut} />
                            )}
                            {showCheckIn && Platform.OS === 'ios' && (
                                <Modal
                                animationType="slide"
                                transparent={true}
                                supportedOrientations={['portrait', 'landscape']}>
                                    <View style={styles.centeredModalView}>
                                        <View style={styles.modalView}>
                                            <DateTimePicker
                                            testID='dateTimePicker3'
                                            value={checkIn}
                                            mode={"date"}
                                            display="spinner"
                                            onValueChange={onChangeCheckIn} />
                                            <Button title="Confirm" onPress={hideCheckInPicker} />
                                        </View>
                                    </View>
                                </Modal>
                            )}
                            {showCheckOut && Platform.OS === 'ios' && (
                                <Modal
                                animationType="slide"
                                transparent={true}
                                supportedOrientations={['portrait', 'landscape']}>
                                    <View style={styles.centeredModalView}>
                                        <View style={styles.modalView}>
                                            <DateTimePicker
                                            testID='dateTimePicker4'
                                            value={checkOut}
                                            mode={"date"}
                                            display="spinner"
                                            onValueChange={onChangeCheckOut} />
                                            <Button title="Confirm" onPress={hideCheckOutPicker} />
                                        </View>
                                    </View>
                                </Modal>
                            )}
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Guests: </Text>
                            <Pressable onPress={showNumGuestsWheel}>
                                <View style={styles.dateTextContainer}>
                                    <Text style={[styles.dateText, dateTextFlex]}>
                                        {guestCount[numGuests]}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showNumGuests}
                            supportedOrientations={['portrait', 'landscape']} >
                                <View style={styles.centeredModalView}>
                                    <View style={styles.modalView}>
                                        <Text style={[styles.dateLabel, dateLabelFlex]}>Enter Number of Guests:</Text>
                                        <WheelPicker
                                        selectedIndex={numGuests}
                                        options={guestCount}
                                        onChange={onChangeNumGuests}
                                        containerStyle={{ width: 200 }} />
                                        <Button title="Confirm" onPress={hideNumGuestsWheel} />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={[styles.dateLabel, dateLabelFlex]}>Campsite: </Text>
                            <Pressable onPress={showNumCampsiteWheel}>
                                <View style={styles.dateTextContainer}>
                                    <Text style={[styles.dateText, dateTextFlex]}>
                                        {campsite[numCampsite]}
                                    </Text>
                                </View>
                            </Pressable>
                            <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showNumCampsite}
                            supportedOrientations={['portrait', 'landscape']} >
                                <View style={styles.centeredModalView}>
                                    <View style={styles.modalView}>
                                        <Text style={[styles.dateLabel, dateLabelFlex]}>Campsite:</Text>
                                        <WheelPicker
                                        selectedIndex={numCampsite}
                                        options={campsite}
                                        onChange={onChangeNumCampsite}
                                        containerStyle={{ width: 200 }} />
                                        <Button title="Confirm" onPress={hideNumCampsiteWheel} />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.buttonContainer}>
                            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
                        </View>
                        <View style={styles.resultsContainer}>
                            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles  = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },

    backgroundImage: {
        opacity: 0.3,
    },

    titleContainer: {
        padding: 7,
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.accent,
        width: 1000,
        maxWidth: '90%'
    },

    scrollContainer: {
        flex: 1,
        width: 1500,
        maxWidth: '100%'
    },

    scrollMainContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
        marginBottom: 20
    },

    dateContainer: {
        backgroundColor: Colors.primary_o5,
        padding: 10,
        marginHorizontal: 10
    },

    dateLabel: {
        color: Colors.secondary,
        fontFamily: 'Biotrip',
    },

    dateTextContainer: {
        backgroundColor: Colors.primary_o5,
        padding: 10,
        paddingHorizontal: 30,
        marginHorizontal: 10
    },

    dateText: {
        color: Colors.accent,
        fontSize: 20,
        fontStyle: 'italic'
    },

    centeredModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },

    modalView: {
        margin: 20,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    buttonContainer: {
        alignItems: 'center'
    },

    resultsContainer: {},

    results: {
        textAlign: 'center',
        color: Colors.accent2,
        fontFamily: 'Cabin-Bold'
    }
})
