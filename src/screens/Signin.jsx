import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, useColorScheme } from 'react-native';
import Path from '../services/Path';
import { useNavigation } from '@react-navigation/native';
import { getFCMToken } from '../utils/fcmUtils';
import LoaderLine from '../components/LoaderLine';
import GlobalStyles from '../Styles/GlobalStyles';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
  const { login, isLoading } = useContext(AuthContext);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
 

  const colorScheme = useColorScheme();

  // useEffect(() => {
  //   getFCMToken().then((token) => {
  //     setFCMToken(token);
  //     console.log("form sign",token);
      
  //   });
  // }, []);

  const handleSignIn = async () => {
   const response = await login(phoneNumber, password);
  };

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
   isLoading ? <LoaderLine /> : (
      <View style={[GlobalStyles.container,{justifyContent:'center',alignItems:'center'}]}>
        <Image
          style={styles.logo}
          source={require('../assets/images/meditation.png')}
          resizeMode="contain"
        />
        <Text style={GlobalStyles.title}>Welcome Back to Swasthya</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Mobile Number"
          placeholderTextColor={colorScheme === 'dark' ? "#ffffff" : "#000000"}
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={GlobalStyles.input}
          placeholder="Password"
          placeholderTextColor={colorScheme === 'dark' ? "#ffffff" : "#000000"}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={GlobalStyles.button} onPress={handleSignIn}>
          <Text style={GlobalStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')} style={styles.notRegistered}>
          <Text style={[styles.buttonText, styles.notRegisteredText]}>Not registered yet!</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

const lightStyles = StyleSheet.create({

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
    color: '#000000',
  },
  button: {
    backgroundColor: '#5D4FB3',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notRegistered: {
    marginTop: 10,
  },
  notRegisteredText: {
    color: '#03045e',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
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
    color: '#BB86FC',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#1E1E1E',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#BB86FC',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notRegistered: {
    marginTop: 10,
  },
  notRegisteredText: {
    color: '#0077b6',
  },
});

export default SignIn;
