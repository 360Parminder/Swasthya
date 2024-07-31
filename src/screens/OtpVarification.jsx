import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Modal } from 'react-native';
import Path from '../services/Path';



const VerifyOtpModal = ({ verifyOtpModal, setVerifyOtpModal,validOtp,navigation,phoneNumber }) => {
  const [otp, setOtp] = useState('');
  const verifyOtp = () => {
    if (otp == validOtp) {
      navigation.navigate('UserRegester', { mobile: phoneNumber })
    }
    else{
      Alert.alert('Invalid OTP')
    }
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={verifyOtpModal}
    >
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        <View style={{
          backgroundColor: '#E6E2EE',
          width:300,
          justifyContent:'center',
          alignItems:'center',
          paddingVertical:30,
          borderRadius:12
        }}>

          <Text style={{
            fontSize:26,
            fontWeight:'600',
            width:180,
            textAlign:'center',
            marginBottom:20,
            color:'#5D4FB3'
          }}>
            Verify your Phone Number
          </Text>

          <TextInput
            style={[styles.input]}
            placeholder="Enter OTP "
            placeholderTextColor="#000000"
            onChangeText={text => setOtp(text)}
          // value={otp}

          />

          <TouchableOpacity onPress={() => { verifyOtp(), setVerifyOtpModal(false) }} style={[styles.button, { display: 'flex' }]} >
            <Text style={[styles.buttonText]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

    </Modal>
  )
}


const OtpValidation = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [validOtp, setValidOtp] = useState("")
  const [verifyOtpModal, setVerifyOtpModal] = useState(false)

  const sendOtp = async () => {
    if (phoneNumber.length != 10) {
      Alert.alert('Invalid Phone Number')
    }
    else {
      //work after backend
      const response = await Path.post("/sendOtp", {
        mobile: `+91${phoneNumber}`,
      })
      if (response.data.data.otp) {
        setValidOtp(response.data.data.otp)
        
        console.log(response.data.data.otp);
        Alert.alert("Otp send to you Mobile Number")
        setTimeout(() => {
          setVerifyOtpModal(true)
        }, 3000);
      }
    }

  }

 


  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/password.png')}
        resizeMode="contain"
      />
      <Text style={styles.title}>Enter Your Mobile Number</Text>
      <Text style={{
         marginBottom: 20,
         color:'#343a40',
         fontSize:16
      }}>We will send you a Confirmation Code</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your Mobile"
        placeholderTextColor="#000000"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={() => { sendOtp() }}>
        <Text style={styles.buttonText}>Send Otp</Text>
      </TouchableOpacity>
      <VerifyOtpModal verifyOtpModal={verifyOtpModal} setVerifyOtpModal={setVerifyOtpModal} validOtp={validOtp} navigation={navigation} phoneNumber={phoneNumber} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E2EE',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#212529',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#000000'
    // placeholderTextColor: "#000000",
  },
  button: {
    backgroundColor: '#5D4FB3',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default OtpValidation;