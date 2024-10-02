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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');
const ProfileScreen = () => {
  const {name, phone} = useSelector(state => state.cart);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: width * 0.9,
          height: 100,
          borderBottomWidth: 0.5,
          marginHorizontal: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 24, fontWeight: '400'}}>
            {name}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              opacity: 0.5,
            }}>
            {phone}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              opacity: 0.5,
            }}>
            waseem321@gmail.com
          </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', left: width * 0.65}}
          onPress={() => navigation.navigate('EditScreen')}>
          <Text style={{color: '#FA4A0C', fontSize: 20, fontWeight: '400'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.08,
          borderBottomWidth: 0.5,
          marginHorizontal: 'auto',

          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('MyAccountScreen')}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '300'}}>
          My Account
        </Text>
        <AntDesign
          name="right"
          color={'black'}
          size={15}
          style={{position: 'absolute', left: width * 0.8}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.08,
          borderBottomWidth: 0.5,
          marginHorizontal: 'auto',

          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('SecondPayment')}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '300'}}>
          Payments
        </Text>
        <AntDesign
          name="right"
          color={'black'}
          size={15}
          style={{position: 'absolute', left: width * 0.8}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.08,
          borderBottomWidth: 0.5,
          marginHorizontal: 'auto',

          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('EditAddressScreen')}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '300'}}>
          Addresses
        </Text>
        <AntDesign
          name="right"
          color={'black'}
          size={15}
          style={{position: 'absolute', left: width * 0.8}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.08,
          borderBottomWidth: 0.5,
          marginHorizontal: 'auto',

          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('RefundScreen')}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '300'}}>
          Refunds
        </Text>
        <AntDesign
          name="right"
          color={'black'}
          size={15}
          style={{position: 'absolute', left: width * 0.8}}
        />
      </TouchableOpacity>
      <View style={Styles.text}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '400'}}>
          Past Orders
        </Text>
      </View>
      <View style={Styles.orderbox}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '400'}}>
            Karim's
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
              opacity: 0.5,
            }}>
            Rajbagh,Srinagar
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
              opacity: 0.5,
            }}>
            Rs.549
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            left: width * 0.6,
            alignItems: 'center',
            top: 20,
            width: 90,

            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '300',
              opacity: 0.5,
            }}>
            Dilivered
          </Text>
          <Image
            source={require('../assets/success.png')}
            style={{width: 16, height: 16}}
          />
        </View>
      </View>
      <View style={Styles.timebox}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: '300'}}>
          Pizza (1), Rista (3), Mint Mojito (1)
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '300',
            lineHeight: 40,
          }}>
          May 27, 10:30 PM
        </Text>
      </View>
      <View style={Styles.buttonsbox}>
        <TouchableOpacity style={Styles.reorder}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
            Reorder
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.ratefood}>
          <Text style={{color: '#202020', fontSize: 12, fontWeight: '400'}}>
            Rate Food
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileScreen;
const Styles = StyleSheet.create({
  text: {
    width: width * 0.9,
    height: height * 0.07,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginTop: 30,
    marginHorizontal: 'auto',
    borderColor: '#D6D6D6',
  },
  orderbox: {
    width: width * 0.9,
    height: height * 0.12,
    marginHorizontal: 'auto',
    marginTop: 10,
    flexDirection: 'row',
  },
  timebox: {
    width: width * 0.9,
    marginHorizontal: 'auto',
    marginTop: 10,
  },
  reorder: {
    width: 110,
    height: 25,
    backgroundColor: '#FA4A0C',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratefood: {
    width: 110,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  buttonsbox: {
    width: width * 0.9,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: height * 0.03,
  },
});
