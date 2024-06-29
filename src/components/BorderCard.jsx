import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BorderCard = ({logo,value,valueUnit}) => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
            // rowGap: 10,
            // shadowOpacity:0.1,
            // elevation:1,
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
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#5D4FB3',
        borderRadius: 10,
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