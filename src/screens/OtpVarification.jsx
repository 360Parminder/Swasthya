import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Modal } from 'react-native';
import Path from '../services/Path';
import GlobalStyles from '../Styles/GlobalStyles';
import UserAuth from '../services/UserAuth';
import GlobalColor from '../Styles/GlobalColor';



const VerifyOtpModal = ({ verifyOtpModal, setVerifyOtpModal,validOtp,navigation,phoneNumber }) => {
  const [otp, setOtp] = useState('');
  const verifyOtp = async () => {
    const response = await UserAuth.verifyOtp(phoneNumber,otp)
    if (response.success) {
      Alert.alert("Otp Verified")
      navigation.navigate('UserRegister',{mobile:phoneNumber})
    }
    else {
      Alert.alert("Error",response.message)
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        <View style={{
          backgroundColor: GlobalColor.primaryColor,
          width: '100%',
          height: '70%',
          alignItems:'center',
          paddingVertical:30,
          borderRadius:12
        }}>

          <Text style={{
            fontSize:26,
            fontWeight:'600',
            // width:180,
            textAlign:'center',
            marginBottom:20,
            color:'#5D4FB3'
          }}>
            Verify your Phone Number
          </Text>

          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter OTP "
            placeholderTextColor={GlobalColor.textColor}
            onChangeText={text => setOtp(text)}
            value={otp}

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
      const response = await UserAuth.sendOtp(phoneNumber)
      if (response.success) {
        setVerifyOtpModal(true)
      }
      else {
        Alert.alert("Error",response.message)
      }
    }
  }

 


  return (
    <View style={GlobalStyles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/password.png')}
        resizeMode="contain"
      />
      <Text style={GlobalStyles.title}>Enter Your Mobile Number</Text>
      <Text style={{
         marginBottom: 20,
         color:GlobalColor.textColor,
         fontSize:16
      }}>We will send you a Confirmation Code</Text>

      <TextInput
        style={GlobalStyles.input}
        placeholder="Enter your Mobile"
        placeholderTextColor={GlobalColor.textColor}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={GlobalStyles.button} onPress={() => { sendOtp() }}>
        <Text style={GlobalStyles.buttonText}>Send Otp</Text>
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