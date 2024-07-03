import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MedicineCard from '../../components/MedicineCard'

const Medication = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Text style={styles.logTitle}>Log</Text>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>
      <MedicineCard/>

      </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        },
        logTitle:{
          fontSize:24,
          fontWeight:'bold',
          color:'#000',
          marginHorizontal:20,
          marginTop:20,
        }
})

export default Medication