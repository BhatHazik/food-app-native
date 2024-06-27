import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const Restaurant = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/arrow5.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../assets/heart.png')}
              style={{height: 23, width: 26, marginRight: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/share.png')}
              style={{height: 22, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.boxcontainer}>
        <Text style={{color: 'white'}}>KARIM</Text>
        <Text style={{color: 'white'}}>Fast Food, Wazwan</Text>
        <Text style={{color: 'white'}}>
          ..........................................
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.rating}>
            <Text style={{color: 'white'}}>4.0</Text>
            <Image
              source={require('../assets/star.png')}
              style={{width: 12, height: 11}}
            />
          </View>
          <Text style={{color: 'white'}}>1K+ ratings</Text>
        </View>
      </View>
    </View>
  );
};
export default Restaurant;
const Styles = StyleSheet.create({
  boxcontainer: {
    height: height * 0.25,
    width: width * 0.92,
    backgroundColor: 'black',
    marginHorizontal: 'auto',
    borderRadius: 30,
    alignItems: 'center',
  },
  rating: {
    backgroundColor: '#60B246',
    width: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
});
