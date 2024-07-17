import React from 'react';
import { View, Animated, Easing } from 'react-native';

const LoaderLine = () => {
  const animation = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }),
  ).start();

  return (
    <View style={{
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    }}
    >
    <View
      style={{
        width: 150,
        height: 7,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'relative',
      }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
          height: '100%',
          borderRadius: 30,
          backgroundColor: '#5D4FB3',
        }}
      />
    </View>
    </View>
  );
};

export default LoaderLine;