import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/Signin';
import OtpValidation from '../screens/OtpVarification';
import UserRegister from '../screens/UserRegister';
import TabNavigator from '../navigation/TabNavigator';

const AuthStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>
      <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <AuthStack.Screen name='Otpverification' component={OtpValidation} options={{ headerShown: false }} />
      <AuthStack.Screen name='UserRegester' component={UserRegister} options={{ headerShown: false }} />
      <AuthStack.Screen name='root' component={TabNavigator} options={{ headerShown: false }} />
      
    </AuthStack.Navigator>
  );
};

export default AuthenticationNavigator;
