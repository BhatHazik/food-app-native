import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const LoadingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bowl.png')} style={styles.bowl} />
      <View style={styles.textContainer}>
        <Text style={styles.food}>FOOD {'\n'}KART</Text>
        <Text style={styles.text2}>Satisfy your cravings with just a tap</Text>
        <Text style={styles.text2}>Order, Eat, Repeat!</Text>
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  bowl: {
    width: width * 0.7, // 60% of screen width
    height: height * 0.5, // 30% of screen height
    resizeMode: 'contain',
    position: 'absolute',
    top: '-15%',
    right: '-18%',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: height * 0.4, // 40% of screen height
  },
  food: {
    fontWeight: '700',
    fontSize: width * 0.12, // Dynamic font size based on screen width
    color: '#FA4A0C',
    lineHeight: width * 0.16,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    marginBottom: 20,
    textAlign: 'center',
  },
  text2: {
    lineHeight: width * 0.06, // Dynamic line height based on screen width
    color: '#00030F',
    fontSize: width * 0.05, // Dynamic font size based on screen width
    fontWeight: '400',
    textAlign: 'center',
  },
  boxContainer: {
    height: height * 0.2, // 20% of screen height
    width: '100%',
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: height * 0.06, // 6% of screen height
    width: width * 0.5, // 50% of screen width
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.03, // Dynamic font size based on screen width
    // fontWeight: 'bold',
  },
});
