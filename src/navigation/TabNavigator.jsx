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
import GlobalColor from '../Styles/GlobalColor';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
      
        tabBarActiveTintColor: GlobalColor.mainColor,
        tabBarInactiveTintColor: GlobalColor.tertiaryColor,
        tabBarShowLabel: false,
        tabBarStyle:{
         position: 'absolute',
        //  display: 'flex',
          // flexDirection: 'row',
          // alignItems: 'center',
          //   flexDirection: 'row',
          // justifyContent: 'space-around',
          alignItems: 'center',
          bottom: Platform.OS === 'ios' ? 20 : 10,
          left: 20,
          right: 20,
          // paddingBottom: 5,
          borderRadius: 15,
          height: 80,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 15,
          backgroundColor: GlobalColor.primaryColor,
          // justifyContent: 'center',
          // alignItems: 'center',
        
          
        },
        tabBarItemStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        },
        tabBarIcon: ({ focused, color }) => {
          
          const size = focused ? 28 : 24; // Larger icon for focused state
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'ProfileStack':
              iconName = 'person';
              break;
            case 'Leaderboard':
              iconName = 'podium';
              break;
            case 'Browse':
              iconName = 'grid';
              break;
          }
          return <Icon name={iconName} color={color} size={size}  />;
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
        options={{ headerShown: false }}
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
