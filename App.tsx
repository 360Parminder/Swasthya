import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
const customTextProps = {
  style: {
    fontFamily: 'SpaceMono-Regular', // Replace 'YourFontName' with the actual font family name
  }
};

const customTextInputProps = {
  style: {
    fontFamily: 'SpaceMono-Regular', // Replace 'YourFontName' with the actual font family name
  }
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);
const App = () => {
  
  return <AppNavigator />;
};

export default App;
