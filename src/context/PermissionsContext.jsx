import React, { createContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
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
      const permission = Platform.select({
        ios: PERMISSIONS.IOS.REMINDERS,
        android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
      });

      try {
        const result = await check(permission);
        
        if (result === RESULTS.DENIED) {
          const requestResult = await request(permission);
          console.log(`Permission request result: ${requestResult}`);
          
          if (requestResult === RESULTS.GRANTED) {
            console.log('Permission granted after request');
            setupNotifications();
          }
        } else if (result === RESULTS.GRANTED) {
          console.log('Permission already granted');
          setupNotifications();
        }
      } catch (error) {
        console.error('Permission check failed:', error);
      }
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

