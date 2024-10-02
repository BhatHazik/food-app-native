import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Dimensions,
  Text,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

const CustomSlider = ({totalToPay}) => {
  const navigation = useNavigation();
  const thumbPadding = 10;
  const thumbPosition = useRef(new Animated.Value(thumbPadding)).current; // Using Animated.Value for smooth animation
  const trackWidth = width * 0.9;
  const thumbWidth = 40;

  const opacity = thumbPosition.interpolate({
    inputRange: [thumbPadding, trackWidth - thumbWidth - thumbPadding],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        let newThumbPosition = gestureState.dx + thumbPadding;
        if (newThumbPosition < thumbPadding) newThumbPosition = thumbPadding;
        if (newThumbPosition > trackWidth - thumbWidth - thumbPadding)
          newThumbPosition = trackWidth - thumbWidth - thumbPadding;
        Animated.timing(thumbPosition, {
          toValue: newThumbPosition,
          duration: 0, // Instantly set the thumb position during drag
          useNativeDriver: false,
        }).start();
      },
      onPanResponderRelease: () => {
        // Calculate 80% position
        const eightyPercentPosition =
          (trackWidth - thumbWidth - thumbPadding) * 0.8;
        const endPosition = trackWidth - thumbWidth - thumbPadding;

        thumbPosition.stopAnimation(currentPosition => {
          if (currentPosition < eightyPercentPosition) {
            // If below 80%, return to the start
            Animated.spring(thumbPosition, {
              toValue: thumbPadding, // Reset to starting position
              useNativeDriver: false,
            }).start();
          } else {
            // If above 80%, move to the end
            Animated.spring(thumbPosition, {
              toValue: endPosition, // Move to the end position
              useNativeDriver: false,
            }).start(() => {
              navigation.navigate('SuccessScreen');
            });
          }
        });
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View style={[styles.trackContainer, {width: trackWidth}]}>
        <View style={styles.track}>
          <Animated.Text style={[styles.trackText, {opacity}]}>
            Continue To Pay | {totalToPay.toFixed(2)}
          </Animated.Text>

          <Animated.View
            style={[
              styles.thumb,
              {
                transform: [{translateX: thumbPosition}],
              },
            ]}
            {...panResponder.panHandlers}>
            <AntDesign
              name="right"
              color={'#FA4A0C'}
              size={10}
              style={{left: 7}}
            />
            <AntDesign name="right" color={'#FA4A0C'} size={20} />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackContainer: {
    height: 40,
    justifyContent: 'center',
    zIndex: 2,
  },
  track: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FF4500',
    justifyContent: 'center',
  },
  trackText: {
    position: 'absolute', // Ensures the text stays in place
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 1,
    alignSelf: 'center',
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 2, // Thumb should appear above the text
  },
});

export default CustomSlider;
