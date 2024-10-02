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
const {width, height} = Dimensions.get('window');
const BankScreen = () => {
  const navigation = useNavigation();

  const renderbanks = () => (
    <View>
      <TouchableOpacity style={{margin: 12, marginLeft: 20}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
          Axis Bank
        </Text>
        <AntDesign
          name="right"
          color={'black'}
          size={15}
          style={{position: 'absolute', left: width * 0.7}}
        />
      </TouchableOpacity>
      <Text style={{color: 'black', width: width * 0.9, opacity: 0.2}}>
        --------------------------------------------------------------------------------------
      </Text>
    </View>
  );
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
          Select a Bank
        </Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '600',
          marginLeft: 25,
          marginTop: 30,
        }}>
        Popular Banks
      </Text>
      <View style={Styles.bankbox}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 8,
            marginBottom: 0,
          }}>
          <View style={Styles.addbutton}>
            <Image
              source={require('../assets/hdfc.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',

              marginHorizontal: 30,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              HDFC
            </Text>
          </View>
          <AntDesign
            name="right"
            color={'black'}
            size={15}
            style={{position: 'absolute', left: width * 0.7}}
          />
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 'auto',

            width: width * 0.9,
            opacity: 0.2,
          }}>
          <Text style={{color: 'black'}}>
            -------------------------------------------------------------------------------------
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 8,
            marginBottom: 0,
          }}>
          <View style={Styles.addbutton}>
            <Image
              source={require('../assets/icici.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',

              marginHorizontal: 30,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              ICICI
            </Text>
          </View>
          <AntDesign
            name="right"
            color={'black'}
            size={15}
            style={{position: 'absolute', left: width * 0.7}}
          />
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 'auto',

            width: width * 0.9,
            opacity: 0.2,
          }}>
          <Text style={{color: 'black'}}>
            -------------------------------------------------------------------------------------
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 8,
            marginBottom: 0,
          }}>
          <View style={Styles.addbutton}>
            <Image
              source={require('../assets/sbi.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',

              marginHorizontal: 30,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              SBI
            </Text>
          </View>
          <AntDesign
            name="right"
            color={'black'}
            size={15}
            style={{position: 'absolute', left: width * 0.7}}
          />
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 'auto',

            width: width * 0.9,
            opacity: 0.2,
          }}>
          <Text style={{color: 'black'}}>
            -------------------------------------------------------------------------------------
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 8,
            marginBottom: 0,
          }}>
          <View style={Styles.addbutton}>
            <Image
              source={require('../assets/axis.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',

              marginHorizontal: 30,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              AXIS
            </Text>
          </View>
          <AntDesign
            name="right"
            color={'black'}
            size={15}
            style={{position: 'absolute', left: width * 0.7}}
          />
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 'auto',

            width: width * 0.87,
            opacity: 0.2,
          }}>
          <Text style={{color: 'black'}}>
            -------------------------------------------------------------------------------------
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 8,
            marginBottom: 0,
          }}>
          <View style={Styles.addbutton}>
            <Image
              source={require('../assets/cap.png')}
              style={{width: 18, height: 3}}
            />
            <Image
              source={require('../assets/cit.png')}
              style={{width: 19, height: 10}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',

              marginHorizontal: 30,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              CITI
            </Text>
          </View>
          <AntDesign
            name="right"
            color={'black'}
            size={15}
            style={{position: 'absolute', left: width * 0.7}}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '600',
          marginLeft: 25,
          marginTop: 30,
          marginBottom: 10,
        }}>
        All Banks
      </Text>
      <View style={Styles.allbanks}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={renderbanks}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BankScreen;
const Styles = StyleSheet.create({
  bankbox: {
    width: width * 0.87,
    height: height * 0.38,
    borderWidth: 0.5,
    marginHorizontal: 'auto',
    borderRadius: 10,
    borderColor: '#6D6D6D',
    marginTop: 10,
  },
  addbutton: {
    width: 33,
    height: 31,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allbanks: {
    width: width * 0.87,
    height: height * 0.34,
    borderWidth: 0.5,
    marginHorizontal: 'auto',
    borderRadius: 10,
    borderColor: '#6D6D6D',
    paddingTop: 10,
  },
});
