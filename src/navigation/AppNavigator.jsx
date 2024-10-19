// AppNavigator.js
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { PermissionsProvider } from '../context/PermissionsContext';
import AuthenticationNavigator from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationListener } from '../utils/fcmUtils';
import { UserDataProvider } from '../context/UserContext';
import { AuthContext, AuthProvider } from '../context/AuthContext';

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  return (
    
    <UserDataProvider>
      <PermissionsProvider>
        <NavigationContainer>
          {loggedIn ? <TabNavigator /> : <AuthenticationNavigator />}
        </NavigationContainer>
      </PermissionsProvider>
    </UserDataProvider>
  );
};

export default AppNavigator;
