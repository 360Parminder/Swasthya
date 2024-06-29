
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { PermissionsProvider } from '../context/PermissionsContext';
import AuthenticationNavigator from '../context/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
          try {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
            }
          } catch (e) {
            console.error('Failed to load token.');
          } finally {
            setIsLoading(false);
          }
        };
    
        checkAuthentication();
      }, []);

  return (
    <PermissionsProvider>
      <NavigationContainer>
        {isLoggedIn ? <TabNavigator /> : <AuthenticationNavigator />}
      </NavigationContainer>
    </PermissionsProvider>
  );
};

export default AppNavigator;