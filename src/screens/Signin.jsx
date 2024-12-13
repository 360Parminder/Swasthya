import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoaderLine from '../components/LoaderLine';
import GlobalStyles from '../Styles/GlobalStyles';
import { AuthContext } from '../context/AuthContext';
import GlobalColor from '../Styles/GlobalColor';

const SignIn = () => {
  const { login, isLoading } = useContext(AuthContext);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleSignIn = async () => {
    const response = await login(phoneNumber, password);
  };



  return (
    isLoading ? <LoaderLine /> : (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={GlobalColor.backgroundColor} />
        <View style={[GlobalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Image
            style={styles.logo}
            source={require('../assets/images/meditation.png')}
            resizeMode="contain"
          />
          <Text style={GlobalStyles.title}>Welcome Back to Swasthya</Text>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={GlobalStyles.label}>Phone Number</Text>
            {/* <Text style={{ color: 'red' }}>*</Text> */}
          </View>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Phone Number"
            placeholderTextColor="#000"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={GlobalStyles.label}>Password</Text>
            {/* <Text style={{ color: 'red' }}>*</Text> */}
          </View>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        <View>
          ds   
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{ marginRight: 10 }}
              type="checkbox"
              value={rememberMe}
              onValueChange={setRememberMe}
            />
            <Text style={GlobalStyles.label}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.notRegistered}>
            <Text style={[styles.buttonText, styles.notRegisteredText]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={GlobalStyles.button} onPress={handleSignIn}>
            <Text style={GlobalStyles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')} style={styles.notRegistered}>
            <Text style={[styles.buttonText, styles.notRegisteredText]}>Not registered yet!</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  );
};

const styles = StyleSheet.create({

  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  notRegistered: {
    marginTop: 10,
  },
  notRegisteredText: {
    color: '#03045e',
  },
});



export default SignIn;
