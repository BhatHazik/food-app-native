import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {Styles} from './Address';

export const Address = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={Styles.header}>
        <View>
          <View style={Styles.title}>
            <TouchableOpacity
              style={Styles.arrow}
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/Back.png')}
                style={{width: 22, height: 20}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '400',
                marginTop: 25,
              }}>
              Search or Add new address
            </Text>
          </View>
          <TextInput
            style={Styles.input}
            placeholder="Search for area or street "
            placeholderTextColor={'#FA4A0C'}
          />
        </View>
      </View>
      <View style={Styles.addressbox}>
        <View style={Styles.box}>
          <TouchableOpacity>
            <Image
              source={require('../assets/plus.png')}
              style={{height: 13, width: 13}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 300, color: 'black'}}>
            Add Address
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/render.png')}
              style={{height: 12, width: 7}}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.box}>
          <TouchableOpacity>
            <Image
              source={require('../assets/nav2.png')}
              style={{height: 12, width: 16}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: '300', color: 'black'}}>
            Use Current Location
          </Text>
        </View>
        <View style={{width: width * 1}}>
          <Text
            style={{
              marginTop: 30,
              color: 'black',
              fontSize: 20,
              fontWeight: '300',
            }}>
            ...................... Saved Addresses ...................
          </Text>
        </View>
      </View>
      <View style={Styles.addressbox}>
        <View style={Styles.box2}>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Image
              source={require('../assets/home.png')}
              style={{height: 16, width: 17, marginLeft: 5}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>
              Home
            </Text>
            <Text style={{fontSize: 10, color: 'black'}}>
              {' '}
              Flat 102, Kursoo Rajbagh, Srinagar
            </Text>
          </View>
        </View>
        <View style={Styles.box2}>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Image
              source={require('../assets/house.png')}
              style={{height: 16, width: 17, marginLeft: 5}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>
              Work
            </Text>
            <Text style={{fontSize: 10, color: 'black'}}>
              {' '}
              Flat 102, Kursoo Rajbagh, Srinagar
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
