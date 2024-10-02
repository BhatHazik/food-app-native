import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SuccessScreen = ({navigation}) => {
  const tickRef = useRef(null);

  useEffect(() => {
    if (tickRef.current) {
      // Sequence of animations
      tickRef.current
        .fadeIn(800)
        .then(() => tickRef.current.bounce(800))
        .then(() => tickRef.current.rotate(360, 800)) // Rotate 360 degrees
        .then(() => tickRef.current.tada(800)); // Tada animation
    }
  }, []);

  const handleContinue = () => {
    navigation.navigate('CartScreen'); // Replace with your target screen
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeIn"
        duration={800}
        style={styles.animationContainer}>
        <Animatable.View ref={tickRef} style={styles.tickContainer}>
          <Animatable.View
            animation="fadeIn"
            duration={800}
            style={styles.tickIcon}>
            <AntDesign name="check" size={50} color={'white'} />
          </Animatable.View>
        </Animatable.View>
        <Text style={styles.title}>Payment Successful!</Text>
        <Text style={styles.message}>Thank you for your purchase.</Text>
        <Button title="Continue Shopping" onPress={handleContinue} />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  animationContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
  },
  tickContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tickIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
});

export default SuccessScreen;
