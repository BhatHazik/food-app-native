import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const Search = () => {
  const [food, setfood] = useState('');
  const handleSubmit = () => {};
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Image
          source={require('../assets/Back.png')}
          style={{width: 20, height: 20}}
        />
      </View>
      <View style={styles.inputbox}>
        <TextInput
          style={styles.textbox}
          placeholder="Search for Food"
          value={food}
          placeholderTextColor={'#FA4A0C'}
          onChangeText={text => setfood(text)}
          onSubmitEditing={handleSubmit}
        />
      </View>
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  textbox: {
    color: '#FA4A0C',
    borderColor: '#D6D6D6',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingLeft: 18,
  },
  inputbox: {
    width: '100%',
  },
  arrow: {
    margin: 30,
  },
});
