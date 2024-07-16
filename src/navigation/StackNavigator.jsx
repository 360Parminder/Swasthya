import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../components/StatisticsScreen';
import Activity from '../screens/BrowseScreen/Activity';
import Medication from '../screens/BrowseScreen/Medication';
import AccountSettings from '../screens/ProfileScreen/AccountSettings';
import BodyMeasurements from '../screens/BrowseScreen/BodyMeasurements';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Home Screen'>
      <Stack.Screen name='Home Screen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Analysis' component={StatisticsScreen} options={{ headerShown: true }} />
      <Stack.Screen name='Activity' component={Activity} 
        options={{
          headerShown: true,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }} 
      />
      <Stack.Screen name='Medication' component={Medication} options={{ headerShown: true }} />
      <Stack.Screen name='Profile Settings' component={AccountSettings} options={{ headerShown: true }} />
      <Stack.Screen name='Body Measurements' component={BodyMeasurements} options={{ headerShown: true }} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
