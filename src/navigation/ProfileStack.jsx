// BrowseStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountSettings from '../screens/ProfileScreen/AccountSettings';
import Profile from '../screens/Profile';
import Help from '../screens/ProfileScreen/Help';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Personal Details" component={AccountSettings} options={{ headerShown: false }} />
      <Stack.Screen name="Help" component={Help} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
