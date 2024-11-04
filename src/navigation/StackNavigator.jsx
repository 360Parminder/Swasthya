// StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

import AccountSettings from '../screens/ProfileScreen/AccountSettings';
import Notification from '../screens/Notification';

import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Home Screen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Analysis' component={StatisticsScreen} options={{ headerShown: true }} />
     
      <Stack.Screen
        name='Profile Settings'
        component={AccountSettings}
        options={{
          headerShown: true,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }}
      />
      
      <Stack.Screen
        name='Notification'
        component={Notification}
        options={{
          headerShown: true,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }}
      />
     
    </Stack.Navigator>
  );
};

export default StackNavigator;
