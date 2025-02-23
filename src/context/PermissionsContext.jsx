import React, { createContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, openSettings, request,requestNotifications } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission, notificationListener, showLocalNotification } from '../Apis/firebase';

export const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const setupNotifications = async () => {
      // Request permission and get token
      await requestUserPermission();
      // Get FCM token
      const token = await messaging().getToken();
      if (token) {
        setFcmToken(token);
        console.log('FCM Token:', token);
      }
      // Set up notification listeners
      await notificationListener();
    };

    const requestPermissions = async () => {
      requestNotifications(['alert','sound']).then((result)=>{
        if (result.status === RESULTS.GRANTED) {
          console.log("granted from permissions context",result.status);
          setupNotifications()
        }
        else{
        openSettings();
          
        }
      })
      
    
    };

    requestPermissions();

    // Cleanup
    return () => {
      // Remove any listeners if needed
    };
  }, []);

  // Handle incoming messages
  const onMessageReceived = async (message) => {
    console.log('New message received:', message);
    showLocalNotification(
      message.notification?.title || 'New Message',
      message.notification?.body || 'You have a new message'
    );
  };

  // Set up message handlers
  messaging().onMessage(onMessageReceived);
  messaging().setBackgroundMessageHandler(onMessageReceived);

  return (
    <PermissionsContext.Provider value={{ fcmToken }}>
      {children}
    </PermissionsContext.Provider>
  );
};

