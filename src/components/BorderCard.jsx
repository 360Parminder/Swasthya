import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GlobalColor from '../Styles/GlobalColor'
import GlobalStyles from '../Styles/GlobalStyles'

const BorderCard = ({logo,value,valueUnit}) => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
        }}>
            <View style={styles.container}>
                <Text style={GlobalStyles.text}>
                    {logo?logo:'⛓️‍💥'}
                </Text>
                <Text style={GlobalStyles.text}>
                    {value?value:'?'} {valueUnit?valueUnit:'?'}
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:GlobalColor.fadedColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: GlobalColor.borderColor,
        borderTopStartRadius: 5,
        borderTopEndRadius: 35,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 30,
        paddingHorizontal: 26,
        paddingVertical: 12,
        gap: 3,

    },
})
export default BorderCard