import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import Bluetooth from './src/components/Bluetooth';


const App = () => {
  
  return(
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
    // <Bluetooth/>

  )
    
  // return <TestScreen/>
};

export default App;
