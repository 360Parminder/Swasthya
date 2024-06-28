import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../components/StatisticsScreen';
import SignIn from '../screens/Signin';
import OtpValidation from '../screens/OtpVarification';
import UserRegister from '../screens/UserRegister';


const Stack = createNativeStackNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName='Home Screen'>
      <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}} />
      <Stack.Screen name='Otpverification' component={OtpValidation} options={{headerShown:false}} />
      <Stack.Screen name='UserRegester' component={UserRegister} options={{headerShown:false}} />
      <Stack.Screen name='Home Screen' component={HomeScreen} options={{headerShown:true}} />
      <Stack.Screen name='Analysis' component={StatisticsScreen} options={{headerShown:true}} />
      
    </Stack.Navigator>
  )
}

export default StackNavigator