// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'; // Adjust import path if needed
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Leaderboard from '../screens/Leaderboard';
import Browse from '../screens/Browse';
import CustomHeader from '../components/CustomHeader';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#5D4FB3',
        tabBarInactiveTintColor: '#808080',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Leaderboard') {
            iconName = 'podium';
          } else if (route.name === 'Browse') {
            iconName = 'grid';
          }
          return <Icon name={iconName} color={color} size={size} />;
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
        component={Browse}
        options={{ header: () => <CustomHeader headerTitle={'Browse'} /> }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
