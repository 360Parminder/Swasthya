// AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/Signin';
import OtpValidation from '../screens/OtpVarification';
import UserRegister from '../screens/UserRegister';
import NetworkError from '../screens/Error/NetworkError';


const AuthStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>
      <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <AuthStack.Screen name='OtpVerification' component={OtpValidation} options={{ headerShown: false }} />
      <AuthStack.Screen name='UserRegister' component={UserRegister} options={{ headerShown: false }} />
      {/* <AuthStack.Screen name='NetworkError' component={NetworkError} options={{ headerShown: false }} /> */}

    </AuthStack.Navigator>
  );
};

export default AuthenticationNavigator;
