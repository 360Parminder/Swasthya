import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import GlobalColor from "../../Styles/GlobalColor";

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  borderColor = GlobalColor.borderColor,
  focusBorderColor = GlobalColor.mainColor,
  labelBackground
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={GlobalColor.textColor}
        style={[
          styles.input,
          { borderBottomColor: isFocused ? focusBorderColor : borderColor },
          { borderBottomColor: isFocused ? focusBorderColor : borderColor },
        ]}
      />
      <Text
        style={[
          styles.label,
          {
            top: isFocused || value ? -12 : 13,
            fontSize: isFocused || value ? 14 : 16,
            zIndex: isFocused || value ? 1 : 0,
            backgroundColor:labelBackground,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 10,
    width:'90%'
  },
  input: {
    borderWidth: 1,
    borderColor:GlobalColor.borderColor,
    borderRadius: 5,
    height: 50,
    fontSize: 16,
    color: GlobalColor.textColor,
  },
  label: {
    position: "absolute",
    left: 10,
    transition: "top 200ms, font-size 200ms",
    color: GlobalColor.textColor,
  },
});

export default FloatingLabelInput;
