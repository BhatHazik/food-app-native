import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height * 0.9,
    top: 0,
    position: 'absolute',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  addressContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
  },
});

export default function GoogleMapScreen({onAddressUpdate, model}) {
  console.log(model, 'this is model object');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);

  const getLocation = () => {
    if (model.lat && model.lon) {
      console.log('Using model location');
      setLatitude(parseFloat(model.lat));
      setLongitude(parseFloat(model.lon));
      console.log(latitude, longitude, 'model coordinates set');
    } else {
      console.log('Using device location');
      Geolocation.getCurrentPosition(
        async position => {
          const latitude = position.coords.latitude;
          setLatitude(latitude);
          const longitude = position.coords.longitude;
          setLongitude(longitude);
          console.log(latitude, longitude, 'device coordinates set');
        },
        error => {
          console.error('Error getting location:', error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  };

  const accessToken = `pk.ea008d8c047df0626596d547069f4861`;
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`,
      );
      setAddress(response.data);
    } catch (error) {
      console.error(error);
      setAddress('Error occurred');
    }
  };

  const handleMapPress = e => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    console.log(latitude, longitude, 'on map press');
    setLatitude(latitude);
    setLongitude(longitude);
    getAddressFromCoordinates(latitude, longitude);
  };

  useEffect(() => {
    getLocation();
  }, [model]);

  useEffect(() => {
    if (address) {
      onAddressUpdate(address);
    }
  }, [address, onAddressUpdate]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: latitude || 37.78825,
          longitude: longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}>
        {latitude && longitude && (
          <Marker coordinate={{latitude, longitude}} title="Pinned Location" />
        )}
      </MapView>
    </View>
  );
}
