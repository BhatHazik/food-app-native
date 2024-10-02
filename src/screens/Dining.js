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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BASE_URI from '../../android/config.url';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/loader';

const {width, height} = Dimensions.get('window');

const Dining = () => {
  const [restautrants, setRestaurants] = useState([]);
  const [topRated, setToprated] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [emptyMessage, setEmptyMessage] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(null);
  const navigation = useNavigation();

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

      // navigation.navigate('LoadingPage');
    }
  };
  const toprated = async (latitude, longitude) => {
    console.log('ok', latitude, longitude);
    const token = await AsyncStorage.getItem('token');
    console.log('token saved');
    if (token) {
      await axios({
        method: 'GET',
        url: `${BASE_URI}/api/restaurant/topRated/${latitude}/${longitude}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }).then(
        res => {
          setToprated(res.data.data.slice(0, 8));
          console.log(res.data.data);
        },
        err => {
          console.log(err.response.data.message);
          if (
            err.response.data.message ===
            'Restaurants not found in your location with ratings above 4.0'
          ) {
            setEmptyMessage(
              `Restaurants not found in your location \n       with ratings above 4.0`,
            );
          }
        },
      );
    } else {
      console.log('Not authorized');
      // navigation.navigate('LoadingPage');
    }
  };

  const popular = async (latitude, longitude) => {
    console.log('ok', latitude, longitude);
    const token = await AsyncStorage.getItem('token');
    console.log('token saved');
    if (token) {
      await axios({
        method: 'GET',
        url: `${BASE_URI}/api/restaurant/popular/${latitude}/${longitude}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }).then(
        res => {
          setPopular(res.data.data.slice(0, 8));
          console.log(res.data.data);
        },
        err => {
          console.log(err.response.data.message);
        },
      );
    } else {
      console.log('Not authorized');
      // navigation.navigate('LoadingPage');
    }
  };

  const getRestaurantsWithLocation = async () => {
    // setLoading(true);
    Geolocation.getCurrentPosition(
      async position => {
        var latitude = position.coords.latitude;
        setLatitude(Latitude);
        const longitude = position.coords.longitude;
        setLongitude(Longitude);
        await getRestaurants(latitude, longitude);
        await toprated(latitude, longitude);
        await popular(latitude, longitude); // Call function to fetch restaurants with obtained location
        getAddressFromCoordinates(latitude, longitude);
        // setLoading(false);
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const accessToken = `pk.ea008d8c047df0626596d547069f4861`;
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`,
      );
      setAddress(
        response.data.address.road ||
          response.data.address.suburb + ' ' + response.data.address.postcode,
      );
      console.log(response.data.address);
    } catch (error) {
      console.error(error);
      setAddress('Error occured');
    }
  };

  useEffect(() => {
    getloacationpermission();
  }, []);

  const renderItem4 = ({item}) => (
    <TouchableOpacity style={Styles.itemcover}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text style={Styles.restaurantname}>Wasu Darbar</Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={Styles.timebox}>
        <View style={Styles.rating}>
          <Text style={{color: 'white'}}>4.0</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 12, height: 11}}
          />
        </View>
        <Text style={[Styles.text1, {color: 'black'}]}>20-25 min</Text>
      </View>
      <View style={{marginTop: 15, left: -15}}>
        <Text style={[Styles.text1, {color: 'black'}]}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem2 = ({item}) => (
    <TouchableOpacity
      style={Styles.itemcover}
      onPress={() => navigation.navigate('Restaurant')}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text style={Styles.restaurantname}>hazik Restaurant</Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={Styles.timebox}>
        <View style={item.avg_rating < 3 ? Styles.rating2 : Styles.rating}>
          <Text style={{color: 'white'}}>4.3</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 12, height: 11}}
          />
        </View>
        <Text style={[Styles.text1, {color: 'black'}]}>40-50 min</Text>
      </View>
      <View style={{marginTop: 15, left: -15}}>
        <Text style={[Styles.text1, {color: 'black'}]}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem3 = ({item}) => (
    <TouchableOpacity style={Styles.itemcover2}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text style={[Styles.restaurantname, {color: 'white'}]}>
        Basits Darbar
      </Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={Styles.timebox}>
        <View style={Styles.rating}>
          <Text style={{color: 'white'}}>3.0</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 12, height: 11}}
          />
        </View>
        <Text style={Styles.text1}>1-2 hr</Text>
      </View>
      <View style={{marginTop: 15, left: -15}}>
        <Text style={Styles.text1}>Wazwan, Fast food, Indian...</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={Styles.addresses}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Address')}
                  style={Styles.navigation}>
                  <Feather name="navigation" color={'red'} size={20} />
                </TouchableOpacity>
                {address && (
                  <>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: '700',
                        marginRight: 10,
                      }}>
                      {address && address}
                      {/* Kursu, Rajbagh{'\n'}
                190008 */}
                    </Text>
                    <AntDesign name="down" color={'white'} size={15} />
                  </>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  left: width * 0.8,
                }}
                onPress={() => navigation.navigate('ProfileScreen')}>
                <Image
                  source={require('../assets/logo.png')}
                  style={Styles.logo}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[Styles.text1, {fontStyle: 'italic'}]}>
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
              <AntDesign
                name="search1"
                color={'#FA4A0C'}
                size={20}
                style={Styles.searchbutton}
              />
            </View>
          </View>
        </View>
        {loading ? (
          <Loader style={Styles.Loader} />
        ) : (
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Biryani', 'Biryani');
                  }}>
                  <Image
                    source={require('../assets/Biryani.png')}
                    style={Styles.items}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Biryani', 'Burger');
                  }}>
                  <Image
                    source={require('../assets/Burger.png')}
                    style={Styles.items}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Biryani', 'shawarma');
                  }}>
                  <Image
                    source={require('../assets/shawarma.png')}
                    style={Styles.items}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Biryani', 'Rolls');
                  }}>
                  <Image
                    source={require('../assets/Rolls.png')}
                    style={Styles.items}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Biryani', 'pizza');
                  }}>
                  <Image
                    source={require('../assets/pizza.png')}
                    style={Styles.items}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Biryani', 'chinese');
                  }}>
                  <Image
                    source={require('../assets/chinese.png')}
                    style={Styles.items}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={Styles.viewcontainer}>
              <Text style={Styles.boldtext}>Nearest</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Nearest')}
                style={Styles.viewbox}>
                <Text style={Styles.viewtext}>View All</Text>
                <AntDesign name="down" size={15} color="black" />
              </TouchableOpacity>
            </View>

            <View style={Styles.restautrantbox}>
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={renderItem2}
                horizontal={true}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<></>}
              />
            </View>
            <View style={Styles.viewcontainer}>
              <Text style={Styles.boldtext}>Top Rated</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Toprated')}
                style={Styles.viewbox}>
                <Text style={Styles.viewtext}>View All</Text>
                <AntDesign name="down" size={15} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <View>
                {emptyMessage && (
                  <View
                    style={{
                      backgroundColor: 'grey',
                      width: width * 0.92,
                      height: height * 0.15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                      marginTop: 20,
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      {emptyMessage}
                    </Text>
                  </View>
                )}
                <View style={Styles.restautrantbox}>
                  <FlatList
                    data={[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                    ]}
                    renderItem={renderItem4}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
              <View style={Styles.viewcontainer}>
                <Text style={Styles.boldtext}>Popular Brands</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Popular')}
                  style={Styles.viewbox}>
                  <Text style={Styles.viewtext}>View All</Text>
                  <AntDesign name="down" size={15} color="black" />
                </TouchableOpacity>
              </View>
              <View style={Styles.bigcontainer}>
                <FlatList
                  data={[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  ]}
                  renderItem={renderItem3}
                  horizontal={true}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default Dining;
const Styles = StyleSheet.create({
  header: {
    height: height * 0.26,
    width: width * 1,
    backgroundColor: '#202020',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignSelf: 'center',
    marginTop: -16,
    padding: 16,
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
  },
  text1: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
  textbox: {
    color: '#FA4A0C',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingLeft: 18,
    position: 'relative',
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
    alignItems: 'center',
    marginVertical: 15,
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
  Loader: {
    position: 'static',
    top: '188px',
  },
  addresses: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'white',
    justifyContent: 'space-around',
    marginLeft: 16,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  navigation: {
    marginRight: 20,
  },
  searchbutton: {
    position: 'absolute',
    left: '90%',
    top: '25%',
  },
  viewtext: {
    fontSize: 16,
    fontWeight: '300',
    color: 'black',
    marginRight: 5,
  },
  boldtext: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  viewbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantname: {
    color: 'black',
    marginTop: 125,
    fontSize: 20,
    fontWeight: '400',
  },
  timebox: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
