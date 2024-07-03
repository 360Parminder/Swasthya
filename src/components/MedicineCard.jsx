import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const MedicineCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text style={styles.medicinetime}>9:30 PM</Text>
        {/* <Text style={styles.addButton}></Text> */}
        <Pressable>
        <Icon style={{
          fontWeight:'700',
          fontSize: 26,
        }} name={'add'} color={'#000'} size={26} />
        </Pressable>
      </View>
      <View style={styles.medicineWrapper}>
        <Image style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          shadowColor:'#000',
          shadowOpacity:0.5,
          shadowRadius:2,
          elevation:5,
        }} source={require('../assets/images/capsule.jpg')} resizeMode='contain' />
        <Text style={styles.medicineName}>Paracetamol</Text>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
    margin:10,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:2,
    elevation:5,
  },

  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical:5,
    paddingHorizontal:12
  },
  medicinetime: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    },
  medicineWrapper:{
    flexDirection:'row',
    // flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    marginTop:10

  },
  medicineName:{
    fontSize:20,
    fontWeight:'700',
    color:'#000',
    marginTop:10,
    paddingHorizontal:12

  }
})
export default MedicineCard