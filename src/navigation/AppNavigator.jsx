// AppNavigator.js
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { PermissionsProvider } from '../context/PermissionsContext';
import AuthenticationNavigator from './AuthStack';
import { UserDataProvider } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import NetworkError from '../screens/Error/NetworkError';

const AppNavigator = () => {
  const { isAuthenticated, isNetworkError } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <UserDataProvider>
      <PermissionsProvider>
        <NavigationContainer>
          {loggedIn ? (isNetworkError ? <NetworkError /> : <TabNavigator />) : (isNetworkError?<NetworkError/>:<AuthenticationNavigator />)}
        </NavigationContainer>
      </PermissionsProvider>
    </UserDataProvider>
  );
};

export default AppNavigator;
