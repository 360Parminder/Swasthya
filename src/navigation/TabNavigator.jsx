// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'; // Adjust import path if needed
import Icon from 'react-native-vector-icons/Ionicons';
import Leaderboard from '../screens/Leaderboard';
import CustomHeader from '../components/CustomHeader';
import BrowseStackNavigator from './BrowseStackNavigator';
import ProfileStack from './ProfileStack';

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
          marginHorizontal: 10,  // Horizontal margin around tab bar
          marginBottom: 10,      // Bottom margin for tab bar
          borderRadius: 15,      // Optional: rounded corners for a card-like effect
          elevation: 5,          // Optional: shadow for Android
          shadowOpacity: 0.3,    // Optional: shadow for iOS
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
        component={BrowseStackNavigator}
        options={{ header: () => <CustomHeader headerTitle={'Browse'} /> }}
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
