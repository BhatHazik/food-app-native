import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Buttons,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
const Address = Latitude => {
  console.log(Latitude);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={Styles.header}>
        <View>
          <View style={Styles.title}>
            <TouchableOpacity
              style={Styles.arrow}
              onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" color={'white'} size={30} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '400',
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
        <TouchableOpacity
          style={Styles.box}
          onPress={() => navigation.navigate('MapScreen')}>
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
        </TouchableOpacity>
        <TouchableOpacity style={Styles.box}>
          <Image
            source={require('../assets/nav2.png')}
            style={{height: 13, width: 17}}
          />

          <Text style={{fontSize: 20, fontWeight: '300', color: 'black'}}>
            Use Current Location
          </Text>
        </TouchableOpacity>
        <View style={{width: width * 1}}>
          <Text
            style={{
              marginTop: 30,
              color: 'black',
              fontSize: 20,
              fontWeight: '300',
              marginLeft: 35,
              opacity: 0.5,
            }}>
            .................. Saved Addresses ................
          </Text>
        </View>
      </View>
      <View style={Styles.addressbox}>
        <TouchableOpacity style={Styles.box2}>
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
        </TouchableOpacity>
        <TouchableOpacity style={Styles.box2}>
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Address;
const Styles = StyleSheet.create({
  header: {
    width: '100%',
    height: height * 0.2,
    backgroundColor: '#202020',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    margin: 30,
  },
  input: {
    color: '#FA4A0C',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingLeft: 18,
    width: width * 0.8,
    marginLeft: width * 0.1,
  },
  addressbox: {
    width: width * 0.7,
    height: height * 0.2,
    borderWidth: 2,
    borderColor: '#D6D6D6',
    marginTop: height * 0.1,
    marginLeft: width * 0.15,
    alignItems: 'center',
    borderRadius: 10,
  },
  inputbox: {
    width: width * 0.4,
  },
  box: {
    width: width * 0.6,
    height: height * 0.05,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginVertical: 16,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box2: {
    width: width * 0.6,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    paddingleft: 10,
  },
});
