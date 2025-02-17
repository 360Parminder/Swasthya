// BrowseStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Browse from '../screens/Browse';
import Medication from '../screens/BrowseScreen/Medication';
import Activity from '../screens/BrowseScreen/Activity';
import BodyMeasurements from '../screens/BrowseScreen/BodyMeasurements';
import Diet from '../screens/BrowseScreen/Diet';
import Connections from '../screens/BrowseScreen/Connections';
const Stack = createNativeStackNavigator();

const BrowseStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BrowseHome">
      <Stack.Screen name="BrowseHome" component={Browse} options={{ headerShown: false }} />
      <Stack.Screen name="Medication" component={Medication} options={{ headerShown: false }} />
      <Stack.Screen
        name='Diet'
        component={Diet}
        options={{
          headerShown: false,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }}
      />
      <Stack.Screen
        name='Body Measurements'
        component={BodyMeasurements}
        options={{
          headerShown: false,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }}
      />
       <Stack.Screen
        name='Activity'
        component={Activity}
        options={{
          headerShown: false,
          ...(Platform.OS === 'ios' && {
            headerStyle: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
          }),
        }}
      />
      <Stack.Screen
        name='Connections'
        component={Connections}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BrowseStackNavigator;
