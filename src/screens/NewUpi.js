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
import {CheckBox} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
const Newupi = () => {
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
            marginHorizontal: 'auto',
          }}>
          Add New UPI ID
        </Text>
      </View>
      <TextInput
        style={Styles.textbox}
        placeholder="Enter Your UPI ID"
        placeholderTextColor="#202020"
      />
      <View style={Styles.checkboxContainer}>
        <CheckBox
          checked={checked}
          onPress={() => setChecked(!checked)}
          checkedColor="#FA4A0C"
          uncheckedColor="red"
          textStyle={Styles.textStyle}
          iconType="material"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          size={15}
        />
        <Text style={{color: 'black', fontSize: 14, fontWeight: '300'}}>
          {' '}
          Securely save VPA for future use
        </Text>
      </View>
      <TouchableOpacity style={Styles.paybox}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '300'}}>
          Varify and Pay
        </Text>
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', margin: 30, marginHorizontal: 'auto'}}>
        <Image source={require('../assets/phonepy.png')} />
      </View>
      <View style={Styles.footer}>
        <Text style={{color: 'black', fontWeight: '400'}}>Powered By</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 16}}>UPI</Text>
          <Image
            source={require('../assets/icon1.png')}
            style={{width: 15, height: 15}}
          />
        </View>
        <Text style={{color: 'black', fontSize: 10}}>
          UNIFIED PAYMENTS INTERFACE
        </Text>
      </View>
    </View>
  );
};

export default Newupi;
const Styles = StyleSheet.create({
  textbox: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#6D6D6D',
    width: width * 0.8,
    marginHorizontal: 'auto',
    paddingLeft: 30,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 30,
    opacity: 0.5,
    height: 70,
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
  paybox: {
    width: 200,
    height: 40,
    backgroundColor: '#FA4A0C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 30,
  },
  footer: {
    top: height * 0.35,
    marginHorizontal: 'auto',
  },
});
