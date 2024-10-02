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
import Icon from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
const PaymentScreen = () => {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState('');
  const handleCashOnDeliveryPress = () => {
    if (selectedPayment === 'cashOnDelivery') {
      setSelectedPayment('');
    } else {
      setSelectedPayment('cashOnDelivery');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 30}}>
      <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '400',
            marginHorizontal: 'auto',
          }}>
          Payment Options
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 20}}>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>
            2 items - Total: Rs 294
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <Image
              source={require('../assets/dumbell.png')}
              style={{width: 7, height: 33, top: 2}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 10,
                  fontWeight: '400',
                  marginBottom: 10,
                }}>
                Cafe Ertugrul | Delivery in 35-40 mins
              </Text>
              <Text style={{color: 'black', fontSize: 10, fontWeight: '400'}}>
                {' '}
                Work | Kursu, Rajbagh Srinagar 190008
              </Text>
            </View>
          </View>
        </View>
        <Text style={{color: 'black', marginHorizontal: 'auto'}}>
          ...............................................................................................
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            margin: 20,
          }}>
          Preferred Payment
        </Text>
        <View style={Styles.paymentbox}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/googlepay.png')}
              style={{width: 40, height: 16, top: 6}}
            />
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>
                Google Pay
              </Text>
              <Text style={{fontSize: 10, fontWeight: '400', color: 'black'}}>
                Upto Rs250 cashback on RuPay {'\n'} CC on UPI Transactions above
                Rs 200
              </Text>
            </View>
            <View style={Styles.tick}>
              <AntDesign name="check" color={'white'} size={10} />
            </View>
          </View>
          <TouchableOpacity style={Styles.paybutton}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
              PAY VIA GOOGLEPAY
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            margin: 10,
            marginLeft: 20,
          }}>
          Pay by any UPI App
        </Text>
        <View style={[Styles.addmethod, {borderWidth: 1}]}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('Newupi')}>
            <View style={Styles.addbutton}>
              <Image
                source={require('../assets/plus.png')}
                style={{width: 13, height: 13}}
              />
            </View>
            <View style={Styles.textbox}>
              <Text style={Styles.text}>Add New UPI ID</Text>
              <Text style={Styles.smalltext}>Add Registered UPI ID</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            margin: 10,
            marginLeft: 20,
          }}>
          Credit & Debit Cards
        </Text>
        <View style={[Styles.addmethod, {borderWidth: 1}]}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('NewCard')}>
            <View style={Styles.addbutton}>
              <Image
                source={require('../assets/plus.png')}
                style={{width: 13, height: 13}}
              />
            </View>
            <View style={Styles.textbox}>
              <Text style={Styles.text}>Add New Card</Text>
              <Text style={Styles.smalltext}>Save and pay via Cards</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            margin: 10,
            marginLeft: 20,
          }}>
          More Payment options
        </Text>
        <View style={Styles.paymentoptions}>
          <View style={[Styles.paymentoption]}>
            <TouchableOpacity style={Styles.optionbox}>
              <View style={Styles.addbutton}>
                <AntDesign name="wallet" size={15} color={'#000000'} />
              </View>
              <View style={Styles.textbox}>
                <Text style={Styles.text}>Wallets</Text>
                <Text style={Styles.smalltext}>
                  Paytm, PhonePe, Amazon Pay & more
                </Text>
              </View>
              <AntDesign
                name="right"
                color={'black'}
                size={15}
                style={Styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[Styles.paymentoption]}>
            <TouchableOpacity style={Styles.optionbox}>
              <View style={Styles.addbutton}>
                <AntDesign name="bank" size={15} color={'#000000'} />
              </View>
              <View style={Styles.textbox}>
                <Text style={Styles.text}>Netbanking</Text>
                <Text style={Styles.smalltext}>Select from List of Banks</Text>
              </View>
              <AntDesign
                name="right"
                color={'black'}
                size={15}
                style={Styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[Styles.paymentoption]}>
            <TouchableOpacity
              style={Styles.optionbox}
              onPress={handleCashOnDeliveryPress}>
              <View style={Styles.addbutton}>
                <AntDesign name="wallet" size={15} color={'#000000'} />
              </View>
              <View style={Styles.textbox}>
                <Text style={Styles.text}>Cash On Delivery(Cash/UPI)</Text>
                <Text style={Styles.smalltext}>
                  Pay Cash to delivery partner or ask {'\n'} for QR code to pay
                  via UPI
                </Text>
              </View>
              <View style={Styles.radiocircle}>
                {selectedPayment === 'cashOnDelivery' && (
                  <View style={Styles.radiobutton}></View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PaymentScreen;
const Styles = StyleSheet.create({
  paymentbox: {
    width: width * 0.9,
    height: height * 0.22,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginHorizontal: 'auto',
    borderRadius: 10,

    padding: 20,
  },
  tick: {
    width: 20,
    height: 20,
    backgroundColor: '#60B246',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: width * 0.7,
    top: height * 0.02,
  },
  paybutton: {
    width: width * 0.6,
    height: 40,
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 'auto',
  },
  addmethod: {
    width: width * 0.9,
    height: 65,

    marginHorizontal: 'auto',
    borderRadius: 10,
    borderColor: '#D6D6D6',
    justifyContent: 'center',
    paddingLeft: 30,
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
  paymentoptions: {
    width: width * 0.9,
    height: height * 0.29,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginHorizontal: 'auto',
    borderRadius: 10,
  },
  radiocircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderColor: '#60B246',
    left: width * 0.7,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  radiobutton: {
    width: 10,
    height: 10,

    borderRadius: 10,
    backgroundColor: '#60B246',
  },
  bankbutton: {},
  text: {
    color: '#FA4A0C',
    fontSize: 14,
  },
  smalltext: {
    color: 'black',
    fontSize: 8,
  },
  paymentoption: {
    width: width * 0.9,
    height: 65,
    borderBottomWidth: 0.5,
    marginHorizontal: 'auto',
    borderStyle: 'dashed',
    borderColor: '#D6D6D6',
    justifyContent: 'center',
    paddingLeft: 30,
    borderColor: '#6D6D6D',
  },
  optionbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textbox: {
    justifyContent: 'center',
    marginLeft: 30,
  },
  icon: {
    position: 'absolute',
    left: width * 0.7,
  },
});
