import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoaderLine from '../components/LoaderLine';
import GlobalStyles from '../Styles/GlobalStyles';
import { AuthContext } from '../context/AuthContext';
import GlobalColor from '../Styles/GlobalColor';
import { Checkbox } from 'react-native-paper';
import FloatingLabelInput from '../components/Inputs/FloatingLabelInput';
import { PermissionsContext } from '../context/PermissionsContext';



const SignIn = () => {
  const { login, isLoading } = useContext(AuthContext);
  const {fcmToken} = useContext(PermissionsContext);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSignIn = async () => {
    if (!phoneNumber || !password) {
      Alert.alert('Error', 'Please fill in both phone number and password');
      return;
    }

    try {
      const response = await login(phoneNumber, password,fcmToken);
      if (!response.success) {
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };
  console.log(phoneNumber, password);
  

  return (
    <View style={[GlobalStyles.container]}>
      <Image
        style={styles.logo}
        source={require('../assets/images/meditation.png')}
        resizeMode="contain"
      />
      <Text style={GlobalStyles.title}>Welcome Back to Swasthya</Text>


      <FloatingLabelInput label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} borderColor={GlobalColor.borderColor} />
      <FloatingLabelInput label="Password" value={password} onChangeText={setPassword} borderColor={GlobalColor.borderColor} />

      {/* <View style={styles.checkboxContainer}>
            <View style={styles.checkboxRow}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
                accessibilityLabel="Remember Me"
              />
              <Text style={GlobalStyles.label}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={[styles.buttonText, styles.notRegisteredText]}>Forgot Password?</Text>
            </TouchableOpacity>
          </View> */}

      <TouchableOpacity style={GlobalStyles.button} onPress={handleSignIn}>
        <Text style={GlobalStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')} style={styles.notRegistered}>
        <Text style={[styles.buttonText, styles.notRegisteredText]}>Not registered yet!</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between', // Space elements within the row
    alignItems: 'center',
    // width: '100%',
    // marginVertical: 10,
    paddingHorizontal: 20, // Add padding to prevent overflow
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notRegistered: {
    marginTop: 10,
  },
  notRegisteredText: {
    color: GlobalColor.textColor,
    // textAlign: 'right', // Align text to the right if needed
    // flexShrink: 1, // Prevent text overflow
  },
});

export default SignIn;
