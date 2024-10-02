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
const EditAddressScreen = () => {
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
          <AntDesign name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Addresses</Text>
      </View>
      <Text style={styles.text}>Saved Address</Text>
      <View style={styles.homecontainer}>
        <Image source={require('../assets/home.png')} style={styles.image} />
        <Text style={styles.text2}>Home</Text>
      </View>
      <View>
        <Text style={styles.textbox}>
          Kursoo Rajbagh, Srinagar, J&K, 190008
        </Text>
        <Text style={styles.textbox}>Ph.no: 7006352455</Text>
      </View>
      <View style={styles.editbox}>
        <TouchableOpacity>
          <Text style={styles.edittext}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.edittext}>DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.edittext}>SHARE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.homecontainer}>
        <Image source={require('../assets/house.png')} style={styles.image} />
        <Text style={styles.text2}>Work</Text>
      </View>
      <View>
        <Text style={styles.textbox}>
          Kursoo Rajbagh, Srinagar, J&K, 190008
        </Text>
        <Text style={styles.textbox}>Ph.no: 7006352455</Text>
      </View>
      <View style={styles.editbox}>
        <TouchableOpacity>
          <Text style={styles.edittext}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.edittext}>DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.edittext}>SHARE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
  },
  image: {
    width: 13.5,
    height: 15,
  },
  text2: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  homecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.2,
    marginBottom: 20,
    marginTop: 20,
  },
  textbox: {
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 30,
  },
  edittext: {
    color: '#FA4A0C',
    fontSize: 16,
    fontWeight: '400',
  },
  editbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginTop: 20,
    height: 40,
    borderBottomWidth: 0.5,
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 30,
  },
});
export default EditAddressScreen;
