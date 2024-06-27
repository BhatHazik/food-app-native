import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BASE_URI from '../../android/config.url';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Loader from '../components/loader';

const Toprated = () => {
  const [restautrants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRestaurantsWithLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      async position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        await mapFunction(latitude, longitude);
        setLoading(false);
        // Call function to fetch restaurants with obtained location
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const mapFunction = async (latitude, longitude) => {
    const token = await AsyncStorage.getItem('token');
    await axios({
      method: 'GET',
      url: `${BASE_URI}/api/restaurant/topRated/${latitude}/${longitude}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(
      res => {
        console.log(res.data);
        setRestaurants(res.data.data);
        console.log(restautrants);
      },
      err => {
        console.log(err.response.data.message);
      },
    );
  };

  useEffect(() => {
    getRestaurantsWithLocation();
  }, []);
  const render = ({item}) => (
    <View style={Styles.itemcover}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text
        style={{
          color: 'black',
          marginTop: 70,
          fontSize: 11,
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
        <View style={Styles.rating}>
          <Text style={{color: 'white', fontSize: 7}}>{item.avg_rating}</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 7, height: 6}}
          />
        </View>
        <Text style={{fontSize: 11, fontWeight: '300', color: 'black'}}>
          {item.delivery_time}
        </Text>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 11, fontWeight: '300'}}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          marginTop: 20,
          marginLeft: 16,
          color: 'black',
        }}>
        Top Rated
      </Text>
      {loading ? (
        <Loader />
      ) : (
        <>
          <View>
            <FlatList
              numColumns={2}
              data={restautrants}
              renderItem={render}
              contentContainerStyle={Styles.listContent}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </View>
  );
};
export default Toprated;
const Styles = StyleSheet.create({
  itemcover: {
    height: 180,
    width: 157,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D6D6D6',
    marginTop: 40,
    alignItems: 'center',
    position: 'relative',
    marginRight: 25,
    marginLeft: 16,
  },
  coverimage: {
    width: 114,
    height: 90,
    position: 'absolute',
    top: -30,
  },
  rating: {
    backgroundColor: '#60B246',
    width: 29,
    height: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
    left: 40,
  },
  listContent: {
    paddingBottom: 60,
  },
});
