import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BorderCard = ({logo,value,valueUnit}) => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
        }}>
            <View style={styles.container}>
                <Text style={styles.logoText}>
                    {logo?logo:'⛓️‍💥'}
                </Text>
                <Text style={styles.valueText}>
                    {value?value:'?'} {valueUnit?valueUnit:'?'}
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#bae6fd',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0284c7',
        borderTopStartRadius: 5,
        borderTopEndRadius: 35,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 30,
        paddingHorizontal: 26,
        paddingVertical: 12,
        gap: 3,

    },
    logoText: {
        fontSize: 24,
    },
    valueText: {
        color:'#000',
        fontSize: 18,
        fontWeight: '500'
    }
})
export default BorderCard