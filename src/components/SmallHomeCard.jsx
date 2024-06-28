import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SmallHomeCard = ({ cardTitle, cardLogo, logoBg, value, valueUnit, mainContent }) => {
    // console.log(logoBg);
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
                <Text style={{
                    paddingTop:5,
                    fontWeight:'500',
                    color:'#858585',
                    fontSize:16
                }}>{valueUnit}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Text: {
        color: '#000'
    },
    card: {
        width: 180,
        height: 90,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowOpacity:0.1,
        elevation:3,
        shadowRadius:10,
        
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
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    cardLogo: {
        padding: 5,
        fontSize: 16,
    },
    mainContentContainer: {
        width: 'auto',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        marginLeft:6
        // alignContent: 'flex-end',
        // justifyContent: 'flex-end',
    },
    cardValue: {
        // marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default SmallHomeCard;
