import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import Bluetooth from './src/components/Bluetooth';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'react-native';
import GlobalColor from './src/Styles/GlobalColor';
// enableScreens();

const App = () => {
  
  return(<>
   <StatusBar barStyle="light-content" backgroundColor={GlobalColor.backgroundColor} />
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  </>
    // <Bluetooth/>

  )
    
  // return <TestScreen/>
};

export default App;
