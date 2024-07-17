import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';

const SmallHomeCard = ({ cardTitle, cardLogo, logoBg, value, valueUnit, mainContent }) => {
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
                {mainContent ? mainContent : null}
            </View>
            <View style={styles.footer}>
                <Text style={styles.cardValue}>{value ? value : null}</Text>
                <Text style={styles.valueUnit}>{valueUnit}</Text>
            </View>
        </View>
    );
}

const commonStyles = {
    card: {
        width: 180,
        height: 90,
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
        gap: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
    },
    cardLogoContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    cardLogo: {
        padding: 5,
        fontSize: 16,
    },
    mainContentContainer: {
        width: 'auto',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginLeft: 6,
    },
    cardValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    valueUnit: {
        paddingTop: 5,
        fontWeight: '500',
        fontSize: 16,
    },
};

const lightStyles = StyleSheet.create({
    ...commonStyles,
    card: {
        ...commonStyles.card,
        backgroundColor: '#fff',
    },
    cardTitle: {
        ...commonStyles.cardTitle,
        color: '#000000',
    },
    cardValue: {
        ...commonStyles.cardValue,
        color: '#000000',
    },
    valueUnit: {
        ...commonStyles.valueUnit,
        color: '#858585',
    },
});

const darkStyles = StyleSheet.create({
    ...commonStyles,
    card: {
        ...commonStyles.card,
        backgroundColor: '#333',
    },
    cardTitle: {
        ...commonStyles.cardTitle,
        color: '#ffffff',
    },
    cardValue: {
        ...commonStyles.cardValue,
        color: '#ffffff',
    },
    valueUnit: {
        ...commonStyles.valueUnit,
        color: '#cccccc',
    },
});

export default SmallHomeCard;
