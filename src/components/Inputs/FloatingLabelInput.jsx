import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Animated } from "react-native";
import GlobalColor from "../../Styles/GlobalColor";

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  style,
  inputStyle,
  // labelStyle,
  containerStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = new Animated.Value(value ? 1 : 0);

  React.useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: (isFocused || value) ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 16,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 16],
    }),
    color: GlobalColor.textColor,
    backgroundColor: GlobalColor.backgroundColor,
    paddingHorizontal: 4,
  };

  return (
    <View style={[styles.inputGroup, containerStyle]}>
      <TextInput
        style={[
          styles.input,
          isFocused || value ? styles.inputFocused : null,
          inputStyle,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChangeText}
        placeholder=" "
      />
      <Animated.Text style={[labelStyle, labelStyle]}>
        {label}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginVertical: 10,
    position: "relative",
    alignSelf: "center",
    width: "100%",
  },
  input: {
    position: "relative",
    color: GlobalColor.textColor,
    fontSize: 16,
    padding: 12,
    borderWidth: 2,
    borderColor: GlobalColor.borderColor,
    borderRadius: 12,
    backgroundColor: "transparent",
    width: "100%",
  },
  inputFocused: {
    borderColor: GlobalColor.mainColor,
  },
});

export default FloatingLabelInput;
