import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../components/StatisticsScreen';
import Activity from '../screens/SubScreens/Activity';

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
    </Stack.Navigator>
  );
};

export default StackNavigator;
