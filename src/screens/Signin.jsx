import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Path from '../services/Path';
// import messaging from '@react-native-firebase/messaging';
// import notifee from '@notifee/react-native';

const SignIn = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [fcmToken, setFCMToken] = useState();

  // useEffect(() => {
  //   const requestUserPermission = async () => {
  //     const authStatus = await messaging().requestPermission();
  //     const enabled =
  //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //     if (enabled) {
  //       console.log('Authorization status:', authStatus);
  //       getDeviceToken();
  //     } else {
  //       console.log('Authorization status:', authStatus);
  //       Alert.alert('Permission denied', 'Unable to get FCM token');
  //     }
  //   };

  //   const getDeviceToken = async () => {
  //     try {
  //       const token = await messaging().getToken();
  //       console.log('Device FCM Token:', token);
  //       setFCMToken(token);
  //     } catch (error) {
  //       console.log('Failed to get FCM token:', error);
  //     }
  //   };

  //   const onMessageReceived = async () => {
  //     const unsubscribe = messaging().onMessage(async remoteMessage => {
  //       console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //       onDisplayNotification(remoteMessage.notification);
  //     });

  //     return unsubscribe; // Ensure to return the unsubscribe function for cleanup
  //   };

  //   requestUserPermission();
  //   const unsubscribe = onMessageReceived();

  //   return () => {
  //     if (unsubscribe) unsubscribe(); // Cleanup the message listener
  //   };
  // }, []);

  // const onDisplayNotification = async (notification) => {
  //   try {
  //     // Request permissions (required for iOS)
  //     await notifee.requestPermission();

  //     // Create a channel (required for Android)
  //     const channelId = await notifee.createChannel({
  //       id: 'default',
  //       name: 'Default Channel',
  //       sound: 'sound',
  //     });

  //     // Display a notification
  //     await notifee.displayNotification({
  //       title: notification?.title || 'Default Title',
  //       body: notification?.body || 'Default Body',
  //       android: {
  //         channelId,
  //         sound: 'sound',
  //         // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //         // pressAction is needed if you want the notification to open the app when pressed
  //         pressAction: {
  //           id: 'default',
  //         },
  //       },
  //     });
  //   } catch (error) {
  //     console.log('Failed to display notification:', error);
  //   }
  // };

  useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          navigation.navigate('Home');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  const handleSignIn = async () => {
    try {
      console.log(phoneNumber, password);
      if (phoneNumber && password) {
        //work after backend
        const response = await Path.post("/login", {
          mobile: phoneNumber,
          password: password,
          fcm_token: fcmToken,
        });
        if (response.data) {
          // console.log(response.data);
          await AsyncStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          navigation.navigate('Home');
          // work after navigation set
        } else {
          Alert.alert("error", "invalid credentials");
        }
      } else {
        Alert.alert("Please fill all the fields");
      }
    } catch (error) {
      Alert.alert("error", "invalid credentials");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/SignIn.png')}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome Back to Heal</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#000000"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Otpverification') }} style={{
        marginTop: 10,
      }} >
        <Text style={[styles.buttonText, { color: '#000000' }]}>Not Registered</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E2EE',
  },
  logo: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
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
    color: '#000000'
    // placeholderTextColor: "#000000",
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

export default SignIn;
