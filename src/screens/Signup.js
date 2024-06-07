import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import BASE_URI from '../../android/config.url';
import axios from 'axios';
const {width, height} = Dimensions.get('window');
const Signup = () => {
  const navigation = useNavigation();
  const navigation2 = useNavigation();
  const [phone_no, setMobile] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Error, setError] = useState('');

  const loginOtp = async () => {
    const Data = {phone_no: phone_no, username: name, email: email};

    axios({
      method: 'POST',
      url: `${BASE_URI}/api/user/createUser`,
      data: Data,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      response => {
        const result = response.data;
        console.log(result);
        navigation2.navigate('CodeScreen', Data);
      },
      err => {
        const error = err.response.data.message;
        console.log(error);
        if (error === 'fill all feilds') {
          return setError('fill all feilds');
        }
        if (error === 'Phone number or email already exists') {
          return setError('Phone number or email already exists');
        }
      },
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image source={require('../assets/bowl.png')} style={styles.bowl} />
      <View style={styles.inputcontainer}>
        <Text style={styles.text1}>SIGN UP</Text>
        <Text style={styles.name}>Name</Text>
        <TextInput
          style={styles.textinput}
          placeholder="ENTER YOUR NAME"
          placeholderTextColor={'#D6D6D6'}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
        <View style={{marginTop: height * 0.02}}>
          <Text style={styles.name}>EMAIL</Text>
        </View>
        <TextInput
          style={styles.textinput}
          placeholder="ENTER YOUR EMAIL"
          placeholderTextColor={'#D6D6D6'}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <View style={{marginTop: height * 0.02}}>
          <Text style={styles.name}>MOBILE</Text>
        </View>
        <TextInput
          style={styles.textinput}
          placeholder="ENTER YOUR MOBILE NUMBER"
          placeholderTextColor={'#D6D6D6'}
          keyboardType="numeric"
          value={phone_no}
          onChangeText={text => {
            setMobile(text);
          }}
        />
        <Text style={{color: 'white'}}>{Error && Error}</Text>
        <TouchableOpacity onPress={loginOtp} style={styles.textcontainer}>
          <Text style={{color: 'white'}}> SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.loginbox}>
          <Text style={{color: 'white'}}>Or Continue with</Text>
          <View style={{marginLeft: 125, flexDirection: 'row'}}>
            <Image
              source={require('../assets/icon.png')}
              style={{height: 20, width: 20}}
            />
            <TouchableOpacity>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.login}>
          <Text style={{color: 'white'}}>Already have account?</Text>
          <TouchableOpacity onPress={() => navigation2.navigate('Signin')}>
            <Text style={{color: '#FA4A0C'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  bowl: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: 'contain',
    position: 'absolute',
    top: '-5%',
    right: '-15%',
  },
  inputcontainer: {
    height: height * 0.7,
    width: '100%',
    backgroundColor: 'black',
    top: '30%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  text1: {
    color: 'white',
    marginTop: 10,
    marginLeft: '30%',
    fontSize: 40,
    fontWeight: '700',
  },
  name: {
    color: 'white',
    fontSize: height * 0.025,
    fontWeight: '300',
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: height * 0.01,
    paddingLeft: 30,
    color: '#D6D6D6',
  },

  loginbox: {
    flexDirection: 'row',

    marginTop: height * 0.04,
  },
  login: {
    flexDirection: 'row',

    marginTop: height * 0.04,
  },
  textcontainer: {
    height: height * 0.06,
    width: 200,
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '25%',
    marginTop: height * 0.02,
  },
});
