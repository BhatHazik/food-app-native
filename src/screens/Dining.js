import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {EncryptedStorage} from 'react-native-encrypted-storage';
import {
  Alert,
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  Button,
  Dimensions,
} from 'react-native';

import BASE_URI from '../../android/config.url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const Dining = () => {
  const [restautrants, setRestaurants] = useState([]);

  const [food, setfood] = useState('');
  const navigation = useNavigation();

  // const data = ['', '', '', '', '', ''];
  // const [location, setLocation] = useState({latitude: null, longitude: null});
  const getloacationpermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Need to give access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission granted');
        getRestaurantsWithLocation(); // Call function to fetch restaurants after permission is granted
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getRestaurants = async (latitude, longitude) => {
    console.log('ok', latitude, longitude);
    const token = await AsyncStorage.getItem('token');
    console.log('token saved');
    if (token) {
      await axios({
        method: 'GET',
        url: `${BASE_URI}/api/restaurant/${latitude}/${longitude}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }).then(
        res => {
          setRestaurants(res.data.data.slice(0, 8));
          console.log(res.data);
        },
        err => {
          console.log(err);
        },
      );
    } else {
      console.log('Not authorized');
      navigation.navigate('LoadingPage');
    }
  };

  const getRestaurantsWithLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        var latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getRestaurants(latitude, longitude); // Call function to fetch restaurants with obtained location
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    getloacationpermission();
  }, []);

  // const renderItem = ({item}) => (
  //   <View style={Styles.items}>
  //     <TouchableOpacity
  //       onPress={() => {
  //         setfood('biryani'), navigation.navigate('Biryani', food,);
  //       }}>
  //       <Image source={item} style={{height: 133, width: 100}} />
  //     </TouchableOpacity>
  //   </View>
  // );
  const renderItem2 = ({item}) => (
    <View style={Styles.itemcover}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text
        style={{
          color: 'black',
          marginTop: 125,
          fontSize: 20,
          fontWeight: '400',
        }}>
        {item.restaurant_name}
      </Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={{flexDirection: 'row', marginTop: 10, left: -40}}>
        <View style={item.avg_rating < 3 ? Styles.rating2 : Styles.rating}>
          <Text style={{color: 'white'}}>{item.avg_rating}</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 12, height: 11}}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: '300'}}>
          {item.delivery_time}
        </Text>
      </View>
      <View style={{marginTop: 15, left: -15}}>
        <Text style={{fontSize: 16, fontWeight: '300'}}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </View>
  );
  const renderItem4 = ({item}) => (
    <View style={Styles.itemcover}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text
        style={{
          color: 'black',
          marginTop: 125,
          fontSize: 20,
          fontWeight: '400',
        }}>
        Karim's Restaurant
      </Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={{flexDirection: 'row', marginTop: 10, left: -40}}>
        <View style={Styles.rating}>
          <Text style={{color: 'white'}}>4.4</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 12, height: 11}}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: '300'}}>10-25 mins</Text>
      </View>
      <View style={{marginTop: 15, left: -15}}>
        <Text style={{fontSize: 16, fontWeight: '300'}}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </View>
  );
  const renderItem3 = ({item}) => (
    <View style={Styles.itemcover2}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text
        style={{
          color: 'white',
          marginTop: 125,
          fontSize: 20,
          fontWeight: '400',
        }}>
        Karim's Restaurant
      </Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={{flexDirection: 'row', marginTop: 10, left: -40}}>
        <View style={Styles.rating}>
          <Text style={{color: 'white'}}>4.4</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 12, height: 11}}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: '300', color: 'white'}}>
          10-25 mins
        </Text>
      </View>
      <View style={{marginTop: 15, left: -15}}>
        <Text style={{fontSize: 16, fontWeight: '300', color: 'white'}}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </View>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={Styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 20, marginLeft: 40}}>
              <Image
                source={require('../assets/nav.png')}
                style={{height: 16, width: 21}}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: 'white',
                  marginTop: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Kursu, Rajbagh{'\n'}
                190008
              </Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              style={Styles.arrow}
            />
            <TouchableOpacity>
              <Image
                source={require('../assets/logo.png')}
                style={Styles.logo}
              />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={Styles.text1}>
              Embark on a culinary adventure {'\n'}
              Let's find your next Flavor Sensation!
            </Text>
            <View style={Styles.textcontainer}>
              <TextInput
                style={Styles.textbox}
                placeholder="Search for Food"
                placeholderTextColor={'#FA4A0C'}
                onPress={() => navigation.navigate('Search')}
              />
            </View>
          </View>
        </View>
        <View style={{marginRight: 16, marginLeft: 16}}>
          {/* <FlatList
            data={images}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          /> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setfood('Biryani'), navigation.navigate('Biryani', food);
                }}>
                <Image
                  source={require('../assets/Biryani.png')}
                  style={Styles.items}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setfood('Burger'), navigation.navigate('Biryani', food);
                }}>
                <Image
                  source={require('../assets/Burger.png')}
                  style={Styles.items}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setfood('shawarma'), navigation.navigate('Biryani', food);
                }}>
                <Image
                  source={require('../assets/shawarma.png')}
                  style={Styles.items}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setfood('Rolls'), navigation.navigate('Biryani', food);
                }}>
                <Image
                  source={require('../assets/Rolls.png')}
                  style={Styles.items}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setfood('pizza'), navigation.navigate('Biryani', food);
                }}>
                <Image
                  source={require('../assets/pizza.png')}
                  style={Styles.items}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setfood('chinese'), navigation.navigate('Biryani', food);
                }}>
                <Image
                  source={require('../assets/chinese.png')}
                  style={Styles.items}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={Styles.viewcontainer}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
              Nearest
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Nearest')}
              style={{flexDirection: 'row', marginTop: 2}}>
              <Text style={{fontSize: 16, fontWeight: '300'}}>View All</Text>
              <Image
                source={require('../assets/arrow2.png')}
                style={Styles.arrow2}
              />
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={restautrants}
              renderItem={renderItem2}
              horizontal={true}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={Styles.viewcontainer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginTop: 20,
                color: 'black',
              }}>
              Top Rated
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Toprated')}
              style={{flexDirection: 'row', marginTop: 22}}>
              <Text style={{fontSize: 16, fontWeight: '300'}}>View All</Text>
              <Image
                source={require('../assets/arrow2.png')}
                style={Styles.arrow2}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem4}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={Styles.viewcontainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: 20,
                  marginBottom: 5,
                  color: 'black',
                }}>
                Popular Brands
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Popular')}
                style={{flexDirection: 'row', marginTop: 22, marginBottom: 5}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>View All</Text>
                <Image
                  source={require('../assets/arrow2.png')}
                  style={Styles.arrow2}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.bigcontainer}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem3}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Dining;
const Styles = StyleSheet.create({
  header: {
    height: 200,
    width: '100%',
    backgroundColor: '#202020',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  arrow: {
    height: 6,
    width: 10,
    marginTop: 18,
    marginLeft: 10,
  },
  logo: {
    height: 50,
    width: 50,
    marginLeft: 110,
    marginTop: 12,
  },
  text1: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  textbox: {
    color: '#FA4A0C',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingLeft: 18,
  },
  textcontainer: {
    marginTop: 25,
    width: '70%',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  items: {
    height: height * 0.25,
    width: width * 0.25,
    resizeMode: 'contain',
    marginRight: 30,
  },
  images: {
    width: 117,
    height: 92,
  },
  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: -7,
  },
  arrow2: {
    height: 6,
    width: 11,
    margin: 8,
  },
  itemcover: {
    height: 250,
    width: 260,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D6D6D6',
    marginTop: 35,
    alignItems: 'center',
    position: 'relative',
    marginRight: 25,
  },
  itemcover2: {
    height: 250,
    width: 260,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 35,
    alignItems: 'center',
    position: 'relative',
    marginRight: 25,
    backgroundColor: '#202020',
  },
  bigcontainer: {
    height: 300,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingLeft: 10,
  },
  coverimage: {
    width: 195,
    height: 154,
    position: 'absolute',
    top: -30,
  },
  rating: {
    backgroundColor: '#60B246',
    width: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  rating2: {
    backgroundColor: 'red',
    width: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  opacity: {
    backgroundColor: 'white',
  },
});
