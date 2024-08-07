import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import updateWidget from '../utils/WidgetModule';

const TestScreen = () => {
  const [text, setText] = useState('');

  const handleUpdateWidget = () => {
    updateWidget(text);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Update Widget Text:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={setText}
        value={text}
      />
      <Button title="Update Widget" onPress={handleUpdateWidget} />
    </View>
  );
};

export default TestScreen;
