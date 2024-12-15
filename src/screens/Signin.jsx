import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoaderLine from '../components/LoaderLine';
import GlobalStyles from '../Styles/GlobalStyles';
import { AuthContext } from '../context/AuthContext';
import GlobalColor from '../Styles/GlobalColor';
import { Checkbox } from 'react-native-paper';

const SignIn = () => {
  const { login, isLoading } = useContext(AuthContext);
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
      const response = await login(phoneNumber, password);
      if (!response.success) {
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
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

          <View style={styles.inputGroup}>
            <Text style={GlobalStyles.label}>Phone Number</Text>
          </View>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Phone Number"
            placeholderTextColor="#000"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType="phone-pad"
            accessibilityLabel="Enter your phone number"
          />

          <View style={styles.inputGroup}>
            <Text style={GlobalStyles.label}>Password</Text>
          </View>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            accessibilityLabel="Enter your password"
          />

          <View style={styles.checkboxContainer}>
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
  inputGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space elements within the row
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
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
    color: '#03045e',
    textAlign: 'right', // Align text to the right if needed
    flexShrink: 1, // Prevent text overflow
  },
});

export default SignIn;
