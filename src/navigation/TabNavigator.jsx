import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Leaderboard from '../screens/Leaderboard';
import Browse from '../screens/Browse';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#5D4FB3',
        tabBarInactiveTintColor: '#808080',
        // tabBarActiveBackgroundColor:'#FFFFFF',
        tabBarShowLabel:false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          else if (route.name=== 'Leaderboard') {
            iconName = 'podium';
          }
          else if (route.name === 'Browse') {
            iconName= 'grid'
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name='Home'
        component={StackNavigator}
        options={{
          headerShown: false,
        }}
      />
        <Tab.Screen
          name='Leaderboard'
          component={Leaderboard}
          options={{
            // Add this line if you want to hide the header for the Profile tab as well
          }}
        />
        <Tab.Screen
          name='Browse'
          component={Browse}
          options={{
            // Add this line if you want to hide the header for the Profile tab as well
          }}
        />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          // Add this line if you want to hide the header for the Profile tab as well
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
