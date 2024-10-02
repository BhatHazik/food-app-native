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
const RefundScreen = () => {
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
      <View style={styles.textbox}>
        <Text style={styles.text1}>
          All the refunds will be directed {'\n'} to the original{' '}
          <Text style={styles.text2}>Payment Source</Text>{' '}
        </Text>
      </View>
      <View style={styles.refundbox}>
        <Text style={styles.text1}>You don’t have any past refund</Text>
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
  textbox: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    marginTop: 30,
  },
  text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 30,
  },
  text2: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  refundbox: {
    borderBottomWidth: 1,
    marginHorizontal: 'auto',
    marginTop: 60,
    width: width * 0.9,
    alignItems: 'center',
    paddingBottom: 20,
    borderColor: '#D6D6D6',
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 30,
  },
});
export default RefundScreen;
