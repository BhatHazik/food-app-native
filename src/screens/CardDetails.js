import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const CardDetails = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow5.png')}
            style={{height: 20, width: 24}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '400',
            marginLeft: 30,
          }}>
          Add New Card
        </Text>
      </View>
      <TextInput
        style={Styles.textbox}
        placeholder="Enter Card Number"
        placeholderTextColor="#202020"
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 'auto',
          width: width * 0.95,

          marginHorizontal: 'auto',
        }}>
        <TextInput
          style={Styles.text2}
          placeholder="Valid (MM/YY)"
          placeholderTextColor="#202020"
        />
        <TextInput
          style={Styles.text3}
          placeholder="CVV"
          placeholderTextColor="#202020"
        />
      </View>
      <TextInput
        style={Styles.textbox}
        placeholder="Name on Card"
        placeholderTextColor="#202020"
      />
      <TextInput
        style={Styles.textbox}
        placeholder="Nickname (For Easy Identification)"
        placeholderTextColor="#202020"
      />

      <TouchableOpacity style={Styles.cardbox}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
          Save Card
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetails;
const Styles = StyleSheet.create({
  textbox: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#6D6D6D',
    width: width * 0.95,
    marginHorizontal: 'auto',
    paddingLeft: 30,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 30,
    opacity: 0.5,
    height: 70,
  },
  text2: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#6D6D6D',
    marginTop: 30,
    height: 70,
    width: width * 0.55,
    paddingLeft: 30,
    opacity: 0.5,
  },
  text3: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#6D6D6D',
    marginTop: 30,
    height: 70,
    width: width * 0.33,
    paddingLeft: 30,
    marginLeft: 25,
    opacity: 0.5,
  },
  textStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '300',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    width: width * 0.9,
    marginHorizontal: 'auto',
  },
  cardbox: {
    width: width * 0.6,
    height: 50,
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 'auto',
    top: height * 0.25,
  },
});
