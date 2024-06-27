import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Animated,
} from 'react-native';
import GoogleMapScreen from '../../src/screens/map';

const {width, height} = Dimensions.get('window');

const MapScreen = () => {
  const navigation = useNavigation();
  const [popup, setPopup] = useState(false);
  const [searchPopDown, SetSearchPopDown] = useState(false);

  const footerHeight = useRef(new Animated.Value(height * 0.28)).current;
  const footerBackgroundColor = useRef(new Animated.Value(0)).current;

  const handlePopup = () => {
    setPopup(!popup);
  };
  const handleSearchPopDown = () => {
    setPopup(!searchPopDown);
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

  const backgroundColor = footerBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', '#202020'],
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {searchPopDown ? (
        <View style={Styles.header}>
          <View>
            <View style={Styles.title}>
              <TouchableOpacity
                style={Styles.arrow}
                onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/Back.png')}
                  style={{width: 22, height: 20}}
                />
              </TouchableOpacity>
              <Text style={Styles.headerText}>Search or Add new address</Text>
            </View>
            <TextInput
              style={Styles.Searchinput}
              placeholder="Search for area or street"
              placeholderTextColor={'#FA4A0C'}
            />
          </View>
        </View>
      ) : null}
      {popup ? (
        <View style={Styles.header}>
          <View>
            <View style={Styles.title}>
              <TouchableOpacity
                style={Styles.arrow}
                onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/Back.png')}
                  style={{width: 22, height: 20}}
                />
              </TouchableOpacity>
              <Text style={Styles.headerText}>Search or Add new address</Text>
            </View>
            <TextInput
              style={Styles.Searchinput}
              placeholder="Search for area or street"
              placeholderTextColor={'#FA4A0C'}
            />
          </View>
        </View>
      ) : (
        <View style={Styles.header}>
          <View>
            <View style={Styles.title}>
              <TouchableOpacity
                style={Styles.arrow}
                onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/Back.png')}
                  style={{width: 22, height: 20}}
                />
              </TouchableOpacity>
              <Text style={Styles.headerText}>Search or Add new address</Text>
            </View>
            <TextInput
              style={Styles.Searchinput}
              placeholder="Search for area or street"
              placeholderTextColor={'#FA4A0C'}
            />
          </View>
        </View>
      )}
      <View style={Styles.map}>
        <GoogleMapScreen />
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
                Kursoo Rajbagh{' '}
              </Text>
              <Text style={popup ? {color: 'white'} : null}>Srinagar</Text>
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
              onPress={handleSearchPopDown}
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
            Enter more address details{' '}
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
    height: height * 0.2,
    backgroundColor: '#202020',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    zIndex: 1,
  },
  title: {
    flexDirection: 'row',
  },
  arrow: {
    margin: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 25,
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
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
