import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import GoogleMapScreen from '../../src/screens/map';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const MapScreen = () => {
  const navigation = useNavigation();
  const [popup, setPopup] = useState(false);
  const [searchPopDown, SetSearchPopDown] = useState(false);
  const [searchresults, setSearchReasult] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [cordinates, setCordinates] = useState({});
  const [address, setAddress] = useState(null);
  const [newAddress, setNewAddress] = useState('');
  const [Data, setData] = useState(null);
  const [inputText, setInputText] = useState('');

  // const handleAddressUpdate = newAddress => {
  //   setaddress2(newAddress);
  //   // console.log(address, 'this is parent components data');
  //   // setData(address);
  //   console.log(address2, 'this is data of your location');
  //   // setData(inputText);
  //   // console.log(Data);
  // };
  const handleAddressUpdate = useCallback(newAddress => {
    setAddress(prevAddress => {
      if (prevAddress !== newAddress) {
        console.log(newAddress, 'this is data of your location');
        return newAddress;
      }
    });
  }, []);
  const footerHeight = useRef(new Animated.Value(height * 0.28)).current;
  const footerBackgroundColor = useRef(new Animated.Value(0)).current;
  const headerHeight = useRef(new Animated.Value(height * 0.2)).current;
  const headerOpacity = useRef(new Animated.Value(1)).current;
  const accessToken = `pk.ea008d8c047df0626596d547069f4861`;

  const flatlist = ({item}) => (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() => {
        // console.log(item.lat, item.lon);
        setCordinates({lat: item.lat, lon: item.lon});
        const latitude = item.lat;
        const longitude = item.lon;
        getAddressFromCoordinates(latitude, longitude);
        SetSearchPopDown(!searchPopDown);
      }}>
      <Image
        source={require('../assets/dot.png')}
        style={{height: 10, width: 10, margin: 16}}
      />
      <Text style={{color: 'white'}}>
        {item.firstTwoWords}
        {'\n'}
        <Text style={{fontSize: 12, lineHeight: 20}}>
          {item.stateName} {item.pincode}
        </Text>
      </Text>
    </TouchableOpacity>
  );
  const getLatLongFromAddress = async text => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${text}&format=json&`,
      });

      const locationData = response.data.map((item, index) => {
        const nameParts = item.display_name.split(', ');
        const firstTwoWords = nameParts.slice(0, 2).join(', ');
        const pincode = nameParts[nameParts.length - 2];
        const stateName = nameParts[nameParts.length - 3];

        return {
          id: lastId + index + 1, // Auto-incrementing ID
          firstTwoWords: firstTwoWords,
          pincode: pincode,
          stateName: stateName,
          lat: item.lat,
          lon: item.lon,
        };
      });

      setLastId(lastId + response.data.length); // Update lastId for future increments
      setSearchReasult(locationData); // Store locations in state
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };

  useEffect(() => {
    console.log(searchresults, 'Updated searchResults'); // This will log the state after it updates
  }, [searchresults]);

  const handlePopup = () => {
    setPopup(!popup);
  };
  const handleSearchPopDown = () => {
    SetSearchPopDown(!searchPopDown);
  };
  // const handleSearch = text => {
  //   getLatLongFromAddress(text);
  //   // fetchLocationDetails(text);
  // };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`,
      );
      setNewAddress(response.data);
      console.log(address, 'okok');
    } catch (error) {
      console.error(error);
      setNewAddress('Error occurred');
    }
  };

  const handleInputChange = text => {
    if (text.length === 0) {
      setSearchReasult([]); // Clear search results when input is cleared
    } else if (text.length >= 3) {
      getLatLongFromAddress(text); // Fetch data when input has at least 3 characters
    }
  };

  useEffect(() => {
    if (popup) {
      Animated.parallel([
        Animated.timing(footerHeight, {
          toValue: height * 0.7,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(footerBackgroundColor, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(footerHeight, {
          toValue: height * 0.27,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(footerBackgroundColor, {
          toValue: 0,
          duration: 400,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [popup]);

  useEffect(() => {
    if (searchPopDown) {
      Animated.parallel([
        Animated.timing(headerHeight, {
          toValue: height * 2,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(headerOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(headerHeight, {
          toValue: height * 0.2,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(headerOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [searchPopDown]);

  const backgroundColor = footerBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', '#202020'],
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        style={
          popup
            ? Styles.popDownHeader
            : searchPopDown
            ? [Styles.header, {height: headerHeight, opacity: headerOpacity}]
            : [Styles.header, {height: headerHeight, opacity: headerOpacity}]
        }>
        <View>
          <View style={Styles.title}>
            <TouchableOpacity
              style={Styles.arrow}
              onPress={
                searchPopDown ? handleSearchPopDown : () => navigation.goBack()
              }>
              <AntDesign name="arrowleft" color={'white'} size={30} />
            </TouchableOpacity>
            <Text style={Styles.headerText}>Search or Add new address</Text>
          </View>
          <TextInput
            style={Styles.Searchinput}
            placeholder="Search for area or street"
            placeholderTextColor={'#FA4A0C'}
            onPress={searchPopDown ? null : handleSearchPopDown}
            onChangeText={handleInputChange}
          />
        </View>
        {searchPopDown && (
          <View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/nav.png')}
                style={{height: 20, width: 26, margin: 25, marginLeft: 40}}
              />
              <Text style={{color: '#FA4A0C', margin: 20, fontSize: 20}}>
                Use Current Location
              </Text>
            </TouchableOpacity>
            <Text style={{color: 'white', marginHorizontal: 'auto'}}>
              ....................................................................................
            </Text>
            <Text
              style={{
                color: 'white',
                margin: 10,
                fontSize: 20,
                marginHorizontal: 40,
              }}>
              Search Results
            </Text>
            <FlatList
              data={searchresults}
              renderItem={flatlist}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </Animated.View>

      <View style={Styles.map}>
        <GoogleMapScreen
          model={cordinates}
          onAddressUpdate={handleAddressUpdate}
        />
      </View>
      <Animated.View
        style={[
          Styles.footer,
          {
            height: footerHeight,
            backgroundColor: backgroundColor,
          },
        ]}>
        <View
          style={
            popup
              ? {
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }
              : {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 30,
                  marginLeft: 50,
                  marginRight: 50,
                }
          }>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/nav2.png')}
              style={{height: 17, width: 22, margin: 30}}
            />
            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text
                style={
                  popup
                    ? {fontWeight: '600', color: 'white'}
                    : {fontWeight: '600', color: 'black'}
                }>
                {newAddress
                  ? newAddress.address.road ||
                    newAddress.address.suburb ||
                    newAddress.address.village ||
                    newAddress.address.state_district
                  : address
                  ? address.address.suburb ||
                    address.address.road ||
                    newAddress.address.village ||
                    address.address.state_district
                  : 'pin to locate'}
              </Text>

              <Text style={popup ? {color: 'white'} : {color: 'black'}}>
                {newAddress
                  ? newAddress.address.city || newAddress.address.postcode
                  : address
                  ? address.address.city || address.address.postcode
                  : 'pin to locate'}
              </Text>
            </View>
          </TouchableOpacity>
          {!popup && (
            <TouchableOpacity style={Styles.change}>
              <Text style={{color: 'black'}}>Change</Text>
            </TouchableOpacity>
          )}
        </View>

        {popup && (
          <View style={Styles.container}>
            <Text style={Styles.instructionText}>
              Please Provide Your Full Address for
            </Text>
            <Text style={Styles.instructionText}>
              Fast and Accurate Delivery!
            </Text>
            <TextInput
              style={[Styles.input, {marginTop: 10}]}
              placeholder="House / Flat / Floor"
              placeholderTextColor={'#FFF'}
              onChangeText={text2 => setInputText(text2)}
            />
            <TextInput
              style={Styles.input}
              placeholder="Area / Sector / Locality"
              placeholderTextColor={'#FFF'}
            />
            <Text style={Styles.optionalText}>
              .................. May be Used to assist Delivery
              ..................
            </Text>
            <TextInput
              style={Styles.input}
              placeholder="Receiver's Number (OPTIONAL)"
              placeholderTextColor={'#FFF'}
            />
            <TextInput
              style={Styles.input}
              placeholder="Receiver's Name (OPTIONAL)"
              placeholderTextColor={'#FFF'}
            />
            <View style={Styles.buttonContainer}>
              <TouchableOpacity style={Styles.smallButton}>
                <Image
                  source={require('../assets/home.png')}
                  style={{width: 15, height: 16}}
                />
                <Text style={Styles.buttonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.smallButton}>
                <Image
                  source={require('../assets/house.png')}
                  style={{width: 15, height: 16}}
                />
                <Text style={Styles.buttonText}>Office</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={popup ? Styles.darkButton : Styles.button}
          onPress={handlePopup}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '400'}}>
            {popup ? 'Submit' : 'Enter more address details'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default MapScreen;

const Styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#202020',
    height: height * 0.2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    zIndex: 1,
  },
  popDownHeader: {
    display: 'none',
  },
  searchPopDown: {
    width: '100%',
    height: height * 1,
    backgroundColor: 'blue',
    zIndex: 1,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    margin: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  Searchinput: {
    color: '#FA4A0C',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingLeft: 18,
    width: width * 0.8,
    marginLeft: width * 0.1,
  },
  map: {
    backgroundColor: 'red',
    width: width,
    height: height * 0.9,
    top: 0,
    position: 'absolute',
  },
  footer: {
    width: width,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    borderColor: '#D6D6D6',
    borderWidth: 1,
  },
  change: {
    width: '30%',
    height: 35,
    marginTop: 20,
    margin: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#FA4A0C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  darkButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#FA4A0C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'flex-start',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 10,
  },
  locationTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  locationSubtitle: {
    color: 'white',
    fontSize: 14,
  },
  instructionText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#202020',
    borderRadius: 10,
    height: 45,
    paddingLeft: 15,
    color: 'white',
    marginBottom: 15,
    borderColor: 'white',
    borderWidth: 0.5,
  },
  optionalText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
    opacity: 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smallButton: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: width * 0.37,
    height: 40,
    justifyContent: 'space-between',
    paddingLeft: 13,
    paddingRight: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});
