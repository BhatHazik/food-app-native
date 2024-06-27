import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';

const CircularLoader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      rotateAnim.setValue(0);
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => startAnimation());
    };

    startAnimation();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.loaderContainer}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <Svg height="100" width="100" viewBox="0 0 100 100">
          <Defs>
            <LinearGradient id="grad" x1="10%" y1="-10%" x2="95%" y2="0%">
              <Stop offset="90%" stopColor="#000" stopOpacity="1" />
              <Stop offset="5%" stopColor="#000" stopOpacity="0" />
              {/* <Stop offset="5%" stopColor="#000" stopOpacity="0" /> */}
            </LinearGradient>
          </Defs>
          <Circle
            cx="50"
            cy="50"
            r="35"
            stroke="url(#grad)"
            strokeWidth="7"
            strokeLinecap="butt"
            fill="none"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 102, 102, 0)',
    height: 500,
  },
});

export default CircularLoader;
