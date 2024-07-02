import { View, Text, Platform } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';

export const PermissionsContext = createContext();

export const PermissionsProvider = ({children}) => {

useEffect(() => {
  const requestPermission = async ()=>{
    if (Platform.OS==='ios') {
  const result = await check(PERMISSIONS.IOS.REMINDERS)
  
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
        const requestResult = await request(PERMISSIONS.IOS.REMINDERS);
       console.log(`Permission request result: ${requestResult}`);
       if (requestResult === RESULTS.GRANTED) {
         console.log('Permission granted after request');
       } else {
         console.log('Permission not granted after request');
       }
      break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');  
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;  
      default:
        break;
    }
 
  }
  else if (Platform.OS==='android') {
   const result= await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
         const requestResult = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
        console.log(`Permission request result: ${requestResult}`);
        if (requestResult === RESULTS.GRANTED) {
          console.log('Permission granted after request');
        } else {
          console.log('Permission not granted after request');
        }
      break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');  
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;  
      default:
        break;
    }
  }
  
  }
  requestPermission()
  
}, [])



const [Permissions,setPermissions]=useState(null);

  return (
    <PermissionsContext.Provider value={{Permissions,setPermissions}}>
        {children}
    </PermissionsContext.Provider>
  )
}

