import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const WifiLoader = () => {
  const outerCircleOffset = useSharedValue(25);
  const middleCircleOffset = useSharedValue(17);
  const innerCircleOffset = useSharedValue(9);

  useEffect(() => {
    outerCircleOffset.value = withRepeat(
      withTiming(276, {
        duration: 1800,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    middleCircleOffset.value = withRepeat(
      withTiming(187, {
        duration: 1800,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    innerCircleOffset.value = withRepeat(
      withTiming(97, {
        duration: 1800,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedPropsOuter = useAnimatedProps(() => {
    return {
      strokeDashoffset: outerCircleOffset.value,
    };
  });

  const animatedPropsMiddle = useAnimatedProps(() => {
    return {
      strokeDashoffset: middleCircleOffset.value,
    };
  });

//   const animatedPropsInner = useAnimatedProps(() => {
//     return {
//       strokeDashoffset: innerCircleOffset.value,
//     };
//   });

  return (
    <View style={styles.loader}>
      <Svg height="86" width="86" viewBox="0 0 86 86" style={styles.circleOuter}>
        <Circle cx="43" cy="43" r="40" stroke={styles.backColor.stroke} strokeWidth="6" />
        <AnimatedCircle
          cx="43"
          cy="43"
          r="40"
          strokeWidth="6"
          strokeDasharray="62.75 188.25"
          animatedProps={animatedPropsOuter}
          style={{ stroke: styles.frontColor.stroke }}
        />
      </Svg>
      <Svg height="60" width="60" viewBox="0 0 60 60" style={styles.circleMiddle}>
        <Circle cx="30" cy="30" r="27" stroke={styles.backColor.stroke} strokeWidth="6" />
        <AnimatedCircle
          cx="30"
          cy="30"
          r="27"
          strokeWidth="6"
          strokeDasharray="42.5 127.5"
          animatedProps={animatedPropsMiddle}
          style={{ stroke: styles.frontColor.stroke }}
        />
      </Svg>
      <Svg height="34" width="34" viewBox="0 0 34 34" style={styles.circleInner}>
        <Circle cx="17" cy="17" r="14" stroke={styles.backColor.stroke} strokeWidth="6" />
        {/* <AnimatedCircle
          cx="17"
          cy="17"
          r="14"
          strokeWidth="6"
          strokeDasharray="22 66"
          animatedProps={animatedPropsInner}
          style={{ stroke: styles.frontColor.stroke }}
        /> */}
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Searching</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    width: 64,
    height: 64,
    borderRadius: 50,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOuter: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleMiddle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backColor: {
    stroke: '#c3c8de',
  },
  frontColor: {
    stroke: '#4f29f0',
  },
  textContainer: {
    position: 'absolute',
    bottom: -40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'lowercase',
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.2,
    color: '#414856',
  },
});

export default WifiLoader;
