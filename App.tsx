import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  
  return(
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>

  )
    
  // return <TestScreen/>
};

export default App;
