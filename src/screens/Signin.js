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
} from 'react-native';
import BASE_URI from '../../android/config.url';
import axios from 'axios';
const Signin = () => {
  const navigation3 = useNavigation();
  const navigation8 = useNavigation();
  const [phone_no1, setMobile] = useState('');
  const [Error, setError] = useState('');

  const savedotp = async () => {
    const Data = {phone_no: phone_no1};

    const response = axios({
      method: 'POST',
      url: `${BASE_URI}/api/user/userSendOtp`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: Data,
    }).then(
      response => {
        const result = response;
        console.log(result.data);
        navigation3.navigate('CodeScreen', Data);
      },
      err => {
        const error = err.response.data.message;
        console.log(error);
        if (error === 'Fill all fields') {
          return setError('Fill all fields');
        }
        if (error === 'User not found') {
          return setError('User not found');
        }
      },
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Image source={require('../assets/bowl.png')} style={styles.bowl} />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.text1}>SIGN IN</Text>

        <View style={styles.textbox}>
          <Text style={styles.text2}>Feast on convenience,</Text>
          <Text style={styles.text2}>
            Login to indulge in culinary delights!
          </Text>
        </View>
        <View style={{marginTop: 30, marginLeft: 16}}>
          <Text style={styles.name}>MOBILE</Text>
        </View>
        <TextInput
          style={styles.textinput}
          placeholder="ENTER YOUR MOBILE NUMBER"
          placeholderTextColor={'#D6D6D6'}
          keyboardType="numeric"
          value={phone_no1}
          onChangeText={text => {
            setMobile(text);
          }}
        />
        <Text style={{color: 'white'}}>{Error && Error}</Text>
        <View>
          <TouchableOpacity onPress={savedotp} style={styles.textcontainer}>
            <Text style={{color: 'white'}}> SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginbox}>
          <Text style={{color: 'white'}}>Or Continue with</Text>
          <View style={{marginLeft: 100, flexDirection: 'row'}}>
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
          <Text style={{color: 'white'}}>Didn't have account?</Text>
          <TouchableOpacity onPress={() => navigation8.navigate('Signup')}>
            <Text style={{color: '#FA4A0C'}}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Signin;
const styles = StyleSheet.create({
  bowl: {
    width: 230,
    height: 200,
    top: -40,
    left: 210,
  },
  inputcontainer: {
    height: 600,
    width: '100%',
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  text1: {
    color: 'white',
    marginTop: 10,
    marginLeft: '30%',
    fontSize: 40,
    fontWeight: '700',
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
  textinput: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 30,
    color: '#D6D6D6',
    marginLeft: 16,
    marginRight: 16,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  textcontainer: {
    height: 50,
    width: 200,
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '25%',
    marginTop: 50,
  },
  loginbox: {
    flexDirection: 'row',
    marginLeft: 16,
    marginTop: 25,
  },
  login: {
    flexDirection: 'row',
    margin: 16,
    marginTop: 100,
  },
});
