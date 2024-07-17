import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';

const HomeCard = ({ cardTitle, cardLogo, logoBg, value, valueUnit, mainContent }) => {
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.cardTitle}>{cardTitle ? cardTitle : "Card Title"}</Text>
                <View style={[styles.cardLogoContainer, { backgroundColor: logoBg }]}>
                    <Text style={styles.cardLogo}>{cardLogo ? cardLogo : '⛓️‍💥'}</Text>
                </View>
            </View>
            <View style={styles.mainContentContainer}>
                {mainContent}
            </View>
            <View style={styles.footer}>
                <Text style={styles.cardValue}>{value ? value : null}</Text>
                <Text>{valueUnit}</Text>
            </View>
        </View>
    );
}

const lightStyles = StyleSheet.create({
    card: {
        width: 180,
        height: 170,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowOpacity: 0.1,
        elevation: 3,
        shadowRadius: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        marginTop: 10
    },
    cardLogoContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    cardLogo: {
        padding: 5,
        fontSize: 14,
    },
    mainContentContainer: {
        width: 'auto',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    cardValue: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
});

const darkStyles = StyleSheet.create({
    card: {
        width: 180,
        height: 170,
        backgroundColor: '#333',
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowOpacity: 0.1,
        elevation: 3,
        shadowRadius: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        marginTop: 10
    },
    cardLogoContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    cardLogo: {
        padding: 5,
        fontSize: 14,
    },
    mainContentContainer: {
        width: 'auto',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    cardValue: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default HomeCard;
