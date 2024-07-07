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
      <View style={{
        backgroundColor:'#fefae0',
        marginTop:20
      }}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          padding:10
        }}>
        <Text style={{
          fontSize:20,
          fontWeight:'bold',
          color:'#000',
          fontFamily: 'GaMaamli-Regular',
        }}>Your Medications</Text>
        <Text style={{
          fontSize:20,
          fontWeight:'bold',
          color:'#000'
        }}>Edit</Text>
        </View>
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