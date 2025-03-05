// StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

import AccountSettings from '../screens/ProfileScreen/AccountSettings';
import Notification from '../screens/Notification';

import { Platform } from 'react-native';
import WaterDrink from '../screens/HomeDetails/WaterDrink';
import SleepTracker from '../screens/HomeDetails/SleepTracker';
import CaloriesReport from '../screens/HomeDetails/CaloriesReport';
import ExerciseSchedule from '../screens/HomeDetails/ExerciseSchedule';
import ExerciseDescription from '../components/ExerciseDescription';

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
          headerShown: false,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }}
      />
      <Stack.Screen name='WaterDrink' component={WaterDrink} options={{ headerShown: false }} />
      <Stack.Screen name='SleepTracker' component={SleepTracker} options={{ headerShown: false }} />
      <Stack.Screen name='CaloriesReport' component={CaloriesReport} options={{ headerShown: false }} />
      <Stack.Screen name='ExerciseSchedule' component={ExerciseSchedule} options={{ headerShown: false }} />
        <Stack.Screen name='ExerciseDescription' component={ExerciseDescription} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
