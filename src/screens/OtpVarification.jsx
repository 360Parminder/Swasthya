import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Path from '../services/Path';

const OtpValidation=({navigation})=>{
    const [phoneNumber,setPhoneNumber]=useState('')
    const [otp,setOtp]=useState('');
    const [validOtp,setValidOtp]=useState("")
    const [status,setStatus]=useState("none")
    // console.log(phoneNumber,otp);

            const sendOtp=async()=>{
                if(phoneNumber.length!=10){
                    Alert.alert('Invalid Phone Number')
                }
                else{
                    //work after backend
                    const response = await Path.post("/sendOtp",{
                        mobile:`+91${phoneNumber}`,
                    })
                    if (response.data.data.otp) {
                      setValidOtp(response.data.data.otp)
                      console.log(response.data.data.otp);
                        setStatus('flex')
                        Alert.alert("Otp send to you Mobile Number")
                    }
                }

            }

            const verifyOtp=()=>{
              if (otp==validOtp) {
                navigation.navigate('UserRegester',{mobile:phoneNumber})
              }
            }


    return (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/images/SignIn.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>Welcome to Heal</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Mobile"
            placeholderTextColor="#000000" 
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.button} onPress={()=>{sendOtp()}}>
            <Text style={styles.buttonText}>Send Otp</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input,{display:`${status}`}]}
            placeholder="Enter OTP "
            placeholderTextColor="#000000" 
            onChangeText={text => setOtp(text)}
            value={otp}
            
          />
    
          
          <TouchableOpacity onPress={() => {verifyOtp()  }} style={[styles.button,{display:`${status}`}]} >
            <Text style={[styles.buttonText]}>Continue</Text>
          </TouchableOpacity>
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
      width: 300,
      height: 300, 
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#5D4FB3',
    },
    input: {
      width: '80%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 15,
      color:'#000000'
      // placeholderTextColor: "#000000",
    },
    button: {
      backgroundColor: '#5D4FB3',
      paddingVertical: 12,
      paddingHorizontal: 80,
      borderRadius: 5,
      marginBottom:10
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default OtpValidation;