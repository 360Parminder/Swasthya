import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const TestScreen = () => {
  const [svalue, setSvalue] = useState('');
console.log(svalue);
  return (
    <SafeAreaView>
      <RNPickerSelect
        placeholder={{ label: 'Select a sport...', value: null }}
        onValueChange={(itemValue, itemIndex) => setSvalue(itemValue)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' },
        ]}
      />
    </SafeAreaView>
  );
};

export default TestScreen;
