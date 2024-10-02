import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';
const CustomSwitch = ({value, onValueChange}) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange(newValue);
    Animated.timing(animation, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const interpolateColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#B0B0B0', '#FA4A0C'],
  });

  const thumbPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 33],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <Animated.View
        style={[styles.track, {backgroundColor: interpolateColor}]}>
        <Animated.View style={[styles.thumb, {left: thumbPosition}]} />
      </Animated.View>
    </TouchableOpacity>
  );
};
export default CustomSwitch;
const styles = StyleSheet.create({
  track: {
    width: 55,
    height: 25,
    borderRadius: 12,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
