import axios from 'axios';
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
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import BASE_URI from '../../android/config.url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Loader from '../components/loader';

const Biryani = ({route}) => {
  // const images = [require('../assets/pizza.png')];

  const textb = route.params;
  const [heroImage, setHeroImage] = useState(require('../assets/Dish.png'));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {width, height} = Dimensions.get('window');
  const [emptyMessage, setEmptyMessage] = useState('');
  const navigation = useNavigation();
  const imageFunction = () => {
    if (textb === 'Biryani') {
      setHeroImage(require('../assets/Dish.png'));
    } else if (textb === 'Burger') {
      setHeroImage(require('../assets/dish2.png'));
    } else if (textb === 'shawarma') {
      setHeroImage(require('../assets/dish2.png'));
    } else if (textb === 'Rolls') {
      setHeroImage(require('../assets/dish2.png'));
    } else if (textb === 'pizza') {
      setHeroImage(require('../assets/dish2.png'));
    } else if (textb === 'chinese') {
      setHeroImage(require('../assets/dish2.png'));
    }
  };
  const getRestaurantsWithLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      async position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        await mapFunction(latitude, longitude); // Call function to fetch restaurants with obtained location
        setLoading(false);
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const mapFunction = async (latitude, longitude) => {
    console.log(latitude, longitude);
    const token = await AsyncStorage.getItem('token');
    await axios({
      method: 'GET',
      url: `${BASE_URI}/api/restaurant/category/${latitude}/${longitude}/${textb}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(
      res => {
        console.log(res.data);

        setData(res.data.data);
      },
      err => {
        const error = err.response.data.message;
        if (
          error === 'Restaurants not found with this category in your location!'
        ) {
          setEmptyMessage(
            'Restaurants not found with this category in your location!',
          );
        }
        console.log(error);
      },
    );
  };

  useEffect(() => {
    imageFunction();
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
        <Text style={{fontSize: 11, fontWeight: '300'}}>
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
      <View style={Styles.header}>
        <View style={Styles.title}>
          <TouchableOpacity
            style={Styles.arrow}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color={'white'} size={30} />
          </TouchableOpacity>

          <Text style={Styles.text}>{textb}</Text>

          <Image
            source={heroImage}
            style={{
              height: height * 0.25,
              width: width * 0.2,
              resizeMode: 'contain',
              marginTop: '-10%',
            }}
          />
        </View>
        <View style={Styles.headertext}>
          <Text style={Styles.lines}>
            Indulge in the Aromatic Delight {'\n'} Savor Every Bite of Our
            Biryani!
          </Text>
        </View>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              borderColor: '#D6D6D6',
            }}>
            <TouchableOpacity style={Styles.filter}>
              <Text style={{fontSize: 12, color: 'black'}}>filter</Text>
              <Image
                source={require('../assets/filter.png')}
                style={{width: 10, height: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.filter}>
              <Text style={{fontSize: 12, color: 'black'}}>Sort By</Text>
              <Image
                source={require('../assets/arrow3.png')}
                style={{width: 5, height: 10}}
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.dottedLine}></View>

          <View>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={render}
              contentContainerStyle={Styles.listContent}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <View style={Styles.restaurantbox}>
                    {emptyMessage ? (
                      <Text style={{color: 'black'}}>{emptyMessage}</Text>
                    ) : (
                      <Text style={Styles.restaurant}>
                        Restaurants for {textb}
                      </Text>
                    )}
                  </View>
                </>
              }
            />
          </View>
        </>
      )}
    </View>
  );
};
export default Biryani;
const Styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '25%',
    backgroundColor: '#202020',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  arrow: {
    margin: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: '6%',
    color: 'white',
  },
  text2: {
    color: 'white',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headertext: {
    marginTop: '-10%',
    alignItems: 'center',
  },
  lines: {
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  filter: {
    borderWidth: 1,
    width: '18%',
    height: 30,
    borderRadius: 30,
    borderColor: '#D6D6D6',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
    paddingLeft: 10,
    flexDirection: 'row',
    paddingRight: 10,
  },
  restaurant: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  restaurantbox: {
    marginTop: 10,
    marginLeft: 16,
  },
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
});
