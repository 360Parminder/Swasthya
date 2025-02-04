import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../Styles/GlobalColor';

const SmallHomeCard = ({ icon, logoBg,footerText,targetvalue,valueUnit,value }) => {
    return (
        <View style={[styles.card,{borderColor:logoBg}]}>
            <View style={styles.header}>
                <View style={[styles.cardLogoContainer, { backgroundColor: logoBg }]}>
                    <Icon name={icon} size={30} color='#fff' />
                </View>
                <View style={styles.mainContentContainer}>
                <View style={{flexDirection:'row',alignItems:'flex-end',gap:6}}>
                  <Text style={{fontSize:24,fontWeight:'600',color:GlobalColor.textColor}}>{value}</Text>
                  <Text style={{fontSize:18,color:GlobalColor.textColor}}>{targetvalue?targetvalue:valueUnit}</Text>
                  </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{footerText ? footerText : null}</Text>
            </View>
        </View>
    );
}

const styles = {
    card: {
        width: 190,
        height: 80,
        borderRadius: 10,
        shadowOpacity: 0.1,
        elevation: 3,
        shadowRadius: 10,
        justifyContent:'space-between',
        padding:8,
        borderWidth:1
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
      
    },
    cardLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding:2
    },
    mainContentContainer: {
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginLeft: 6,
    },
    footerText: {
        fontSize: 14,
        color:GlobalColor.textColor,
        textTransform:'capitalize'
    },
};



export default SmallHomeCard;
