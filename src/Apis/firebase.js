import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

// Configure push notifications
PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: true,
});

// Create a notification channel for Android
PushNotification.createChannel(
  {
    channelId: 'default-channel',
    channelName: 'Default Channel',
    channelDescription: 'A default channel for notifications',
    soundName: 'default',
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(`Channel created: ${created}`)
);

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

export const getFCMToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('FCM Token:', fcmToken);
      return fcmToken;
    }
  } catch (error) {
    console.log('Error getting FCM token:', error);
    return null;
  }
}

export const showLocalNotification = (title, message) => {
  PushNotification.localNotification({
    channelId: 'default-channel',
    title: title,
    message: message,
    playSound: true,
    soundName: 'default',
    importance: 'high',
    priority: 'high',
  });
};

export const notificationListener = async () => {
  // Foreground message handling
  messaging().onMessage(async remoteMessage => {
    console.log('Received foreground message:', remoteMessage);
    // Show local notification
    showLocalNotification(
      remoteMessage.notification?.title || 'New Message',
      remoteMessage.notification?.body || 'You have a new message'
    );
  });

  // Background message handling
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received background message:', remoteMessage);
    showLocalNotification(
      remoteMessage.notification?.title || 'New Message',
      remoteMessage.notification?.body || 'You have a new message'
    );
  });

  // Notification caused app to open from quit state
  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage,
      );
    }
  });

  // Notification caused app to open from background state
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage,
    );
  });
}
