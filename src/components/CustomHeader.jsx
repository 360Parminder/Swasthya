import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CustomHeader = ({headerTitle}) => {
  return (
    <SafeAreaView>
   <LinearGradient
   colors={['#F1F1F1', '#F1F1F1']} // Adjust these colors to achieve the mirror effect
      start={{x:1, y:1}}
      end={{x:1, y:1}}
   style={styles.header}
   >
    
 <Text style={styles.headerTitle}>{headerTitle}</Text>
   </LinearGradient>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTitle: {
        color:'#000',
      fontSize: 20,
      fontWeight: '600',
    },
  });

export default CustomHeader