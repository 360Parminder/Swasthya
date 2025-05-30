import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Modal } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import UserAuth from '../services/UserAuth';
import FloatingLabelInput from '../components/Inputs/FloatingLabelInput';

const VerifyOtpModal = ({ visible, onClose, phoneNumber, navigation }) => {
  const [otp, setOtp] = useState('');

  const verifyOtp = async () => {
    try {
      const response = await UserAuth.verifyOtp(phoneNumber, otp);
      if (response.success) {
        Alert.alert("Success", "OTP Verified");
        onClose();  // Close modal first
        navigation.navigate('UserRegister', { mobile: phoneNumber });
      } else {
        Alert.alert("Verification Failed", response.message || "Invalid OTP");
      }
    } catch (err) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Verify your Phone Number</Text>
          <TextInput
            style={[GlobalStyles.input, styles.otpInput]}
            placeholder="Enter OTP"
            placeholderTextColor={GlobalColor.textColor}
            onChangeText={setOtp}
            keyboardType="numeric"
            value={otp}
          />
          <TouchableOpacity onPress={verifyOtp} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const OtpValidation = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyOtpModal, setVerifyOtpModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    label: 'India',
    value: 'IN',
    dialCode: '+91',
    code: 'IN'
  });
  const [showOtherCountryMessage, setShowOtherCountryMessage] = useState(false);

  const countryCodes = [
    { label: 'India (+91)', value: { code: 'IN', dialCode: '+91' } },
    { label: 'USA (+1)', value: { code: 'US', dialCode: '+1' } },
    { label: 'UK (+44)', value: { code: 'GB', dialCode: '+44' } },
    // Add more countries as needed
  ]

  const handleCountryChange = (country) => {
    setSelectedCountry({
      code: country.code,
      dialCode: country.dialCode,
      label: countryCodes.find(c => c.value.code === country.code)?.label || ''
    });
    
    if (country.code !== 'IN') {
      setShowOtherCountryMessage(true)
    } else {
      setShowOtherCountryMessage(false)
    }
  }


  const sendOtp = async () => {
    if (selectedCountry.code !== 'IN') return;

    if (phoneNumber.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Please enter a 10-digit number.');
      return;
    }
    try {
      const response = await UserAuth.sendOtp(selectedCountry.dialCode, phoneNumber);
      if (response.success) {
        setVerifyOtpModal(true);
      } else {
        Alert.alert("Error", response.message || "Failed to send OTP.");
      }
    } catch (error) {
      Alert.alert("Network Error", "Unable to send OTP. Please try again.");
    }
  };
  console.log("Selected Country:", selectedCountry);
  console.log("Phone Number:", phoneNumber);
  

  return (
    <View style={GlobalStyles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/password.png')}
        resizeMode="contain"
      />
      <Text style={GlobalStyles.title}>Enter Your Mobile Number</Text>
      <Text style={styles.subtitle}>We will send you a confirmation code</Text>

      <View style={styles.countryInputContainer}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={handleCountryChange}
            items={countryCodes}
            value={selectedCountry}
            style={pickerSelectStyles}
            placeholder={{}}
            useNativeAndroidPickerStyle={false}
          />
        </View>
        <FloatingLabelInput
          label="Enter your Mobile"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
          containerStyle={{ flex: 1 }}
        />
      </View>

      {showOtherCountryMessage && (
        <Text style={styles.otherCountryMessage}>
          Currently we support only India. More countries coming soon!
        </Text>
      )}

      <TouchableOpacity
        style={[GlobalStyles.button, selectedCountry.code !== 'IN' && styles.disabledButton]}
        onPress={sendOtp}
        disabled={selectedCountry.code !== 'IN'}
      >
        <Text style={GlobalStyles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <VerifyOtpModal
        visible={verifyOtpModal}
        onClose={() => setVerifyOtpModal(false)}
        phoneNumber={phoneNumber}
        navigation={navigation}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: 'black',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'white',
    paddingRight: 30,
  },
  inputAndroid: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
    padding: 12,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 20,
    color: GlobalColor.textColor,
    fontSize: 16,
  },
  countryInputContainer: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 15,
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: 'black',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    height: 50,
    width: 90,
  },
  otherCountryMessage: {
    color: 'orange',
    marginBottom: 15,
    textAlign: 'center',
    width: '80%',
  },
  disabledButton: {
    opacity: 0.6,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: GlobalColor.primaryColor,
    width: '100%',
    height: '70%',
    alignItems: 'center',
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5D4FB3',
  },
  otpInput: {
    width: '80%',
    marginBottom: 20,
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
});

export default OtpValidation;
