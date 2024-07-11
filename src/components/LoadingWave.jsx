import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const LoadingWave = () => {
  const animation1 = useRef(new Animated.Value(10)).current;
  const animation2 = useRef(new Animated.Value(10)).current;
  const animation3 = useRef(new Animated.Value(10)).current;
  const animation4 = useRef(new Animated.Value(10)).current;
console.log(animation1);
  useEffect(() => {
    const createAnimation = (animatedValue, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 50,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(animatedValue, {
            toValue: 10,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    createAnimation(animation1, 0);
    createAnimation(animation2, 100);
    createAnimation(animation3, 300);
    createAnimation(animation4, 400);
  }, [animation1, animation2, animation3, animation4]);

  return (
    <View style={styles.container}>
<View style={styles.loadingWave}>
      <Animated.View style={[styles.loadingBar, { height: animation1 }]} />
      <Animated.View style={[styles.loadingBar, { height: animation2 }]} />
      <Animated.View style={[styles.loadingBar, { height: animation3 }]} />
      <Animated.View style={[styles.loadingBar, { height: animation4 }]} />
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
  loadingWave: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  loadingBar: {
    width: 20,
    marginHorizontal: 5,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
});

export default LoadingWave;
