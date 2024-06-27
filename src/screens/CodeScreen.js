import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {EncryptedStorage} from 'react-native-encrypted-storage';

import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import BASE_URI from '../../android/config.url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const CodeScreen = Data => {
  const navigation4 = useNavigation();
  const [otp, setOtp] = useState('');
  const [Error, setError] = useState('');
  const phone_no1 = Data.route.params.phone_no;
  const name1 = Data.route.params.username;
  const email1 = Data.route.params.email;

  const verifySinUp = async () => {
    const Data = {givenOTP: otp};

    axios({
      method: 'POST',
      url: `${BASE_URI}/api/user/userSignUp/${phone_no1}/${name1}/${email1}`,
      data: Data,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      async response => {
        const result = response.data;
        console.log(result);
        const token = result.token;

        try {
          await AsyncStorage.setItem('token', token);

          navigation4.navigate('Dashboard');
        } catch (error) {
          console.log('Error saving token:', error);
        }
        navigation4.navigate('Dashboard');
      },
      err => {
        const error = err.response.data.message;
        console.log(error);
        if (error === 'Fill all fields') {
          return setError('Fill all fields');
        }
        if (error === 'Phone number or email already exists') {
          return setError('Phone number or email already exists');
        }
        if (error === 'Invalid OTP') {
          return setError('Invalid OTP');
        }
      },
    );
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View>
          <Image source={require('../assets/bowl.png')} style={styles.bowl} />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.text1}>Verify Code</Text>
          <View style={styles.textbox}>
            <Text style={styles.text2}>OTP sent! </Text>
            <Text style={styles.text2}> Secure your taste journey,</Text>
            <Text style={styles.text2}>one code at a time!</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 20, marginTop: 40}}>
            <OtpInput
              numberOfDigits={4}
              onFilled={text => setOtp(text)}
              theme={{
                pinCodeTextStyle: styles.textPin,
                pinCodeContainerStyle: styles.container,
              }}
            />
          </View>
          <Text style={{color: 'white'}}>{Error && Error}</Text>

          <View style={{marginLeft: 16, flexDirection: 'row'}}>
            <Text style={styles.timer}>Didn’t get the code? Resend in:</Text>
            <Text style={{color: '#FA4A0C'}}>0:59</Text>
          </View>
          <TouchableOpacity style={styles.textcontainer} onPress={verifySinUp}>
            <Text style={{color: 'white'}}> CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default CodeScreen;
const styles = StyleSheet.create({
  bowl: {
    width: 230,
    height: 200,
    top: -40,
    left: 210,
  },
  container: {
    marginLeft: 15,
    backgroundColor: 'white',
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  inputcontainer: {
    height: 600,
    width: '100%',
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  textPin: {
    color: '#FA4A0C',
  },
  text1: {
    color: 'white',
    marginTop: 10,
    marginLeft: '25%',
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
  },
  text2: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
  },
  textbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  digit: {
    color: '#FA4A0C',
    fontSize: 40,
    fontFamily: '400',
  },
  timer: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
  textcontainer: {
    height: height * 0.06,
    width: 200,
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '25%',
    marginTop: 50,
  },
});
