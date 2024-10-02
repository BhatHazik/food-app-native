import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Voice from '@react-native-voice/voice';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const [food, setFood] = useState('');
  const [isListening, setIsListening] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Register event listeners for voice recognition
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      // Remove the listeners when the component unmounts
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    console.log('Speech has started');
  };

  const onSpeechEnd = () => {
    console.log('Speech has ended');
    setIsListening(false);
  };

  const onSpeechResults = result => {
    console.log('Speech results: ', result);
    if (result.value) {
      setFood(result.value[0]); // Set the recognized text as food input
    }
  };

  const startListening = async () => {
    try {
      await Voice.start('en-US'); // Start listening in English
      setIsListening(true);
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop(); // Stop listening
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  };

  const handleMicrophonePress = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Search for dishes and restaurants</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textbox}
          placeholder="Search for Food"
          value={food}
          placeholderTextColor={'#FA4A0C'}
          onChangeText={text => setFood(text)}
          onSubmitEditing={() => console.log('Search submitted')}
        />
        <Pressable style={styles.iconbox} onPress={handleMicrophonePress}>
          <Icon
            name="microphone"
            size={18}
            color={isListening ? 'green' : 'red'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 30,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginTop: 20,
  },
  textbox: {
    color: '#FA4A0C',
    borderColor: '#D6D6D6',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    paddingLeft: 18,
    paddingRight: 40,
  },
  iconbox: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
});
