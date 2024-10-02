import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');
const SecondPayment = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Addresses</Text>
      </View>
      <Text style={styles.text}>Saved Cards</Text>
      <View style={styles.touchbox}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate('CardDetails')}>
          <View style={styles.addbox}>
            <AntDesign name="plus" size={15} color={'red'} />
          </View>
          <Text style={styles.text2}>Add New Card</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Wallets</Text>
      <View style={{marginTop: 20}}>
        <View style={styles.paybox}>
          <View style={styles.itembox}>
            <Image
              source={require('../assets/paytm2.png')}
              style={styles.image2}
            />
            <Text style={styles.text3}>Paytm Wallet</Text>
          </View>
          <TouchableOpacity style={styles.addbox}>
            <AntDesign name="plus" size={15} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.paybox}>
          <View style={styles.itembox}>
            <Image
              source={require('../assets/pay2.png')}
              style={styles.image3}
            />
            <Text style={styles.text3}>AmazonPay</Text>
          </View>
          <TouchableOpacity style={styles.addbox}>
            <AntDesign name="plus" size={15} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.paybox}>
          <View style={styles.itembox}>
            <Image
              source={require('../assets/phonepe.png')}
              style={styles.image4}
            />
            <Text style={styles.text3}>PhonePe</Text>
          </View>
          <TouchableOpacity style={styles.addbox}>
            <AntDesign name="plus" size={15} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.paybox}>
          <View style={styles.itembox}>
            <Image
              source={require('../assets/mobik.png')}
              style={styles.image4}
            />
            <Text style={styles.text3}>Mobikwik</Text>
          </View>
          <TouchableOpacity style={styles.addbox}>
            <AntDesign name="plus" size={15} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SecondPayment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 20,
  },
  addbox: {
    width: 35,
    height: 29,
    borderWidth: 0.7,
    borderColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 20,
  },
  touchbox: {
    borderBottomWidth: 1,
    marginTop: 30,
    paddingBottom: 10,
    borderColor: '#D6D6D6',
  },
  image: {
    width: 13,
    height: 13,
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FA4A0C',
  },
  paybox: {
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  image2: {
    width: 32,
    height: 10,

    position: 'absolute',
  },
  text3: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginLeft: 90,
  },
  itembox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image3: {
    width: 32,
    height: 21,

    position: 'absolute',
  },
  image4: {
    width: 26,
    height: 26,

    position: 'absolute',
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 30,
  },
});
