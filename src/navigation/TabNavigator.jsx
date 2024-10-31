// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'; // Adjust import path if needed
import Icon from 'react-native-vector-icons/Ionicons';
import Leaderboard from '../screens/Leaderboard';
import CustomHeader from '../components/CustomHeader';
import BrowseStackNavigator from './BrowseStackNavigator';
import ProfileStack from './ProfileStack';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#5D4FB3',
        tabBarInactiveTintColor: '#808080',
        tabBarShowLabel: false,
        tabBarStyle: {
         display: 'flex',
         position: 'absolute',
          bottom: Platform.OS === 'ios' ? 20 : 10,
          left: 20,
          right: 20,
          paddingBottom: 5,
          borderRadius: 15,
          height: 60,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 15,

          
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'ProfileStack') {
            iconName = 'person';
          } else if (route.name === 'Leaderboard') {
            iconName = 'podium';
          } else if (route.name === 'Browse') {
            iconName = 'grid';
          }
          return (
            <Icon 
              name={iconName} 
              color={color} 
              size={size} 
              style={{ alignSelf: 'center' }} // Center icon within tab
            />
          );
        },
      })}
      
    >
      <Tab.Screen
        name='Home'
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Leaderboard'
        component={Leaderboard}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name='Browse'
        component={BrowseStackNavigator}
       options={{ headerShown: false }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
