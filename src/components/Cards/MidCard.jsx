import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../../Styles/GlobalColor';
import LinearGradient from 'react-native-linear-gradient';

const MidCard = ({ cardTitle, cardLogo, logoBg, logocolor, value, valueUnit, targetvalue }) => {
    return (
        <LinearGradient
                   colors={['#000', `${logocolor}`]} // Gradient colors
                       start={{ x: 0, y: 0 }}          // Start point (top-left corner)
                       end={{ x: 1, y: 1 }}            // End point (bottom-right corner)
                       style={[styles.card, { borderColor: logocolor }]}
                   >
            <View style={styles.header}>
                <Icon name={cardLogo} style={styles.cardLogo} color={logocolor} />
                <Text style={styles.cardTitle}>{cardTitle ? cardTitle : "Card Title"}</Text>
            </View>
            <View style={styles.mainContentContainer}>
                <View style={[styles.cardLogoContainer, { backgroundColor: logoBg }]}>
                </View>
                <Progress.Bar borderRadius={6} animated={true} progress={value / 1000} borderColor='#fff' unfilledColor={logoBg} height={10} width={165} color={logocolor} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.cardValue}>{value ? value : null} {valueUnit}</Text>
                <Text style={{ color: GlobalColor.textColor, fontSize: 18 }}>Target: {targetvalue} {valueUnit}</Text>
            </View>
        </LinearGradient>
    );
}

export default MidCard;
const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        width: 190,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowOpacity: 0.1,
        elevation: 3,
        shadowRadius: 10,
        borderWidth: 1,
    },
    header: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
    },
    cardTitle: {
        width:'auto',
        fontSize: 18,
        fontWeight: '600',
        color: GlobalColor.textColor,
        marginTop: 10,
        textTransform:'capitalize'
    },
    cardLogoContainer: {
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    cardLogo: {
        padding: 5,
        fontSize: 40,
    },
    mainContentContainer: {
        width: 'auto',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    cardValue: {
        fontSize: 22,
        fontWeight: '600',
        color: GlobalColor.textColor,
    },
});