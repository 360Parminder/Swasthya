import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Browse = () => {
  return (
    <View>
     <Text>Categories</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: 10,
        
    },  
})
export default Browse