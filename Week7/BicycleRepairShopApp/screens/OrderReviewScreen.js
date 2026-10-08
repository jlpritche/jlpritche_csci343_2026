import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/Colors';

export default function OrderReviewScreen(props) {
    const insets = useSafeAreaInsets();
    return (
        <LinearGradient
        colors={[Colors.secondary, Colors.secondary, Colors.secondary, Colors.primary]}
        style={styles.container}>
            <View style={styles.rootContainer}
            paddingTop={insets.top}
            paddingBottom={insets.bottom}
            paddingLeft={insets.left}
            paddingRight={insets.right}>
                <View style={styles.titleContainer}>
                    <Title>Repair Summary</Title>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Your repair request has been placed and your request details are below:</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.details}>Repair Time: </Text>
                        <Text style={styles.subDetails}>{props.repairTime}</Text>
                    </View>
                    <Text style={styles.details}>Services: </Text>
                    {props.services
                        .filter((item) => item.value)
                        .map((item) => (
                            <Text key={item.id} style={styles.subDetails}>{item.name}</Text>
                        )
                    )};
                    <Text style={styles.details}>Add ons: </Text>
                    <Text style={styles.subDetails}>{props.newsletter ? "Newsletter" : ""}</Text>
                    <Text style={styles.subDetails}>{props.rentalMembership ? "Rental Membership" : ""}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.prices}>Subtotal: ${props.price.toFixed(2)}</Text>
                        <Text style={styles.prices}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
                        <Text style={styles.prices}>Total: ${(props.price * 1.06).toFixed(2)}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <NavButton onNext={props.onNext}>Return Home</NavButton>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

    subTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
    },

    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    timeContainer: {},

    details: {
        fontSize: 30,
        fontFamily: 'Mistical-Spring',
    },

    subDetails: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 3,
        marginBottom: 5
    },

    priceContainer: {
        margin: 10,
        borderTopWidth: 5
    },

    prices: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 3
    },

    buttonContainer: {
        alignItems: 'center',
    }
})